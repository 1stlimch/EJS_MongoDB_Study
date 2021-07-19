module.exports = class myMongoose {
  constructor() {
    this.mongoose = require('mongoose');
    this.mongoose.connect(`mongodb://localhost:27017/limchDB`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }); //연결 세팅

    this.db = this.mongoose.connection;

    this.db.on('error', console.error.bind(console, 'connection error:'));
    this.db.once('open', function () {
      console.log('Connect! node & mongoDB using mongoose');
    });

    //Schema 정의
    this.postSchema = new this.mongoose.Schema({
      title: String,
      text: String,
      time: String,
    });

    //Compile schema into a Model
    //mongoose.model('콜렉션이름', 스키마 객체 명)
    //실제론 DB 안에는 콜렉션이름 뒤에 s가 붙는다.
    //DB내에 같은이름의 콜렉션이 이미 존재한다면 새로 만들어지지 않는다.
    this.Post = this.mongoose.model('post', this.postSchema);

    return this;
  }
};
