// Import the mongoose library
import mongoose from 'mongoose'

// Define a function called "connectDB" to connect to a MongoDB database and takes in a "url" as an argument
const connectDB = (url) => {
  // Set the "strictQuery" option to true in mongoose
  mongoose.set('strictQuery', true)

  // Attempt to connect to the mongo database using the provided "url"
  mongoose
    .connect(url)
    // If the connection is successful, log a message to the console
    .then(() => console.log('connected to mongo'))
    // If the connection is unsuccessful, log an error message and the error to the console
    .catch((err) => {
      console.error('failed to connect with mongo')
      console.error(err)
    })
}

// Export the "connectDB" function as the default export
export default connectDB
