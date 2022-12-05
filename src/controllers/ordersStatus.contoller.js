const ordersStatusModel = require('../models/ordersStatus.model')
const errorHandler = require('../helpers/errorHandler.helper')
const filter = require('../helpers/filter.helper')

exports.allOrdersStatus = (req, res) =>{
  const sortable = ['orderStatusName', 'insertDate', 'updateDate']
  filter(req.query, sortable, ordersStatusModel.countOrdersStatus, res, (filter, pageInfo)=>{
    ordersStatusModel.allOrdersStatus(filter, (err, data)=>{
      if (err){
        return errorHandler(err, res)
      }
      else{
        return res.status(200).json({
          succes: true,
          message: 'you get all OrdersStatus',
          pageInfo,
          results: data.rows
        })
      }
    })
  })
}

exports.singleOrderStatus = (req, res) =>{
  ordersStatusModel.singleOrderStatus(req.params,(err, data) =>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'you get single Orders Status',
        results: data.rows[0]
      })
    }
  })

}

exports.createOrderStatus = (req, res) =>{
  ordersStatusModel.createOrderStatus(req.body, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'create Orders Status is done',
        results: data.rows[0]
      })
    }
  })
}

exports.updateOrderStatus = (req, res) =>{
  ordersStatusModel.updateOrderStatus(req, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'update Orders Status is done',
        results: data.rows[0]
      })
    }
  })
}

exports.deleteOrderStatus = (req, res) =>{
  ordersStatusModel.deleteOrderStatus(req.params, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'delete Orders Status is done',
        results: data.rows[0]
      })
    }
  })

}
