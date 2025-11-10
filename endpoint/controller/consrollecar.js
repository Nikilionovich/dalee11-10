const url = require("url");
const { funcofcreateauto } = require("../utils/utilitypost");
const{arrauto}=require("../data/data");
const { filterauto, getallauto } = require("../utils/utiltyget");
const { funcofdelauto } = require("../utils/utilitydel");
const { changenarush, changesometh } = require("../utils/utilityput");

const controllerallauto = (req, res) => {
    const myarrauto = arrauto;
    console.log(myarrauto);
    res.writeHead(200, { "Content-type": "application/josn" });
    res.end(JSON.stringify(myarrauto));
}
const controllerfilt = (req, res) => {
    const filteredarr = filterauto(req, res);
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
    try {
        let parseddata = JSON.stringify(data);
        changenarush(parseddata);
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(JSON.stringify({ message: "Все зашибись" }));
    } catch (error) {
        res.writeHead(501, { "Content-type": "application/json" })
        res.end(JSON.stringify({ error }));
    }
}
const controlchangesomth = (req, res) => {
    let data = "";
    req.on("data", (chunk) => data += chunk);
    try {
        let parseddata = JSON.parse(data);
        changesometh(parseddata);
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(JSON.stringify({ message: "Все зашибись" }));
    } catch (error) {
        res.writeHead(501, { "Content-type": "application/json" })
        res.end(JSON.stringify({ error }));
    }
}
module.exports = { controllerallauto, controllerfilt, conrolcreate, controlldeleteauto, controllerraisenarush, controlchangesomth };
