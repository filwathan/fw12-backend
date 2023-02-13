const movieModel = require('../models/movies.model')
const errorHandler = require('../helpers/errorHandler.helper')
const filter = require('../helpers/filter.helper')

const fs = require('fs')

exports.allMovies = (req, res) =>{
  const sortable = ['titleMovie', 'direcredBy', 'synopsis','insertDate', 'updateDate']
  // console.log(req.userData) // untuk melihat id yang sedang login dari token
  filter(req.query, sortable, movieModel.countMovies, res, (filter, pageInfo)=>{
    movieModel.allMovies(filter, (err, data)=>{
      if (err){
        return errorHandler(err, res)
      }
      else{
        return res.status(200).json({
          succes: true,
          message: 'you get all Movies',
          pageInfo,
          results: data.rows
        })
      }
    })
  })
}

exports.allMoviesSemua = (req, res) =>{
  const sortable = ['titleMovie', 'direcredBy', 'synopsis','insertDate', 'updateDate']
  // // console.log(req.userData) // untuk melihat id yang sedang login dari token
  filter(req.query, sortable, movieModel.countMovies, res, (filter, pageInfo)=>{
    movieModel.allMoviesSemua(filter, (err, data)=>{
      if (err){
        console.log(err)
        return errorHandler(err, res)
      }
      else{
        return res.status(200).json({
          succes: true,
          message: 'you get all Movies Semua',
          pageInfo,
          results: data.rows
        })
      }
    })
  })
}

exports.singleMovie = (req, res) =>{
  movieModel.singleMovie(req.params,(err, data) =>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'you get single movie',
        results: data.rows[0]
      })
    }
  })

}

exports.singleMovieDetail = (req, res) =>{
  movieModel.singleMovieDetail(req.params,(err, data) =>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'you get single movie details',
        results: data.rows[0]
      })
    }
  })

}

exports.createMovie = (req, res) =>{
  console.log(req.body)
  movieModel.createMovie(req.body, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'create movie is done',
        results: data.rows[0]
      })
    }
  })
}

exports.updateMovie = (req, res) =>{
  if(req.file){
    req.body.picture = req.file.path
    movieModel.singleMovie(req.params, (err, data)=>{
      if(data.rows.length){
        const [user] = data.rows
        if(user.picture){
          fs.rm('uploads/'+user.picture, {force: true}, (err)=>{
            if(err){
              return errorHandler(err, res)
            }
          })
        }
      }
    })
  }
  movieModel.updateMovie(req, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'update movie is done',
        results: data.rows[0]
      })
    }
  })
}

exports.deleteMovie = (req, res) =>{
  movieModel.deleteMovie(req.params, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'delete movie is done',
        results: data.rows[0]
      })
    }
  })
}

exports.nowShowingMovie = (req, res) =>{
  const sortable = ['titleMovie', 'direcredBy', 'synopsis','insertDate', 'updateDate']
  filter(req.query, sortable, movieModel.countNowShowingMovies, res, (filter, pageInfo)=>{
    movieModel.nowShowingMovie( filter, (err, data)=>{
      if(err){
        return errorHandler(err,res);
      }
      else{
        return res.status(200).json({
          succes: true,
          message: 'now showing',
          pageInfo,
          results: data.rows
        })
      }
    })
  })
}

exports.upcomingMovie = (req, res) =>{
  const sortable = ['titleMovie', 'direcredBy', 'synopsis','insertDate', 'updateDate']
  filter(req.query, sortable, movieModel.countUpcomingMovie, res, (filter, pageInfo)=>{
    movieModel.upcomingMovie(filter, (err, data)=>{
      if(err){
        return errorHandler(err,res);
      }
      else{
        return res.status(200).json({
          succes: true,
          message: 'now showing',
          pageInfo,
          results: data.rows
        })
      }
    })
  })
}
