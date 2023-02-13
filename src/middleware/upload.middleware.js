const multer = require('multer');
const errorHandler = require('../helpers/errorHandler.helper')
const path = require("path");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
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


const upload = multer({
  storage,
  limits: {fileSize: 1024 * 1024 *5},
  fileFilter: (req, file, callback) =>{
    const extension = file.originalname.split('.')
    const ext = extension[extension.length - 1]
    if(ext !== 'jpg' && ext !== 'png' && ext !== 'jpeg'){
      return errorHandler(err,res)
    }
    callback(null, true)
  }

})

const uploadFile = upload.single('picture')
module.exports =  (req, res , next) =>{
  uploadFile(req, res, (err)=>{
    if(err){
      return errorHandler(err, res)
    }
    next()
  })
}

