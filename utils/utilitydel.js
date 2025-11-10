const fs=require("fs");
const path=require("path")
const {arrauto}=require("../data/data");
const{findauto}=require("../utils/utilytyother")
const funcofdelauto=(Marka,Nomer)=>{
    const i=findauto(Marka,Nomer);
    console.log(arrauto.splice(i,1))
try {
    fs.writeFileSync(path.join(__dirname,"../data","json","auto.json"),JSON.stringify(arrauto.splice(i,1),null,2),"utf-8")
console.log("Файл удален записан");
} catch (err) {
 throw new Error(`Ошибка путя//${err.message}`);
}
}
module.exports={funcofdelauto};
