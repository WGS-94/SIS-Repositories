import mongoose from 'mongoose';
require('dotenv').config();

class Database {
  constructor(){
    this.mongo()
  }

  mongo(){

    this.mongoConnection = mongoose.connect(process.env.MONGO_ALT,
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true
    }, () => {
      console.log('connected to DB...')
    })
  }
}

export default new Database();
//module.exports = new Database()
