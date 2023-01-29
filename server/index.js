// Import express module
import express from 'express'
// Import dotenv module
import * as dotenv from 'dotenv'
// Import cors module
import cors from 'cors'

// Import connectDB function from mongodb/connect.js
// import connectDB from './mongodb/connect.js'
// Import postRoutes from routes/postRoutes.js
// import postRoutes from './routes/postRoutes.js'
// Import dalleRoutes from routes/dalleRoutes.js
// import dalleRoutes from './routes/dalleRoutes.js'

// Configure dotenv
dotenv.config()

// Create an express app
const app = express()
app.use(cors()) // Use cors middleware
// Use express.json middleware with a limit of 50mb
app.use(express.json({ limit: '50mb' }))

// Use postRoutes for requests to the /api/v1/post route
// app.use('/api/v1/post', postRoutes)
// Use dalleRoutes for requests to the /api/v1/dalle route
// app.use('/api/v1/dalle', dalleRoutes)

// Handle GET requests to the root route
app.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Hello from DALL.E!',
  })
})

// Asynchronous function to start the server
const startServer = async () => {
  try {
    // Connect to MongoDB using the URL specified in the MONGODB_URL environment variable
    // connectDB(process.env.MONGODB_URL)
    // Start the server on port 8080 and log a message to the console
    app.listen(8080, () => console.log('Server started on port 8080'))
  } catch (error) {
    // Log any errors that occur
    console.log(error)
  }
}

// Call startServer to start the server
startServer()