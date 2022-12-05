const premieresLocationsModel = require('../models/premieresLocations.model')
const errorHandler = require('../helpers/errorHandler.helper')

exports.allPremieresLocations = (req, res) =>{
  premieresLocationsModel.allPremieresLocations((err, data)=>{
    if (err){
      return errorHandler(err, res)
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'you get all Premieres Locations',
        results: data.rows
      })
    }
  })
}

exports.singlePremieresLocations = (req, res) =>{
  premieresLocationsModel.singlePremieresLocations(req.params,(err, data) =>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'you get single Premieres Locations',
        results: data.rows[0]
      })
    }
  })

}

exports.createPremieresLocations = (req, res) =>{
  console.log(req.body)
  premieresLocationsModel.createPremieresLocations(req.body, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'create Premieres Locations is done',
        results: data.rows[0]
      })
    }
  })
}

exports.updatePremieresLocations = (req, res) =>{
  premieresLocationsModel.updatePremieresLocations(req, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'update Premieres Locations is done',
        results: data.rows[0]
      })
    }
  })
}

exports.deletePremieresLocations = (req, res) =>{
  premieresLocationsModel.deletePremieresLocations(req.params, (err, data)=>{
    if(err){
      return errorHandler(err,res);
    }
    else{
      return res.status(200).json({
        succes: true,
        message: 'delete Premieres Locations is done',
        results: data.rows[0]
      })
    }
  })

}
