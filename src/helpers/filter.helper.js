const errorHandler = require('./errorHandler.helper')
// const castsModel = require('../models/casts.model')

const filter = (data, sortable, countData, res, callback) => {
  data.limit = parseInt(data.limit) || 5
  data.page = parseInt(data.page) || 1
  data.search = data.search || ''
  data.sortBy = (sortable.includes(data.sortBy) && data.sortBy) || 'insertDate'
  data.sort = data.sort || 'ASC'

  const params = {
    limit: data.limit,
    offset: (data.page - 1) * data.limit,
    search: data.search,
    sort: data.sort,
    sortBy: data.sortBy
  }
  const pageInfo = {
    page: data.page,
  }
  countData(params, (err, results) =>{
    if (err){
      return errorHandler(err, res)
    }
    else{
      pageInfo.totalData = parseInt(results.rows[0].totalData)
      pageInfo.totalPage = Math.ceil(pageInfo.totalData / data.limit)
      pageInfo.nextPage = data.page < pageInfo.totalPage ? data.page + 1 : null
      pageInfo.prevPage = data.page > 1 ? data.page - 1 : null
      callback(params, pageInfo)
    }
  })
}



module.exports = filter
