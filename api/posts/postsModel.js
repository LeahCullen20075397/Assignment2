import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    body: {type: String, required: true},
    author: {type: String, required: true},
    upvotes: {type: Number, default: 0},
});

const PostSchema = new Schema({
    event: {type: String, required: true},
    poster: {type: String, required: true},
    location: {type: String, required: true},
    date: {type: Date, required: true},
    time: {type: String, required: true},
    link: {type: String, required: true},
    comments: [CommentSchema],
    upvotes: {type: Number, min: 0, max: 100, default: 0},
});

export default mongoose.model('posts', PostSchema);