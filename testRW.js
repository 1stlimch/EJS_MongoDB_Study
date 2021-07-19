const mongoose = require('mongoose'); //모듈 가져오기

mongoose.connect(`mongodb://localhost:27017/limchDB`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); //연결 세팅

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connect! node & mongoDB using mongoose');
});

//Schema 정의
const postSchema = new mongoose.Schema({
  title: String,
  text: String,
  time: String,
});

//Compile schema into a Model
//mongoose.model('콜렉션이름', 스키마 객체 명)
//실제론 DB 안에는 콜렉션이름 뒤에 s가 붙는다.
//DB내에 같은이름의 콜렉션이 이미 존재한다면 새로 만들어지지 않는다.
const Post = mongoose.model('post', postSchema);

//테스트 포스트 생성
const newPost = new Post({
  title: "new Post's title",
  text: "new Post's text",
  time: new Date().toString(),
});

//DB에 데이터 저장
newPost.save(function (err, aaaa) {
  if (err) return console.error(err);
  else return console.log('Post saved!');
});

//DB에서 전체 데이터 보기
//Model객체명.find(function (에러, 읽어진 데이터) {함수})
Post.find(function (err, posts) {
  if (err) return console.error(err);
  printPost(posts[0]);
});

//functions
function printPost(post) {
  console.log(post._id);
  console.log(post.title);
  console.log(post.text);
  console.log(post.time);
  console.log(post.__v);
}
