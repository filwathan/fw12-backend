const multer = require('multer');
const errorHandler = require('../helpers/errorHandler.helper')


const storage = multer.diskStorage({
  destination: (req, file, callback) =>{
    callback(null, 'uploads')
  },
  filename: (req, file, callback) =>{
    const extension = file.originalname.split('.')
    const ext = extension[extension.length - 1]
    const name = `${new Date().getDate()}_${new Date().getTime()}.${ext}`
    callback(null, name)
  }
})


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
