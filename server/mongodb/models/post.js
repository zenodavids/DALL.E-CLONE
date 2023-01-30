// import the mongoose module
import mongoose from 'mongoose'

// Define the Post schema
const Post = new mongoose.Schema({
  // name field is a string, and is required
  name: { type: String, required: true },
  // prompt field is a string, and is required
  prompt: { type: String, required: true },
  // photo field is a string, and is required
  photo: { type: String, required: true },
})

// Create a model based on the schema
const PostSchema = mongoose.model('Post', Post)

// Export the Post model
export default PostSchema
