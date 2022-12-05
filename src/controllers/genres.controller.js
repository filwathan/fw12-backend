const genreModel = require('../models/genres.model')
const errorHandler = require('../helpers/errorHandler.helper')
const filter = require('../helpers/filter.helper')

exports.allGenres = (req, res) =>{
  const sortable = ['genreName', 'insertDate', 'updateDate']
  filter(req.query, sortable, genreModel.countGenres, res, (filter, pageInfo)=>{
    genreModel.allGenres(filter, (err, data)=>{
      if (err){
        return errorHandler(err, res)
      }
      else{
        return res.status(200).json({
          succes: true,
          message: 'you get all Genres',
          pageInfo,
          results: data.rows
        })
      }
    })
  })
}

exports.singleGenre = (req, res) =>{
  genreModel.singleGenre(req.params,(err, data) =>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'you get single genre',
        results: data.rows[0]
      })
    }
  })

}

exports.createGenre = (req, res) =>{
  console.log(req.body)
  genreModel.createGenre(req.body, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'create genre is done',
        results: data.rows[0]
      })
    }
  })
}

exports.updateGenre = (req, res) =>{
  genreModel.updateGenre(req, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'update genre is done',
        results: data.rows[0]
      })
    }
  })
}

exports.deleteGenre = (req, res) =>{
  genreModel.deleteGenre(req.params, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'delete genre is done',
        results: data.rows[0]
      })
    }
  })

}
