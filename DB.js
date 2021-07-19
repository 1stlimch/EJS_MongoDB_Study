const mongoose = require('mongoose'); //모듈 가져오기

module.exports = function () {
  mongoose.connect(`mongodb://localhost:27017/limchDB`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }); //연결 세팅

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log('Connect! node & mongoDB using mongoose');
  });

  return mongoose;
};
