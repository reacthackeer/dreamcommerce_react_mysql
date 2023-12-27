require('dotenv').config();
let databasePassword = process.env.ENV__PASS;
let database = process.env.ENV__DB;
let username = process.env.ENV__USER;
let host = process.env.ENV__HOST;
// 11Tinku__in__the__room22, bonusmtfe_danguli, dangulitnrsoft_dear
  
const mysql = require('mysql');

const mainDb = () => {
  var con = mysql.createConnection({
      host:  host,
      user: username,
      password: databasePassword,
      database: database
    });

    con.connect((err)=>{
      if(err){
        
      }else{
          console.log(`Successfully database connected`);
      }
    })

    return con;
};




module.exports = {mainDb: mainDb()};