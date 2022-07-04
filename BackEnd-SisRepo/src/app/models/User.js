const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');

const UserSchema = new mongoose.Schema({
  name : {
    type: String,
    required: true
  },
  email: {
    type:String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
}); 

UserSchema.pre('save', async function(next) {
  if(! this.isModified('password')){
    return next()
  }

  this.password = await bcrypt.hash(this.password, 8)
})


UserSchema.methods = {

  passwordCompare (password) {
    return bcrypt.compare(password , this.password)
  }
}


UserSchema.statics = {
  generateToken({id}){
    return jwt.sign({id},authConfig.secret , {
      expiresIn: authConfig.expiresIn
    })
  }
}

//export default model('User', UserSchema);
module.exports = new mongoose.model('User', UserSchema);