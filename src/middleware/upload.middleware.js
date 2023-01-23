const multer = require('multer');
const errorHandler = require('../helpers/errorHandler.helper')


const path = require("path");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: 'dqyu7zzqx',
  api_key: '366244723729729',
  api_secret: '0nXkot7LetAJNq2jm1OMeH_LzyE'
});


const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "pengennonton",
    format: async (req, file) => path.extname(file.originalname).slice(1), // supports promises as well
    public_id: (req, file) => {
      const randomNumber = Math.round(Math.random() * 90000);
      const filename = `${randomNumber}${Date.now()}`;
      return filename;
    },
  },
});

// const storage = multer.diskStorage({
//   destination: (req, file, callback) =>{
//     callback(null, 'uploads')
//   },
//   filename: (req, file, callback) =>{
//     const extension = file.originalname.split('.')
//     const ext = extension[extension.length - 1]
//     const name = `${new Date().getDate()}_${new Date().getTime()}.${ext}`
//     callback(null, name)
//   }
// })

const upload = multer({
  storage,
  // limits: {fileSize: 1024 * 1024 *2},
  // fileFilter: (req, file, callback) =>{
  //   const extension = file.originalname.split('.')
  //   const ext = extension[extension.length - 1]
  //   if(ext !== 'jpg' && ext !== 'png' && ext !== 'jpeg'){
  //     return errorHandler(err,res)
  //   }
  //   callback(null, true)
  // }

})

const uploadMiddleware = upload.single('picture')

module.exports =  (req, res , next) =>{
  uploadMiddleware(req, res, (err)=>{
    if(err){
      return errorHandler(err, res)
    }
    next()
  })
}
