const fs=require("fs");
const path=require("path")
const {arrauto}=require("../data/data");
const funcofcreateauto=(data)=>{
 let {Marka,Nomer,kraska,datavipuska,typeeng,narusheniya,costnarush}=data;
 if (Marka=="") {Marka="не распознанно"}
 if (Nomer=="") {Nomer="не распознанно"}
 if (kraska=="") {kraska="не распознанно"}
 if (datavipuska=="") {datavipuska="не распознанно"}
 if (typeeng=="") {typeeng="не распознанно"}
 if (narusheniya=="") {narusheniya="не распознанно"}
 if (costnarush=="") {costnarush="не распознанно"}
 Marka[0]=Marka[0].toUpperCase();
 let obj={
    Marka,
    Nomer,
    kraska,
    datavipuska,
    typeeng,
    narusheniya,
    costnarush,
    photo:""
 }
 arrauto.push(obj);
 try {
  fs.writeFileSync(path.join(__dirname,"../data","json","auto.json"),JSON.stringify(arrauto,null,2),"utf-8");
  console.log("Файл успешно записан");
} catch (err) {
 throw new Error(`Ошибка путя//${err.message}`);
}
}
module.exports={funcofcreateauto};