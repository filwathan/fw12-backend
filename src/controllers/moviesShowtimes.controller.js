const moviesShowtimesModel = require('../models/moviesShowtimes.model')
const errorHandler = require('../helpers/errorHandler.helper')

exports.allMoviesShowtimes = (req, res) =>{
  moviesShowtimesModel.allMoviesShowtimes((err, data)=>{
    if (err){
      return errorHandler(err, res)
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'you get all Movies Showtimes',
        results: data.rows
      })
    }
  })
}

exports.singleMoviesShowtimes = (req, res) =>{
  moviesShowtimesModel.singleMoviesShowtimes(req.params,(err, data) =>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'you get single Movies Showtimes',
        results: data.rows[0]
      })
    }
  })

}

exports.createMoviesShowtimes = (req, res) =>{
  console.log(req.body)
  moviesShowtimesModel.createMoviesShowtimes(req.body, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'create Movies Showtimes is done',
        results: data.rows[0]
      })
    }
  })
}

exports.updateMoviesShowtimes = (req, res) =>{
  moviesShowtimesModel.updateMoviesShowtimes(req, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'update Movies Showtimes is done',
        results: data.rows[0]
      })
    }
  })
}

exports.deleteMoviesShowtimes = (req, res) =>{
  moviesShowtimesModel.deleteMoviesShowtimes(req.params, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'delete Movies Showtimes is done',
        results: data.rows[0]
      })
    }
  })

}
