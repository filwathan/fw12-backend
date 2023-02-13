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
      if(!data.rows[0])
      {
        return res.status(400).json({
          succes: false,
          message: 'id cant find',
        })
      }
      return res.status(200).json({
        succes: true,
        message: 'you get single Orders',
        results: data.rows[0]
      })
    }
  })
}

exports.orderByUser = (req, res) =>{
  ordersModel.orderByUser(req.params,(err, data) =>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      if(!data.rows.length)
      {
        return res.status(400).json({
          succes: false,
          message: 'id user cant find',
        })
      }
      return res.status(200).json({
        succes: true,
        message: 'you get Orders by user',
        results: data.rows
      })
    }
  })
}

exports.orderDetailsById = (req, res) =>{
  ordersModel.orderDetailsById(req.params,(err, data) =>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      if(!data.rows.length)
      {
        return res.status(400).json({
          succes: false,
          message: 'id order cant find',
        })
      }
      return res.status(200).json({
        succes: true,
        message: 'you get Orders by idOrders',
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
