import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name : {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true,
    unique: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
}); 

export default mongoose.model('User', UserSchema);