const {Pool} = require('pg')

const db = new Pool({
  connectionString: "postgresql://postgres:1@localhost:5432/pengen_nonton?schema=public"
})


db.connect((err) =>{
  if(err){
    console.log('db cant connect')
  }
  else{
    console.log('db can connect')
  }
})


module.exports = db
