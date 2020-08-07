const imageRouter = require('express').Router()
const Image = require('../models/image')
const multer = require('multer')
const logger = require('../utils/logger')

/**
 * Multer tutorial by https://codeburst.io/image-uploading-using-react-and-node-to-get-the-images-up-c46ec11a7129
 * 
 */

const storage = multer.diskStorage({
  destination: ((req, file, cb) => {
    cb(null, '../uploads/')
  }),
  filename: ((req, file, cb) => {
    cb(null, Date.now() + file.originalname)
  })
})

const filter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'iamge/png') {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: filter
})

imageRouter.route('/upload').post(upload.single('imageData'), async (req, res) => {
  console.log(req.body)
  const body = req.body
  const file = req.file

  const newImage = new Image({
    imageName: body.imageName,
    imageData: file.path
  })

  try {
    const imageSaved = await newImage.save()

    console.log({ imageSaved })

    res.status(200).json({
      success: true,
      document: imageSaved
    })
  } catch (e) {
    logger.error(e.message)
    res.status(400).json({ error: e.message })
  }

})