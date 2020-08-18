const UserBase = require('../models/userBase')
const Comment = require('../models/comment')
const jwt = require('jsonwebtoken')
const { transporter } = require('../utils/nodemailer')
const logger = require('../utils/logger')


const removeUser = async (id) => {
  const userToRemove = await UserBase.findById(id)

  if (!userToRemove) {
    throw new Error('User doesn\'t exist or has already been removed')
  }

  console.log({ userToRemove })

  // const decodedToken = jwt.verify(token, process.env.SECRET)
  // console.log({decodedToken})
  // if (!token || !decodedToken.id) {
  //   throw new Error('token missing or invalid')
  // }

  // const userRemoving = await UserBase.findById(decodedToken.id)

  // if (userRemoving._id.toString() !== userToRemove._id.toString()) {
  //   throw new Error('You are not authorized to remove this user.')
  // }

  const userComments = await Comment.find({ user: userToRemove._id })

  await userToRemove.remove()

  const removeComments = userComments.map(async comment => {
    await comment.remove()
  })

  Promise.all(removeComments)

}

const sendVerificationEmail = (user) => {
  try {
    const token = jwt.sign({ user: user.id }, process.env.EMAIL_SECRET, { expiresIn: '1d' })

    const url = `http://localhost:3001/verification/${token}`

    transporter.sendMail({
      to: user.email, // list of receivers
      subject: 'Verify your account', // Subject line
      html: `<h1>Verify</h1><div>Verify your email by clicking the link below <br/> <ahref=${url}>${url}</a></p></div>`, // html body
    })

  } catch (err) {
    logger.error(err.message)
  }
}

module.exports = {
  removeUser,
  sendVerificationEmail
}