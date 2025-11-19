const url = require("url");
const fs=require("fs")
const { funcofcreateauto } = require("../utils/utilitypost");
const { arrauto } = require("../data/data");
const { filterauto} = require("../utils/utiltyget");
const { funcofdelauto } = require("../utils/utilitydel");
const { changenarush, changesometh,changephoto } = require("../utils/utilityput");
const path = require("path");

const controllerallauto = (req, res) => {
    const myarrauto = arrauto;
    res.writeHead(200, { "Content-type": "application/josn" });
    res.end(JSON.stringify(myarrauto));
}
const controllerfilt = (req, res) => {
    const filteredarr = filterauto(req, res);
    fs.writeFileSync(path.join(__dirname,"../data","json","filteredauto.json"),JSON.stringify(filteredarr,null,2),"utf-8");
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify(filteredarr))
}
const conrolcreate = (req, res) => {
    let data = "";
    req.on("data", (chunk) => data += chunk);
    req.on("end", () => {
        try {
            const parseddata = JSON.parse(data);
            funcofcreateauto(parseddata);
            res.writeHead(200, { "Content-type": "application/json" });
            res.end(JSON.stringify({ message: "успешно записано" }));
        }
        catch (error) {
            res.writeHead(501, { "Content-type": "application/json" })
            res.end(JSON.stringify({ error }));
        }
    })

}
const controlldeleteauto = (req, res) => {
    let data = "";
    req.on("data", (chunk) => data += chunk);
    req.on("end", () => {
        try {
            const { Marka, Nomer } = JSON.parse(data);
            funcofdelauto(Marka, Nomer);
            res.writeHead(200, { "Content-type": "application/json" });
            res.end(JSON.stringify({ message: "успешно удалено" }));
        } catch (error) {
            console.log(error)
            res.writeHead(501, { "Content-type": "application/json" })
            res.end(JSON.stringify({ error }));
        }
    })
}
const controllerraisenarush = (req, res) => {
    let data = "";
    req.on("data", (chunk) => data += chunk);
    req.on("end", () => {
        try {
            let parseddata = JSON.parse(data);
            changenarush(parseddata);
            res.writeHead(200, { "Content-type": "application/json" });
            res.end(JSON.stringify({ message: "Все зашибись" }));
        } catch (error) {
            console.log(error)
            res.writeHead(501, { "Content-type": "application/json" })
            res.end(JSON.stringify({ error }));
        }
    })

}
const controlchangesomth = (req, res) => {
    let data = "";
    req.on("data", (chunk) => data += chunk);
    req.on("end",()=>{
         try {
        let parseddata = JSON.parse(data);
        changesometh(parseddata);
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(JSON.stringify({ message: "Все зашибись" }));
    } catch (error) {
        console.log(error)
        res.writeHead(501, { "Content-type": "application/json" })
        res.end(JSON.stringify({ error }));
    }
    })
   
}
const controlchangephoto=(req,res)=>{
    let data = "";
    req.on("data", (chunk) => data += chunk);
    req.on("end",()=>{
         try {
        let parseddata = JSON.parse(data);
        changephoto(parseddata);
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(JSON.stringify({ message: "Все зашибись" }));
    } catch (error) {
        console.log(error)
        res.writeHead(501, { "Content-type": "application/json" })
        res.end(JSON.stringify({ error }));
    }
    })
}
const conrolldownload=(req,res)=>{
    let filepath=path.join(__dirname,"../data","json","auto.json");
    res.writeHead(200,{"Content-type":"application/json",
"Content-Disposition":"attachment; filename=auto.json"});
fs.createReadStream(filepath).pipe(res);
}
const controllerdownloadsearch=(req,res)=>{
    let filepath=path.join(__dirname,"../data","json","filteredauto.json");
    res.writeHead(200,{"Content-type":"application/json",
"Content-Disposition":"attachment; filename=filteredauto.json"});
fs.createReadStream(filepath).pipe(res);
}
module.exports = { controllerallauto, controllerfilt, conrolcreate, controlldeleteauto, controllerraisenarush, controlchangesomth,controlchangephoto,conrolldownload,controllerdownloadsearch };
