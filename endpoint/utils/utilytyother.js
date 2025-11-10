const {arrauto}=require("../data/data");
const findauto = (Marka, Nomer) => {
    return arrauto.findIndex((item) => {
        if (Marka == item.Marka.toLowerCase() && item.Nomer == Nomer) {
            return true
        }
    })
}
module.exports={findauto};