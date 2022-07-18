import mongoose from 'mongoose';

const RepoSchema = new mongoose.Schema({
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

module.exports = new mongoose.model('Repository', RepoSchema);