var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, '../public/dist')));

// app.get('/', function (req, res) {
// res.send("node启动成功")
// });

var server = app.listen(9000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
