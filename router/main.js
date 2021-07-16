//Code for When get request, render page
//just link between clients's url and page

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('index.html');
  });
  app.get('/write', function (req, res) {
    res.render('write.html');
  });
};
