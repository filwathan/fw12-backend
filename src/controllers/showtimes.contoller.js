const showtimesModel = require('../models/showtimes.model')
const errorHandler = require('../helpers/errorHandler.helper')

exports.allShowtimes = (req, res) =>{
  showtimesModel.allShowtimes((err, data)=>{
    if (err){
      return errorHandler(err, res)
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'you get all Showtimes',
        results: data.rows
      })
    }
  })
}

exports.singleShowtime = (req, res) =>{
  showtimesModel.singleShowtime(req.params,(err, data) =>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'you get single Showtimes',
        results: data.rows[0]
      })
    }
  })

}

exports.createShowtime = (req, res) =>{
  console.log(req.body)
  showtimesModel.createShowtime(req.body, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'create Showtimes is done',
        results: data.rows[0]
      })
    }
  })
}

exports.updateShowtime = (req, res) =>{
  showtimesModel.updateShowtime(req, (err, data)=>{
    console.log(req.body)
    console.log("req.body")
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'update Showtimes is done',
        results: data.rows[0]
      })
    }
  })
}

exports.deleteShowtime = (req, res) =>{
  showtimesModel.deleteShowtime(req.params, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'delete Showtimes is done',
        results: data.rows[0]
      })
    }
  })

}
