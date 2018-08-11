var express = require('express');
var cookieParser = require('cookie-parser');//这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。
var bodyParser = require('body-parser');//node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
var path = require('path');
var app = express();

var list = require('./book/list')

// 载入中间件
app.use(express.static(path.join(__dirname, '../public/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


list(app)

app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../public/dist', 'index.html'))
})

var server = app.listen(9000, function () {

    var host = server.address().address
    var port = server.address().port
	host = host=='::'?"localhost":host;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
