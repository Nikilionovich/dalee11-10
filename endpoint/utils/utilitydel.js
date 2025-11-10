const fs=require("fs");
const path=require("path")
let  {arrauto}=require("../data/data");
const funcofdelauto=(Marka,Nomer)=>{
     arrauto=arrauto.filter((item) => {
        if (!(item.Marka.toLowerCase() == Marka.toLowerCase() && item.Nomer == Nomer)) {
            return true
        }
    })

try {
    fs.writeFileSync(path.join(__dirname,"../data","json","auto.json"),JSON.stringify(arrauto,null,2),"utf-8")
console.log("Файл удален записан");
} catch (err) {
 throw new Error(`Ошибка путя//${err.message}`);
}
}
module.exports={funcofdelauto};
