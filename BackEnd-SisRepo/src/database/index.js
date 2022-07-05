import mongoose from 'mongoose';

require('dotenv').config();

class Database {
  constructor(){
    this.mongo()
  }

  mongo(){
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL, () => {
      console.log('connected to DB...')
    })
  }
}

module.exports = new Database()
