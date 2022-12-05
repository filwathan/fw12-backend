const errorHandler = (err, res) =>{
  if (err){
    console.log("masuk ke error handeller")
    console.log(err)
    return res.status(500).json({
      success: false,
      message: 'error semua error'
    })
  }
}

module.exports = errorHandler
