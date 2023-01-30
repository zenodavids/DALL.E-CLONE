// Import express module
import express from 'express'

// Import the entire dotenv module for accessing environment variables
import * as dotenv from 'dotenv'

// Import OpenAI's Configuration and OpenAIApi classes
import { Configuration, OpenAIApi } from 'openai'

// Configure dotenv to access environment variables
dotenv.config()

// Create an express router
const router = express.Router()

// Initialize a Configuration instance with the OpenAI API key
const configuration = new Configuration({
  // access the OpenAI API key from the environment variables
  apiKey: process.env.OPENAI_API_KEY,
})

// Initialize an OpenAIApi instance with the Configuration
const openai = new OpenAIApi(configuration)

// Handle GET requests to the root route
router.route('/').get((req, res) => {
  // Respond with a 200 status code and a JSON message
  res.status(200).json({ message: 'Hello from DALL-E!' })
})

// Handle POST requests to the root route
router.route('/').post(async (req, res) => {
  try {
    // Get the prompt from the request body
    const { prompt } = req.body
    // Call the OpenAI API's createImage method with the prompt and other options
    const aiResponse = await openai.createImage({
      prompt, // the prompt to generate an image for
      n: 1, // generate 1 image
      size: '1024x1024', // image size of 1024x1024
      response_format: 'b64_json', // response format as base64 JSON
    })

    // Get the generated image from the response
    const image = aiResponse.data.data[0].b64_json

    // Respond with a 200 status code and the generated image in JSON format
    res.status(200).json({ photo: image })
  } catch (error) {
    // Log the error to the console
    console.error(error)
    // Respond with a 500 status code and either the error message or a default message
    res
      .status(500)
      .send(error?.response.data.error.message || 'Something went wrong')
  }
})

// Export the router as the default export
export default router
