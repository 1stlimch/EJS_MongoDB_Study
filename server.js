const DB = require("./DB")
const DBSV = new DB()
var express = require("express")
var app = express()
app.use(express.json()) //body-parser 대신 express에 내장된 parser를 쓰기위한 코드
app.use(express.static("public")) //templetes's base directory for read static file(img, css, js ...)
//위의 .use는 node의 비동기 특성 때문인지 하단에 작성하면 제대로 작동하지 않는것 같음
var router = require("./router/main")(app, DBSV)

app.set("views", __dirname + "/views") //ejs & templete을 모아둔 폴더 위치를 알림
app.set("view engine", "ejs") //express에게 뷰 엔진은 ejs로 사용하것이라 알림
app.engine("html", require("ejs").renderFile)

var server = app.listen(3000, function () {
	console.log("Express server has started on port 3000")
})
