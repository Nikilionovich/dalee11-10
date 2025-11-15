const { arrauto } = require("../data/data");
const {findauto}=require("../utils/utilytyother");
const fs=require("fs");
const path=require("path");
const changenarush = (data) => {
    const { Marka, Nomer,narusheniya,costnarush } = data;
    let index=findauto(Marka,Nomer);
    if (index==-1) {
        throw new Error("Не нашел нужное авто")
    }
    if (!narusheniya=="") {
        arrauto[index].narusheniya+=parseInt(narusheniya);
    }
    if (!costnarush=="") {
       arrauto[index].costnarush+=parseInt(costnarush);
    }
   
    try {
        fs.writeFileSync(path.join(__dirname,"../data","json","auto.json"),JSON.stringify(arrauto,null,2),"utf-8");
    } catch (error) {
        throw new Error(`ошибка пути ////${error}`);
    }
    
}
const changesometh=(data)=>{
    const {Marka,Nomer,Marka1,Nomer1,kraska,datavipuska,typeeng,narusheniya,costnarush}=data;
    let myautoindex=findauto(Marka,Nomer);
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
const changephoto=(data)=>{
const {Marka,Nomer,photo}=data;
let myautoindex=findauto(Marka,Nomer);
arrauto[myautoindex].photo=photo;
try {
        fs.writeFileSync(path.join(__dirname,"../data","json","auto.json"),JSON.stringify(arrauto,null,2),"utf-8");
    } catch (error) {
        throw new Error(`ошибка пути ////${error}`);
    }
}
module.exports={changenarush,changesometh,changephoto};