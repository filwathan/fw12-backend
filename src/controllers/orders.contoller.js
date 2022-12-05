const ordersModel = require('../models/orders.model')
const errorHandler = require('../helpers/errorHandler.helper')


exports.allOrders = (req, res) =>{
  ordersModel.allOrders((err, data)=>{
    if (err){
      return errorHandler(err, res)
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'you get all Orders',
        results: data.rows
      })
    }
  })
}

exports.singleOrder = (req, res) =>{
  ordersModel.singleOrder(req.params,(err, data) =>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'you get single Orders',
        results: data.rows[0]
      })
    }
  })

}

exports.createOrder = (req, res) =>{
  ordersModel.createOrder(req.body, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'create Orders is done',
        results: data.rows[0]
      })
    }
  })
}

exports.updateOrder = (req, res) =>{
  ordersModel.updateOrder(req, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'update Orders is done',
        results: data.rows[0]
      })
    }
  })
}

exports.deleteOrder = (req, res) =>{
  ordersModel.deleteOrder(req.params, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'delete Orders is done',
        results: data.rows[0]
      })
    }
  })

}
