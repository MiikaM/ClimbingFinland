const config = require('./utils/config')
const express = require('express')
require('express-async-errors')
const app = express()
const cors = require('cors')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
const mongoose = require('mongoose')
const placesRouter = require('./controllers/places')


const mongoUrl = config.MONGODB_URI
mongoose.set('runValidators', true)
logger.info('Connecting to ', mongoUrl)

mongoose.connect(mongoUrl, { useCreateIndex: true, useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    logger.info('Connected to MongoDB')
  })
  .catch(error => {
    logger.error('Error occured connecting to MongoDB', error.message)
  })

app.use(cors())
app.use(express.json())
app.use(middleware.morg)
// app.use(middleware.tokenExtractor)
// app.use('/api/users', usersRouter)
// app.use('/api/blogs', blogsRouter)
app.use('/api/places', placesRouter)

// if (process.env.NODE_ENV === 'test') {
//   const testingRouter = require('./controllers/testing')
//   app.use('/api/testing', testingRouter)
// }

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)


module.exports = app