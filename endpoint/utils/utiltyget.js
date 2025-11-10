const url=require("url")
const { arrauto } = require("../data/data");
const filterauto = (req,res) => {
    const {Marka,Nomer,kraska,datavipuska,typeeng,narusheniya}=url.parse(req.url,true).query;
    console.log(Marka, typeeng);
    let filteredauto = arrauto.filter((item) => {
        if (Marka) {
            if (item.Marka.toLowerCase() == Marka.toLowerCase()) {
                return true
            }
        }
        else if (Nomer) {
            if (item.Nomer == Nomer) {
                return true
            }
        }
        else if (kraska) {
            if (item.kraska == kraska) {
                return true
            }
        }
        else if (datavipuska) {
            if (item.datavipuska == datavipuska) {
                return true
            }
        }
        else if (typeeng) {
            if (item.typeeng == typeeng) {
                return true
            }
        }
        else if (narusheniya) {
            if (item.narusheniya == narusheniya) {
                return true
            }
        }
    })
return filteredauto;
}
const getallauto = () => {
    const arr=arrauto;
    return arr;
}
module.exports = { filterauto, getallauto }