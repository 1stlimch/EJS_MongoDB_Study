var express = require('express');
var app = express();
var router = require('./routes/main')(app);

app.set('views', __dirname + '/views'); //ejs 파일을 모아둔 폴더 위치를 알림
app.set('view engine', 'ejs'); //express에게 뷰 엔진은 ejs로 사용하것이라 알림
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function () {
  console.log('Express server has started on port 3000');
});
app.use(express.static('public'));
