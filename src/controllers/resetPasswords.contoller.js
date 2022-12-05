const resetPasswordsModel = require('../models/ResetPasswords.model')
const errorHandler = require('../helpers/errorHandler.helper')
const filter = require('../helpers/filter.helper')

exports.allResetPasswords = (req, res) =>{
  const sortable = ['numberResetPassword', 'insertDate', 'updateDate']
  filter(req.query, sortable, resetPasswordsModel.countResetPasswords, res, (filter, pageInfo)=>{
    resetPasswordsModel.allResetPasswords(filter, (err, data)=>{
      if (err){
        return errorHandler(err, res)
      }
      else{
        return res.status(200).json({
          succes: true,
          message: 'you get all ResetPasswords',
          pageInfo,
          results: data.rows
        })
      }
    })
  })
}

exports.singleResetPassword = (req, res) =>{
  resetPasswordsModel.singleResetPassword(req.params,(err, data) =>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'you get single ResetPasswords',
        results: data.rows[0]
      })
    }
  })

}

exports.createResetPassword = (req, res) =>{
  console.log(req.body)
  resetPasswordsModel.createResetPassword(req.body, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'create ResetPasswords is done',
        results: data.rows[0]
      })
    }
  })
}

exports.updateResetPassword = (req, res) =>{
  resetPasswordsModel.updateResetPassword(req, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'update ResetPasswords is done',
        results: data.rows[0]
      })
    }
  })
}

exports.deleteResetPassword = (req, res) =>{
  resetPasswordsModel.deleteResetPassword(req.params, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'delete ResetPasswords is done',
        results: data.rows[0]
      })
    }
  })

}
