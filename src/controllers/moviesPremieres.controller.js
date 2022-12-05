const moviesPremieresModel = require('../models/moviesPremieres.model')
const errorHandler = require('../helpers/errorHandler.helper')

exports.allMoviesPremieres = (req, res) =>{
  moviesPremieresModel.allMoviesPremieres((err, data)=>{
    if (err){
      return errorHandler(err, res)
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'you get all Movies Premieres',
        results: data.rows
      })
    }
  })
}

exports.singleMoviesPremieres = (req, res) =>{
  moviesPremieresModel.singleMoviesPremieres(req.params,(err, data) =>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'you get single Movies Premieres',
        results: data.rows[0]
      })
    }
  })

}

exports.createMoviesPremieres = (req, res) =>{
  console.log(req.body)
  moviesPremieresModel.createMoviesPremieres(req.body, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'create Movies Premieres is done',
        results: data.rows[0]
      })
    }
  })
}

exports.updateMoviesPremieres = (req, res) =>{
  moviesPremieresModel.updateMoviesPremieres(req, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'update Movies Premieres is done',
        results: data.rows[0]
      })
    }
  })
}

exports.deleteMoviesPremieres = (req, res) =>{
  moviesPremieresModel.deleteMoviesPremieres(req.params, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'delete Movies Premieres is done',
        results: data.rows[0]
      })
    }
  })

}
