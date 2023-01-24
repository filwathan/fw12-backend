const premiereModel = require('../models/premieres.model')
const errorHandler = require('../helpers/errorHandler.helper')
const filter = require('../helpers/filter.helper')

exports.allPremieres = (req, res) =>{
  const sortable = ['premiereName', 'insertDate', 'updateDate']
  filter(req.query, sortable, premiereModel.countPremieres, res, (filter, pageInfo)=>{
    premiereModel.allPremieres(filter, (err, data)=>{
      if (err){
        return errorHandler(err, res)
      }
      else{
        return res.status(200).json({
          succes: true,
          message: 'you get all Premieres',
          pageInfo,
          results: data.rows
        })
      }
    })
  })
}

exports.singlePremiere = (req, res) =>{
  premiereModel.singlePremiere(req.params,(err, data) =>{
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

exports.createPremiere = (req, res) =>{
  console.log(req.body)
  premiereModel.createPremiere(req.body, (err, data)=>{
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

exports.updatePremiere = (req, res) =>{
  premiereModel.updatePremiere(req, (err, data)=>{
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

exports.deletePremiere = (req, res) =>{
  premiereModel.deletePremiere(req.params, (err, data)=>{
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

exports.premiereLocationByMovie = (req, res) =>{
  premiereModel.premiereLocationByMovie(req.params,(err, data) =>{
    if(err){
      console.log(err)
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'you get single Premiere Location by id',
        results: data.rows
      })
    }
  })

}
