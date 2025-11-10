const url = require("url");
const path = require("path");
const fs = require("fs");
const { contentTypes } = require("../data/data");
const defaulteconroller = (req, res) => {
    let parsedpath = url.parse(req.url, true);
    parsedpath.pathname = decodeURI(parsedpath.pathname);
    let filepath = path.join(__dirname, "../public", parsedpath.pathname);
    fs.access(filepath, fs.constants.R_OK, (ERR) => {
        if (ERR) {
            res.writeHead(404, { "Content-type": "text/html; charset=utf-8" })
            filepath = path.join(__dirname, "../public", "html", "pagenotfound.html");
            fs.createReadStream(filepath).pipe(res);
        }
        else {
            const extname = path.extname(filepath);
            const ContentType = contentTypes[extname]|| "application/octet-stream";
            res.writeHead(200, { "Content-type": ContentType });
            fs.createReadStream(filepath).pipe(res);
        }
    })
}
module.exports={defaulteconroller};