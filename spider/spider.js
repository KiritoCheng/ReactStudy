var https = require("https");
var cheerio = require('cheerio');
var i = 0;
var url = "https://book.douban.com/subject/1885170/";
// 9999999


//封装一层函数
// function fetchPage(x, iStart, iTotal, client) {
//     startRequest(x, iStart, iTotal, client);
// }

//TODO
function startRequest() {
    https.get(url, function (res) {
        var html = "";  //save html
        res.setEncoding('utf-8'); //防止中文乱码
        res.on("data", function (data) {
            html += data;
        });
        res.on("end", function () {
            var $ = cheerio.load(html, { decodeEntities: false });
            console.log($('.rating_num').html())//评分
            let vals = $('#info').find($('.pl')).map((i, el) => {

                console.log($(el).next().html())
                return {
                    key: $(el).text(),
                    val: $(el).nextAll('br').text().trim()
                }
            }).get()
            // console.log(vals)
        });
    }).on("error", function () {
        console.log("获取课程结果错误！");
    });
}

startRequest()