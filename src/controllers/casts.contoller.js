const castsModel = require('../models/casts.model')
const errorHandler = require('../helpers/errorHandler.helper')
const filter = require('../helpers/filter.helper')

exports.allCasts = (req, res) =>{
  const sortable = ['castName', 'insertDate', 'updateDate']
  filter(req.query, sortable, castsModel.countCasts, res, (filter, pageInfo)=>{
    castsModel.allCasts(filter, (err, data)=>{
      if (err){
        return errorHandler(err, res)
      }
      else{
        return res.status(200).json({
          succes: true,
          message: 'you get all Casts',
          pageInfo,
          results: data.rows
        })
      }
    })
  })
}

exports.singleCast = (req, res) =>{
  castsModel.singleCast(req.params,(err, data) =>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'you get single casts',
        results: data.rows[0]
      })
    }
  })

}

exports.createCast = (req, res) =>{
  console.log(req.body)
  castsModel.createCast(req.body, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'create casts is done',
        results: data.rows[0]
      })
    }
  })
}

exports.updateCast = (req, res) =>{
  castsModel.updateCast(req, (err, data)=>{
    console.log(req.body)
    console.log("req.body")
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'update casts is done',
        results: data.rows[0]
      })
    }
  })
}

exports.deleteCast = (req, res) =>{
  castsModel.deleteCast(req.params, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'delete casts is done',
        results: data.rows[0]
      })
    }
  })

}
