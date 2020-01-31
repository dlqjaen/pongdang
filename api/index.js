const express = require('express')

// Create express instnace
const app = express()

// Require API routes
const food = require('./routes/food')
const users = require('./routes/users')

// Import API Routes
app.use('/food', food)
app.use('/users', users)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
