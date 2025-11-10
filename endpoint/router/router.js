const methodget = require("../router/getRout");
const methodpost = require("../router/postrout");
const methoddelete = require("../router/deleteRout");
const methodput = require("../router/putrout");
const routermethod = (req, res) => {
    switch (req.method) {
        case "GET":
            methodget(req, res);
            break;
        case "POST":
            methodpost(req, res);
            break;
        case "PUT":
            methodput(req, res)
            break;
        case "DELETE":
            methoddelete(req, res)
            break;
        default:
            break;
    }

}
module.exports = routermethod;