const{controllerraisenarush,controlchangesomth,controlchangephoto}=require("../controller/consrollecar");
const methodput=(req,res)=>{
     switch (req.url) {
        case "/":
            res.writeHead(302, { Location: "/index.html" });
            break;
        case "/adminpage/dump/raisenarush":
          controllerraisenarush(req,res);
            break;
        case "/adminpage/dump/changesometh":
            controlchangesomth(req,res)
            break;
            case "/adminpage/dump/changephoto":
            controlchangephoto(req,res)
            break;
        default:
            defaulteconroller(req, res);
            break;
    }
}
module.exports=methodput;