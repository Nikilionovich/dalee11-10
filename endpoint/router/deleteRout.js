const url=require("url");
const {controlldeleteauto}=require("../controller/consrollecar");
const methoddelete=(req,res)=>{
const parsedname=url.parse(req.url,true);
 switch (parsedname.pathname) {
     case "/adminpage/delauto":
           controlldeleteauto(req,res);
         break;
     default:
        defaulteconroller(req,res)
         break;
 }
}
module.exports=methoddelete;