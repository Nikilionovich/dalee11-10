const { defaulteconroller } = require("../controller/dafauleteconroller");
const {conrolcreate}=require("../controller/consrollecar");
const methodpost = (req, res) => {
    switch (req.url) {
        case "/":
            res.writeHead(302, { Location: "/index.html" });
            break;
        case "/adminpage/createauto":
           conrolcreate(req,res);
            break;
        default:
            defaulteconroller(req, res);
            break;
    }
}
module.exports = methodpost;