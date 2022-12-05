const paymentsModel = require('../models/payments.model')
const errorHandler = require('../helpers/errorHandler.helper')
const filter = require('../helpers/filter.helper')

exports.allPayments = (req, res) =>{
  const sortable = ['paymentName', 'insertDate', 'updateDate']
  filter(req.query, sortable, paymentsModel.countPayments, res, (filter, pageInfo)=>{
    paymentsModel.allPayments(filter, (err, data)=>{
      if (err){
        return errorHandler(err, res)
      }
      else{
        return res.status(200).json({
          succes: true,
          message: 'you get all Payments',
          pageInfo,
          results: data.rows
        })
      }
    })
  })
}

exports.singlePayment = (req, res) =>{
  paymentsModel.singlePayment(req.params,(err, data) =>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'you get single Payments',
        results: data.rows[0]
      })
    }
  })

}

exports.createPayment = (req, res) =>{
  paymentsModel.createPayment(req.body, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'create Payments is done',
        results: data.rows[0]
      })
    }
  })
}

exports.updatePayment = (req, res) =>{
  paymentsModel.updatePayment(req, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'update Payments is done',
        results: data.rows[0]
      })
    }
  })
}

exports.deletePayment = (req, res) =>{
  paymentsModel.deletePayment(req.params, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'delete Payments is done',
        results: data.rows[0]
      })
    }
  })

}
