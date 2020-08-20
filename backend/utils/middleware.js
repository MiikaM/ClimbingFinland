const morgan = require('morgan')
const logger = require('./logger')
const jwt = require('jsonwebtoken')

morgan.token('contents', function (req) {
  return JSON.stringify(req.body)
})

//Logs the request info
const morg = morgan(':method :url :status :res[content-length] - :response-time ms :contents')

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'Unknown place' })
}

const errorHandler = (error, request, response, next) => {

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  } else if (error.name === 'MongoError') {
    return response.status(400).json({ error: error.message })
  } else if (error.name === 'JsonWebTokenError') {
    return response.status(401).json({
      error: 'invalid token'
    })
  }

  logger.error(error.message)

  next(error)
}

const authenticate = (req, res, next) => {
  const token = req.cookies.token

  try {
    if (!token) {
      res.status(401).send('Unauthorized: No token provided').end()
    } else {
      const decodedToken = jwt.verify(token, process.env.SECRET)
      req.user = {
        username: decodedToken.username,
        id: decodedToken.id,
        verified: decodedToken.verified,
        role: decodedToken.role,
      }

      next()
    }
  } catch (err) {
    res.status(401).send('Unauthorized: Invalid token').end()
  }

}

const resetAuthentication = (req, res, next) => {
  const token = req.cookies.token

  try {
    if (!token) {
      res.status(404).send('Page was not found').end()
    } else {
      const decodedToken = jwt.verify(token, process.env.RESET_SECRET)
      if (!decodedToken) {
        res.status(404).send('Page was not found').end()
      }
      req.id = decodedToken.id
      next()
    }
  } catch (err) {
    res.status(401).send('Unauthorized: Invalid token').end()
  }

}

const tokenExtractor = (request, response, next) => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    request.token = authorization.substring(7)
  }
  next()
}

module.exports = {
  morg,
  unknownEndpoint,
  errorHandler,
  authenticate,
  resetAuthentication,
  tokenExtractor
}
