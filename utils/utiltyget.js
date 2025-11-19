const url=require("url")
const { arrauto } = require("../data/data");
const filterauto = (req,res) => {
    const {Marka,Nomer,kraska,datavipuska,typeeng,narusheniya}=url.parse(req.url,true).query;
    let filteredauto = arrauto.filter((item) => {
        if (Marka) {
            console.log(!(item.Marka.toLowerCase() == Marka.toLowerCase()))
            console.log(Marka,"////////",item.Marka)
            if (!(item.Marka.toLowerCase() == Marka.toLowerCase())) {
                return false
            }  
        }
        else if (Nomer) {
            if (!(item.Nomer == Nomer)) {
                return false
            }
        }
        else if (kraska) {
            if (!(item.kraska == kraska)) {
                return false
            }
        }
        else if (datavipuska) {
            if (!item.datavipuska == datavipuska) {
                return false
            }
        }
        else if (typeeng) {
            if (!item.typeeng == typeeng) {
                return false
            }
        }
        else if (narusheniya) {
            if (!item.narusheniya == narusheniya) {
                return false
            }
        }
        return true;
    })
return filteredauto;
}
const getallauto = () => {
    const arr=arrauto;
    return arr;
}
module.exports = { filterauto, getallauto }