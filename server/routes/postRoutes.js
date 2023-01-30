// Import express module
import express from 'express'

// Import dotenv module to access environment variables
import * as dotenv from 'dotenv'

// Import cloudinary module
import { v2 as cloudinary } from 'cloudinary'

// Import Post schema from the mongodb model
import Post from '../mongodb/models/post.js'

// Configure dotenv
dotenv.config()

// Create express router
const router = express.Router()

// Configure cloudinary with environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

// Handle GET request to "/" route
router.route('/').get(async (req, res) => {
  try {
    // Get all posts from the database
    const posts = await Post.find({})
    // Respond with success status and posts data
    res.status(200).json({ success: true, data: posts })
  } catch (err) {
    // Respond with failure status and error message
    res.status(500).json({
      success: false,
      message: 'Fetching posts failed, please try again',
    })
  }
})

// Handle POST request to "/" route
router.route('/').post(async (req, res) => {
  try {
    // Get name, prompt, and photo data from request body
    const { name, prompt, photo } = req.body
    // Upload photo to cloudinary and get its URL
    const photoUrl = await cloudinary.uploader.upload(photo)
    // Create new post with name, prompt, and photo URL
    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    })
    // Respond with success status and new post data
    res.status(200).json({ success: true, data: newPost })
  } catch (err) {
    // Respond with failure status and error message
    res.status(500).json({
      success: false,
      message: 'Unable to create a post, please try again',
    })
  }
})

// Export router as default
export default router
