exports.readAllUsers = (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'readAllUser can access'
  })
}

exports.createUser = (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'Create user can access'
  })
}

exports.deleteUser = (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'Delete user can access'
  })
}

exports.updateUser = (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'update user can access'
  })
}
