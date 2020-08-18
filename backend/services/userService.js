const UserBase = require('../models/userBase')
const Comment = require('../models/comment')
const jwt = require('jsonwebtoken')
const { transporter } = require('../utils/nodemailer')
const logger = require('../utils/logger')


const removeUser = async (id, username) => {
  const userToRemove = await UserBase.findById(id)
  const userRemoving = await UserBase.findOne({ username: username })

  if (!userToRemove) {
    throw new Error('User doesn\'t exist or has already been removed')
  }

  if (userToRemove !== userRemoving) {
    throw new Error('You are not authorized to remove this user')
  }

  console.log({ userToRemove })

  const userComments = await Comment.find({ user: userToRemove._id })

  await userToRemove.remove()

  const removeComments = userComments.map(async comment => {
    await comment.remove()
  })

  Promise.all(removeComments)

}


const updateUser = async (userToUpdate_username, userUpdating_id, newUser) => {

  const userInDb = await UserBase.findOne({ username: userToUpdate_username })

  if (userInDb.id.toString() !== userUpdating_id.toString()) {
    throw new Error('Only logged in user can update their information.')
  }

  try {
    const userToUpdate = {...userInDb, ...newUser}

    console.log({userToUpdate})
    await userInDb.update(userToUpdate, { new: true })

    return userToUpdate

  } catch (err) {
    throw new Error(err.message)
  }

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
  sendVerificationEmail,
  updateUser
}