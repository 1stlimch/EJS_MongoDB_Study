//Code for When get request, render page
//just link between clients's url and page

module.exports = function (app, DBSV) {
  app.get('/', function (req, res) {
    console.log('main!');
    res.render('index.html');
  });
  app.get('/write', function (req, res) {
    console.log('write!');
    res.render('write.html');
  });

  //app.post(path, callback [, callback ...])
  //display posts
  app.post('/', function (req, res) {});

  // save a post
  app.post('/write', function (req, res) {
    const title = req.body.title;
    const text = req.body.text;

    if ((!title || !text || title.length === 0, text.length === 0)) {
      return;
    } else {
      //포스트 객체 생성
      const newPost = new DBSV.Post({
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
