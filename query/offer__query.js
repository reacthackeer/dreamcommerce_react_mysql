
const {mainDb} =  require('../config/connectDb');
const {getAllBrandsSql, get__single__product__sql} = require('../sql/sql')

const getSingleOfferQuery = (page, pageSize) => {
    const offset = (page-1) * pageSize;
    const limit = pageSize;
    return new Promise((resolve, reject)=>{
        const query = getAllBrandsSql;
        mainDb.query(query, [offset, limit], (error, result)=>{
            if(!error){
                resolve(result);
            }else{
                reject(error)
            }
        })
    })
}

const generalSqlOperation = (query) => {
    return new Promise((resolve, reject)=>{ 
        mainDb.query(query, (error, result)=>{
            if(!error){ 
                if(result.affectedRows === 1){
                    resolve({message: 'Successfully data inserted!', status__code: 200})
                }else{
                    reject({message: 'There was a server side error!', status__code: 500})
                }
            }else{
                reject(error)
            }
        })
    })
}

const generalSqlOperationRow = (query) => {
    return new Promise((resolve, reject)=>{ 
        mainDb.query(query, (error, result)=>{
            if(!error){ 

                resolve(result)
            }else{
                reject(error)
            }
        })
    })
}


const updateGeneralSqlOperation = (query) => {
    return new Promise((resolve, reject)=>{ 
        mainDb.query(query, (error, result)=>{
            if(!error){ 
                if(result.affectedRows > 0){
                    resolve({message: 'Successfully data updated!', status__code: 200})
                }else{
                    reject({message: 'There was a server side error!', status__code: 500})
                }
            }else{
                reject(error)
            }
        })
    })
}

const deleteGeneralSqlOperation = (query) => {
    return new Promise((resolve, reject)=>{ 
        mainDb.query(query, (error, result)=>{
            if(!error){ 
                if(result.affectedRows === 1){
                    resolve({message: 'Successfully data deleted!', status__code: 200})
                }else{
                    reject({message: 'There was a server side error!', status__code: 500})
                }
            }else{
                reject(error)
            }
        })
    })
}

module.exports = {
    getSingleOfferQuery,
    generalSqlOperation,
    updateGeneralSqlOperation,
    deleteGeneralSqlOperation,
    generalSqlOperationRow
}

