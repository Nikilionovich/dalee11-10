const { arrauto } = require("../data/data");
const {findauto}=require("../utils/utilytyother");
const fs=require("fs");
const path=require("path");
const changenarush = (data) => {
    const { Marka, Nomer,narusheniya,costnarush } = data;
    let index=findauto(Marka.toLowerCase(),Nomer);
    if (index==-1) {
        throw new Error("Не нашел нужное авто")
    }
    arrauto[index].narusheniya=narusheniya;
    arrauto[index].costnarush=costnarush;
    try {
        fs.writeFileSync(path.join(__dirname,"../data","json","auto.json"),JSON.stringify(arrauto,null,2),"utf-8");
    } catch (error) {
        throw new Error(`ошибка пути ////${error}`);
    }
    
}
const changesometh=(data)=>{
    const {Marka,Nomer,Marka1,Nomer1,kraska,datavipuska,typeeng,narusheniya,costnarush}=data;
    let myautoindex=findauto(Marka.toLowerCase(),Nomer);
    if (Marka1) arrauto[myautoindex].Marka=Marka1;
    if (Nomer1) arrauto[myautoindex].Nomer=Nomer1;
    if (kraska)arrauto[myautoindex].kraska=kraska; 
    if (datavipuska) arrauto[myautoindex].datavipuska=datavipuska; 
    if (typeeng) arrauto[myautoindex].typeeng=typeeng; 
    if (narusheniya)arrauto[myautoindex].narusheniya=narusheniya; 
    if (costnarush) arrauto[myautoindex].costnarush=costnarush; 
     try {
        fs.writeFileSync(path.join(__dirname,"../data","json","auto.json"),JSON.stringify(arrauto,null,2),"utf-8");
    } catch (error) {
        throw new Error(`ошибка пути ////${error}`);
    }
}
module.exports={changenarush,changesometh};