const { mainDb } = require("../config/connectDb"); 

const getSqlProductLength = (sql) => {
    return new Promise((resolve, reject)=>{ 
        mainDb.query(sql, (error, result)=>{ 
            if(!error){
                resolve(result);
            }else{ 
                reject(error)
            }
        })
    })
}

module.exports = {
    getSqlProductLength
}