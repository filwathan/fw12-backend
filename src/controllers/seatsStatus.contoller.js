const seatsStatusModel = require('../models/seatsStatus.model')
const errorHandler = require('../helpers/errorHandler.helper')

exports.allSeatsStatus = (req, res) =>{
  seatsStatusModel.allSeatsStatus((err, data)=>{
    if (err){
      return errorHandler(err, res)
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'you get all Seats Status',
        results: data.rows
      })
    }
  })
}

exports.singleSeatStatus = (req, res) =>{
  seatsStatusModel.singleSeatStatus(req.params,(err, data) =>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'you get single Seats Status',
        results: data.rows[0]
      })
    }
  })

}

exports.createSeatStatus = (req, res) =>{
  seatsStatusModel.createSeatStatus(req.body, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'create Seats Status is done',
        results: data.rows[0]
      })
    }
  })
}

exports.updateSeatStatus = (req, res) =>{
  seatsStatusModel.updateSeatStatus(req, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'update Seats Status is done',
        results: data.rows[0]
      })
    }
  })
}

exports.deleteSeatStatus = (req, res) =>{
  seatsStatusModel.deleteSeatStatus(req.params, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'delete Seats Status is done',
        results: data.rows[0]
      })
    }
  })

}
