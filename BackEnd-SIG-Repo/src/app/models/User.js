import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

const UserSchema = new mongoose.Schema({
  name : {
    type: String,
    required: true
  },
  email: {
    type: String,
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

module.exports = new mongoose.model('User', UserSchema);