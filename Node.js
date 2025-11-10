const http = require("http");
const router = require("./router/router")
const { port } = require("./data/data.js");
const {randfirstobj}=require("./utils/randomizer.js");
randfirstobj();
const app = http.createServer(router).listen(port, () => { console.log(`Рабатает на порте${port}`) });
// Реализуйте клиентскую и серверную часть обработчиков, описанных ниже для выполнения банальных математических подсчётов.
// Для работы с каждым из обработчиков 
//(для каждого пункта задания с отдельным маршрутом по типу /calc /list-calc /complex-calc) 
//на стороне клиента должны быть отдельные страницы и интерфейс для работы с ними. В т.ч.
// при необходимости с вводом/выбором операции
// - / * +
// ..и иные, интересные вам