const moviesGenresModel = require('../models/moviesGenres.model')
const errorHandler = require('../helpers/errorHandler.helper')

exports.allMoviesGenres = (req, res) =>{
  moviesGenresModel.allMoviesGenres((err, data)=>{
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

exports.singleMoviesGenres = (req, res) =>{
  moviesGenresModel.singleMoviesGenres(req.params,(err, data) =>{
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

exports.createMoviesGenres = (req, res) =>{
  console.log(req.body)
  moviesGenresModel.createMoviesGenres(req.body, (err, data)=>{
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

exports.updateMoviesGenres = (req, res) =>{
  moviesGenresModel.updateMoviesGenres(req, (err, data)=>{
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

exports.deleteMoviesGenres = (req, res) =>{
  moviesGenresModel.deleteMoviesGenres(req.params, (err, data)=>{
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
