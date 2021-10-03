import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    required: true,
  },
  imgsrc: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Post', postSchema);
