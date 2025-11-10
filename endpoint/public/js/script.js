allcars.addEventListener("click", () => {
  getreqserver(`/car-violations/All`);
})
createauto.addEventListener("click", () => {
  postreqserv(`/adminpage/createauto`);
})
searchauto.addEventListener("click", () => {
  let reqpath = new URLSearchParams()
  let obj = {
    Marka: searchmark.value,
    Nomer: searchnomer.value,
    kraska: searchkraska.value,
    datavipuska: searchyearvipusk.value,
    typeeng: searchtypeeng.value,
    narusheniya: searchnarush.value
  }
  for (const el in obj) {
    if (obj[el] != "") {
      reqpath.set(el, obj[el]);
    }
  }
  getreqserver(`/car-violations/filt?${reqpath.toString()}`);
})
delauto.addEventListener("click", () => {
  delreqserv(`/adminpage/delauto`);
})
const getreqserver = async (reqpath) => {
  const res = await fetch(reqpath);
  const data = await res.json();
  await crenderSortedAr(data);
}
const postreqserv = async (reqpath) => {
  const res = await fetch(reqpath, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      Marka: createmark.value,
      Nomer: createnomer.value,
      kraska: createkraska.value,
      datavipuska: createyearvipusk.value,
      typeeng: createtypeeng.value,
      narusheniya: createnarush.value,
      costnarush:createcostnarush.value
    })
  });
  if (res.ok) {
    const data = await res.json();
    await crenderSortedAr(data);
  }
}
const delreqserv= async(reqpath)=>{
  const res = await fetch(reqpath, {
    method: "DELETE",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      Marka: delmark.value,
      Nomer: delnomer.value,
    })
  });
  if (res.ok) {
    alert("Удалено");
  }
}
async function crenderSortedAr(data) {
  const list = document.querySelector("#output-box");
  list.textContent = "";
  for (const el of data) {
    render(el)
  }
}
const render = (data) => {
  const list = document.querySelector("#output-box");
  const temp = document.querySelector("#templatemess");
  const item = temp.content.cloneNode(true);
  item.querySelector("#marka").textContent = data.Marka;
  item.querySelector("#nomer").textContent = data.Nomer;
  item.querySelector("#kraska").textContent = data.kraska;
  item.querySelector('#stylekraska').style = `background-color:${data.kraska}`;
  item.querySelector("#yearofvipusk").textContent = data.datavipuska;
  item.querySelector("#typeeng").textContent = data.typeeng;
  item.querySelector("#narush").textContent = data.narusheniya;
  item.querySelector("#costnarush").textContent = data.costnarush;
  list.append(item);
}