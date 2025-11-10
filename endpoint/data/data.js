const port=3000;
const fs=require("fs");
const path=require("path")
const contentTypes = {
    ".ico": "image/x-icon",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".gif": "image/gif",
    ".webp": "image/webp",
  
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
  };
  const typeofeng=["дизель","бензин","гибрид","электро"];
 const markauto = ['Toyota', 'BMW', 'Ford', 'Honda', 'Mercedes', 'Audi'];
 const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let arrauto=[
    ...JSON.parse(fs.readFileSync(path.join(__dirname,"json","auto.json"),"utf-8"))
  ]
  module.exports={port,contentTypes,arrauto,typeofeng,markauto,letters};