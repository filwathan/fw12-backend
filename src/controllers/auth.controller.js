const userModel = require('../models/users.model')
const resetPasswordsModel = require('../models/resetPasswords.model')
const errorHandler = require('../helpers/errorHandler.helper')
const jwt = require('jsonwebtoken')


exports.login = (req, res) => {
  userModel.singleUserByEmail(req.body.email, (err, {rows}) =>{
    if (rows.length){
      const [user] = rows
      if(req.body.password === user.password)
      {
        const token = jwt.sign({id: user.idUser}, 'backend-secret')
        return res.status(200).json({
          succes: true,
          message: 'Login success',
          result:  {token}
        })
      }
    }
    return res.status(401).json({
      succes: false,
      message: 'email or password is wrong',
    })
  })
}

exports.register = (req, res) =>{
  if (req.body.fullName && req.body.lastName && req.body.email && req.body.password && req.body.phone ){
    userModel.newUserGuest(req.body, (err, {rows})=>{
      if(rows.length){
        const [users] = rows
        const token = jwt.sign({id: users.idUser}, 'backend-secret')
        return res.status(200).json({
          success: true,
          message: 'Create User Guest Success',
          result: {token}
        })
      }
      else{
        return errorHandler(err, res);
      }
    })
  }
  else{
    return res.status(400).json({
      succes: false,
      message: 'fields cannot empty',
    })
  }
}

exports.forgotPassword = (req, res)=>{
  userModel.singleUserByEmail(req.body.email, (err, {rows}) =>{
    if (err){
      return errorHandler(err, res)
    }
    if(rows.length){
      const [users] = rows
      const code = Math.ceil(Math.random() * 100000 +1)
      users.code = code
      resetPasswordsModel.createResetPassword(users, (errCreate, {rows : rowsCreate}) =>{
        const token = jwt.sign ({id:  users.idUser}, 'backend-secret')
        return res.status(200).json({
          success: true,
          message: 'Forgot Password is success, please check your Code',
          //result: {token}
        })
      })
    }
    else{
      return res.status(400).json({
        success: false,
        message: 'email cant find database'
      })
    }

  })
}

exports.resetPassword = (req, res)=>{
  const {password, confirmPassword} = req.body
  if (password === confirmPassword){
    resetPasswordsModel.singleResetPasswordByEmailAndCode(req.body, (err, {rows})=>{
      if(err){
        return errorHandler(err, res)
      }
      if (rows.length){
        const [requestResetPassword] = rows
        if( new Date( requestResetPassword.insertDate).getTime() + (1000 * 60 * 1) < new Date().getTime() ){
          return res.status(400).json({
            success: false,
            message: 'expired code'
          })
        }
        req.params.idUser = requestResetPassword.idUser
        userModel.updateUser(req, (errUpdate, {rows : rowsUpdate})=>{
          if(errUpdate){
            return errorHandler(errUpdate, res)
          }
          if (rowsUpdate.length){
            const [users] = rowsUpdate
            resetPasswordsModel.deleteResetPassword(requestResetPassword, (errDelete, {rows : rowsDelete})=>{
              if(rowsDelete.length){
                const token = jwt.sign ({id:  users.idUser}, 'backend-secret')
                return res.status(200).json({
                  success: true,
                  message: 'Password has been Updated',
                  //result: {token}
                })

              }
              else{
                return errorHandler(errDelete, res)
              }
            })
          }
        })
      }
      else{
        return res.status(400).json({
          success: false,
          message: 'please check your email and code'
        })
      }
    })
  }
  else{
    return res.status(400).json({
      success: false,
      message: 'password and confirm password must be same'
    })
  }
}
