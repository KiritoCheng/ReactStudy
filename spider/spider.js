var https = require("https");
var cheerio = require('cheerio');
var fs = require("fs");
var i = 0;
var url = `https://book.douban.com/subject/${i}/`;



function startRequest(url, start, callback) {
    https.get(url, function (res) {
        var html = "";  //save html
        res.setEncoding('utf-8'); //防止中文乱码
        res.on("data", function (data) {
            html += data;
        });
        res.on("end", function () {
            var $ = cheerio.load(html, { decodeEntities: false });
            let data = {}
            if ($('body').find('li').text().indexOf('呃...你想访问的页面不存在') == -1 && $('#info').html() !== null) {
                data.Grade = Number($('.rating_num').html()) //评分
                let vals = $('#info').html().split('<br>').map((k) => {
                    let text = $(k).text().trim().split(':');
                    let key = () => {
                        switch (text[0]) {
                            case '出版社':
                                return 'Publish';
                            case '原作名':
                                return 'OriginalName';
                            case '出版年':
                                return 'Year';
                            case '页数':
                                return 'Page';
                            case '定价':
                                return 'Price';
                            case '装帧':
                                return 'Thickness';
                            case '丛书':
                                return 'Type';
                            case 'ISBN':
                                return 'ISBN'
                            case '作者':
                                return 'Author'
                            case '译者:':
                                return 'Translator'
                            default:
                                return ''
                        }
                    }
                    return {
                        key: key(),
                        val: text.slice(1, text.length).join(":").replace(/\s+/g, "").replace(/[\r\n]/g, "")
                    }
                }).filter((k, i) => {
                    return k.key != '';
                })

                vals.map((k, i) => {
                    data[`${k.key}`] = k.val;
                })

            }
            callback({ [`${start}`]: data })
        });
    }).on("error", function () {
        console.log("error");
    });
}


var p1 = [];
// 2000000
for (var i = 1000001; i < 1000010; i++) {
    p1.push(new Promise((resolve, reject) => {
        startRequest(encodeURI(`https://book.douban.com/subject/${i}/`), i, (data) => {
            return resolve(data)
        })
    }))
}

Promise.all(p1).then(values => {
    fs.writeFile('data.json', JSON.stringify(values), function (err) {
        if (err) {
            return console.error(err);
        }
    });
}, reason => {
    console.log(reason)
});