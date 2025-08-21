import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IPost extends Document {
  title: string;
  content: string;
  author: string;
  tags: string[];
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema: Schema<IPost> = new Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for this post.'],
    maxlength: [100, 'Title cannot be more than 100 characters'],
  },
  content: {
    type: String,
    required: [true, 'Please provide content for this post.'],
  },
  author: {
    type: String,
    required: [true, 'Please provide an author for this post.'],
    maxlength: [50, 'Author cannot be more than 50 characters'],
  },
  tags: [{
    type: String,
    maxlength: [20, 'Tag cannot be more than 20 characters'],
  }],
  published: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

const Post: Model<IPost> = mongoose.models.Post || mongoose.model<IPost>('Post', PostSchema);

export default Post;