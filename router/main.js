//Code for When get request, render page
//just link between clients's url and page

module.exports = function (app) {
  app.get('/', function (req, res) {
    console.log('main!');
    res.render('index.html');
  });
  app.get('/write', function (req, res) {
    console.log('write!');
    res.render('write.html');
  });
};
