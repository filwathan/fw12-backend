const moviesCastsModel = require('../models/moviesCasts.model')
const errorHandler = require('../helpers/errorHandler.helper')

exports.allMoviesCasts = (req, res) =>{
  moviesCastsModel.allMoviesCasts((err, data)=>{
    if (err){
      return errorHandler(err, res)
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'you get all Movies Genres',
        results: data.rows
      })
    }
  })
}

exports.singleMoviesCasts = (req, res) =>{
  moviesCastsModel.singleMoviesCasts(req.params,(err, data) =>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'you get single Movies Genres',
        results: data.rows[0]
      })
    }
  })

}

exports.createMoviesCasts = (req, res) =>{
  console.log(req.body)
  moviesCastsModel.createMoviesCasts(req.body, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'create Movies Genres is done',
        results: data.rows[0]
      })
    }
  })
}

exports.updateMoviesCasts = (req, res) =>{
  moviesCastsModel.updateMoviesCasts(req, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'update Movies Genres is done',
        results: data.rows[0]
      })
    }
  })
}

exports.deleteMoviesCasts = (req, res) =>{
  moviesCastsModel.deleteMoviesCasts(req.params, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'delete Movies Genres is done',
        results: data.rows[0]
      })
    }
  })

}
