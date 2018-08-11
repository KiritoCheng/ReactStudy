var fs = require("fs");
var path = require('path');

module.exports = function (app) {
    app.get('/booklist', function (req, res) {
        fs.readFile(path.resolve(__dirname, "../../spider/data.json"), 'utf-8', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
            res.end(data);
        });
    })
}
