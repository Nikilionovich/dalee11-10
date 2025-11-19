const url = require("url")
const { defaulteconroller } = require("../controller/dafauleteconroller");
const { controllerfilt, controllerallauto ,conrolldownload,controllerdownloadsearch} = require("../controller/consrollecar");
const methodget = (req, res) => {
    const parsedname = url.parse(req.url, true);
    switch (parsedname.pathname) {
        case "/":
            res.writeHead(302, { location: "/index.html" })
            res.end();
            break;
        case "/car-violations/All":
            controllerallauto(req, res);
            break;
        case "/car-violations/filt":
            controllerfilt(req, res);
            break;
        case"/adminpage/dump/download":
        conrolldownload(req,res);
        break;
        case"/adminpage/dump/downloadsearch":
        controllerdownloadsearch(req,res);
        break;
        default:
            defaulteconroller(req, res);
            break;
    }
}
module.exports = methodget;