const seatsModel = require('../models/seats.model')
const errorHandler = require('../helpers/errorHandler.helper')
const filter = require('../helpers/filter.helper')

exports.allSeats = (req, res) =>{
  const sortable = ['numberSeat', 'insertDate', 'updateDate']
  filter(req.query, sortable, seatsModel.countSeats, res, (filter, pageInfo)=>{
    seatsModel.allSeats(filter, (err, data)=>{
      if (err){
        return errorHandler(err, res)
      }
      else{
        return res.status(200).json({
          succes: true,
          message: 'you get all Seats',
          pageInfo,
          results: data.rows
        })
      }
    })
  })
}

exports.singleSeat = (req, res) =>{
  seatsModel.singleSeat(req.params,(err, data) =>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'you get single Seats',
        results: data.rows[0]
      })
    }
  })

}

exports.createSeat = (req, res) =>{
  console.log(req.body)
  seatsModel.createSeat(req.body, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'create Seats is done',
        results: data.rows[0]
      })
    }
  })
}

exports.updateSeat = (req, res) =>{
  seatsModel.updateSeat(req, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'update Seats is done',
        results: data.rows[0]
      })
    }
  })
}

exports.deleteSeat = (req, res) =>{
  seatsModel.deleteSeat(req.params, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'delete Seats is done',
        results: data.rows[0]
      })
    }
  })

}
