const locationsModel = require('../models/locations.model')
const errorHandler = require('../helpers/errorHandler.helper')
const filter = require('../helpers/filter.helper')

exports.allLocations = (req, res) =>{
  const sortable = ['locationName', 'insertDate', 'updateDate']
  filter(req.query, sortable, locationsModel.countLocations, res, (filter, pageInfo)=>{
    locationsModel.allLocations(filter, (err, data)=>{
      if (err){
        return errorHandler(err, res)
      }
      else{
        return res.status(200).json({
          succes: true,
          message: 'you get all Locations',
          pageInfo,
          results: data.rows
        })
      }
    })
  })
}

exports.singleLocation = (req, res) =>{
  locationsModel.singleLocation(req.params,(err, data) =>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'you get single Locations',
        results: data.rows[0]
      })
    }
  })

}

exports.createLocation = (req, res) =>{
  locationsModel.createLocation(req.body, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'create Locations is done',
        results: data.rows[0]
      })
    }
  })
}

exports.updateLocation = (req, res) =>{
  locationsModel.updateLocation(req, (err, data)=>{
    console.log(req.body)
    console.log("req.body")
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'update Locations is done',
        results: data.rows[0]
      })
    }
  })
}

exports.deleteLocation = (req, res) =>{
  locationsModel.deleteLocation(req.params, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'delete Locations is done',
        results: data.rows[0]
      })
    }
  })

}
