const modelUsers = require('../models/users.model')
const errorHandler = require('../helpers/errorHandler.helper')

exports.readAllUsers = (req, res) => {
  modelUsers.ambilAllUsers((err, data)=>{
    if (err){
      return errorHandler(err, res)
    }
    else{
      return res.status(200).json({
        success: true,
        message: 'All User user can access',
        results: data.rows
      })
    }
  })
}

exports.readUser = (req, res) => {
  console.log(req.params)
  modelUsers.singleUser(req.params, (err,data)=>{
    if (err){
      return errorHandler(err, res)
      }
    else{
      return res.status(200).json({
        success: true,
        message: 'Read single user can access',
        results: data.rows[0]
      })
    }
  })

}

exports.createUser = (req, res) => {
  console.log(req.body);
  modelUsers.newUserGuest(req.body, (err, data) =>{
    if (err){
      return errorHandler(err, res)
      }
    else{
      return res.status(200).json({
        success: true,
        message: 'Create user can access',
        results: data.rows[0]
      })
    }
  })
}

exports.deleteUser = (req, res) => {
  console.log(req.params);
  modelUsers.deleteUser(req.params, (err, data) =>{
    if (err){
      return errorHandler(err, res)
      }
    else{
      console.log(data.rows)
      return res.status(200).json({
        success: true,
        message: 'delete user can access',
        results: data.rows[0]
      })
    }
  })
}

exports.updateUser = (req, res) => {
  modelUsers.updateUser(req, (err, data) =>{
    if (err){
      console.log("masuk ke error controller")
      return errorHandler(err, res)
      }
    else{
      console.log("masuk ke success")
      console.log(data.rows)
      return res.status(200).json({
        success: true,
        message: 'update user can access',
        results: data.rows[0]
      })
    }
  })
}
