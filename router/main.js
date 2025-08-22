//Code for When get request, render page
//just link between clients's url and page

module.exports = function (app, DBSV) {
  app.get('/', function (req, res) {
    console.log('main!');
    
    // MongoDB가 연결되지 않았거나 Post 모델이 없는 경우 빈 배열로 렌더링
    if (!DBSV.isConnected || !DBSV.Post) {
      console.log('MongoDB not connected, rendering with empty posts');
      return res.render('index', { posts: [] });
    }
    
    DBSV.Post.find(async function (err, posts) {
      if (err) {
        console.error('DB query error:', err);
        return res.render('index', { posts: [] });
      }

      let readedPosts;
      readedPosts = await posts;
      res.render('index', { posts: readedPosts });
    });
  });

  app.get('/write', function (req, res) {
    console.log('write!');
    res.render('write.html');
  });

  //app.post(path, callback [, callback ...])
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
