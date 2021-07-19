//Code for When get request, render page
//just link between clients's url and page

module.exports = function (app, DB) {
  app.get('/', function (req, res) {
    console.log('main!');
    res.render('index.html');
  });
  app.get('/write', function (req, res) {
    console.log('write!');
    res.render('write.html');
  });

  //app.post(path, callback [, callback ...])
  app.post('/write', function (req, res) {
    const title = req.body.title;
    const text = req.body.text;

    if ((!title || !text || title.length === 0, text.length === 0)) {
      return;
    } else {
      const postSchema = new DB.Schema({
        title: String,
        text: String,
        time: String,
      });

      //Compile schema into a Model
      //mongoose.model('콜렉션이름', 스키마 객체 명)
      //실제론 DB 안에는 콜렉션이름 뒤에 s가 붙는다.
      //DB내에 같은이름의 콜렉션이 이미 존재한다면 새로 만들어지지 않는다.
      const Post = DB.model('post', postSchema);

      //포스트 객체 생성
      const newPost = new Post({
        title: title,
        text: text,
        time: new Date().toString(),
      });

      //DB에 데이터 저장
      newPost.save(function (err, aaaa) {
        if (err) return console.error(err);
        else return console.log(`Post saved!\n${newPost}`);
      });
    }
  });
};
