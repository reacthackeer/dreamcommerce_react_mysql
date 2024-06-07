const { mainDb } = require("../config/connectDb");
const { dataConverterUtils } = require("../utils/dataConverterUtils");
const controllerUtils = require("../utils/filterUtils");

const getAllMultipleOffers = (sql, limit) => {
    
    return new Promise((resolve, reject)=>{ 
        mainDb.query(sql, (error, result)=>{  
            if(!error){
                if(result.length){ 
                    let allProduct = [];

                    result.forEach((info)=>{ 
                        let newInfo = {...info};
                        newInfo.infos = dataConverterUtils.bufferDataConverter(info.infos);
                        allProduct.push(newInfo);
                    }) 
                    
                    let randomizeProduct = allProduct.sort(()=> Math.random() - 0.5);
                        randomizeProduct = randomizeProduct.sort(()=> Math.random() - 0.5);
                        randomizeProduct = randomizeProduct.sort(()=> Math.random() - 0.5);
                        randomizeProduct = randomizeProduct.sort(()=> Math.random() - 0.5);

                        let allOffersCollection = [];
                        let array__product__collection = [];

                        randomizeProduct.forEach((info)=>{
                            if(allOffersCollection.indexOf(info.name) === -1){ 
                                allOffersCollection.push(info.name);
                                array__product__collection.push([info]); 
                            }else{
                                let indexO = allOffersCollection.indexOf(info.name);
                                array__product__collection[indexO].push(info);
                            }
                        })
                        let finalCollection = [];
                        array__product__collection.forEach((info, index)=>{
                            if(info.length > limit){
                                finalCollection.push({products: info.slice(0, limit), length: limit, name: allOffersCollection[index]})
                            }else{
                                finalCollection.push({products: info, length: info.length, name: allOffersCollection[index]});
                            }
                        })
                        let shortedProduct = finalCollection?.sort((a,b)=> a?.infos?.current__price - b?.infos?.current__price);
                        let lowPrice = shortedProduct[0]?.infos?.current__price;
                        let highPrice = shortedProduct[shortedProduct.length - 1]?.infos?.current__price
                    resolve({products: finalCollection, lowPrice, highPrice, status__code: 200});
                }else{
                    resolve({products: [],  status__code: 204})
                }
            }else{
                reject(error)
            }
        })
    })
}

const getAllJustProduct = (sql) => {
    
    return new Promise((resolve, reject)=>{ 
        mainDb.query(sql, (error, result)=>{  
            if(!error){
                if(result.length){ 
                    let allProduct = [];
                    result.forEach((info)=>{ 
                        let newInfo = {...info}; 
                        newInfo.infos = dataConverterUtils.bufferDataConverter(info.infos);
                        allProduct.push(newInfo);
                    })  

                    resolve({ products: allProduct, status__code: 200, current__product__length: allProduct.length});
                }else{
                    resolve({products: [], status__code: 204})
                }
            }else{
                reject(error)
            }
        })
    })
}


const getSingleSqlProduct = (sql) => {
    
    return new Promise((resolve, reject)=>{ 
        mainDb.query(sql, (error, result)=>{  
            if(!error){
                if(result.length === 1){ 
                    resolve({item: result[0], status__code: 200});
                }else{
                    resolve({item: {}, status__code: 204});
                }
            }else{
                reject(error)
            }
        })
    })
}
const getSingleOrMultipleSqlProduct = (sql) => {
    
    return new Promise((resolve, reject)=>{ 
        mainDb.query(sql, (error, result)=>{  
            if(!error){
                if(result.length){ 
                    resolve({item: result, status__code: 200});
                }else{
                    resolve({item: {}, status__code: 204});
                }
            }else{
                reject(error)
            }
        })
    })
}

const getMultipleSqlProduct = (sql) => {
    
    return new Promise((resolve, reject)=>{ 
        mainDb.query(sql, (error, result)=>{  
            if(!error){
                if(result.length){ 
                    resolve({items: result, status__code: 200});
                }else{
                    resolve({item: {}, status__code: 204});
                }
            }else{
                reject(error)
            }
        })
    })
}

const addSingleSqlProduct = (sql) => {
    
    return new Promise((resolve, reject)=>{ 
        mainDb.query(sql, (error, result)=>{  
            if(!error){
                if(result?.affectedRows === 1){
                    resolve({message: 'Successfully data inserted!', status__code: 201, result})
                }else{
                    reject("There was a server side error");
                } 
            }else{
                reject(error)
            }
        })
    })
}

const updateSingleSqlProduct = (sql) => {
    
    return new Promise((resolve, reject)=>{ 
        mainDb.query(sql, (error, result)=>{  
            if(!error){
                if(result?.affectedRows === 1){
                    resolve({message: 'Successfully data Updated!', status__code: 200})
                }else{
                    reject("There was a server side error");
                } 
            }else{
                reject(error)
            }
        })
    })
}

const deleteSingleSqlProduct = (sql) => {
    
    return new Promise((resolve, reject)=>{ 
        mainDb.query(sql, (error, result)=>{  
            if(!error){ 
                if(result?.affectedRows){
                    resolve({message: 'Successfully data Deleted!', status__code: 200})
                }else{
                    reject("There was a server side error");
                } 
            }else{ 
                reject(error)
            }
        })
    })
}


const getProductForFilter = (sql) => {
    
    return new Promise((resolve, reject)=>{ 
        mainDb.query(sql, (error, result)=>{  
            if(!error){
                if(result.length){ 
                    let allProduct = [];
                    result.forEach((info)=>{ 
                        let newInfo = {...info}; 
                        newInfo.infos = dataConverterUtils.bufferDataConverter(info.infos);
                        allProduct.push(newInfo);
                    })  

                    resolve(allProduct);;
                }else{
                    resolve([])
                }
            }else{
                reject(error)
            }
        })
    })
}

const getFilterForFilter = (sql) => {
    
    return new Promise((resolve, reject)=>{ 
        mainDb.query(sql, (error, result)=>{  
            if(!error){
                if(result.length){ 
                    let allProduct = [];
                    result.forEach((info)=>{ 
                        let newInfo = {...info}; 
                        newInfo.data = dataConverterUtils.bufferDataConverter(info.data);
                        allProduct.push(newInfo);
                    })  

                    resolve(allProduct);;
                }else{
                    resolve([])
                }
            }else{
                reject(error)
            }
        })
    })
}


const getAllSearchProduct = (sql) => {
    
    return new Promise((resolve, reject)=>{ 
        mainDb.query(sql, (error, result)=>{  
            if(!error){
                if(result.length){ 
                    let allProduct = [];
                    result.forEach((info)=>{ 
                        let newInfo = {...info};
                        newInfo.infos = dataConverterUtils.bufferDataConverter(info.infos);
                        newInfo.infos.whole__price = newInfo.infos.current__price / 100 * 80
                        allProduct.push(newInfo);
                    })
                    const {product, filterNavbar} = controllerUtils.brandFilter(allProduct);
                    let shortedProduct = product?.sort((a,b)=> a?.infos?.current__price - b?.infos?.current__price);
                    let lowPrice = shortedProduct[0]?.infos?.current__price;
                    let highPrice = shortedProduct[shortedProduct.length - 1]?.infos?.current__price
                    resolve({filterNavbar: filterNavbar, products: product, lowPrice, highPrice, status__code: 200, current__product__length: allProduct.length});
                }else{
                    resolve({products: [], filterNavbar: [], status__code: 204})
                }
            }else{
                reject(error)
            }
        })
    })
}


const getSingleSqlProductById = (sql) => {
    
    return new Promise((resolve, reject)=>{ 
        mainDb.query(sql, (error, result)=>{  
            if(!error){
                if(result.length === 1){ 
                    let allProduct = [];
                    result.forEach((info)=>{ 
                        let newInfo = {...info};
                        newInfo.infos = dataConverterUtils.bufferDataConverter(info.infos);
                        allProduct.push(newInfo);
                    }) 
                    resolve({product: allProduct[0], status__code: 200})
                }else{
                    resolve({product: {}, status__code: 204})
                }
            }else{
                reject(error)
            }
        })
    })
}


const getAllFilterProduct = (sql) => {
    
    return new Promise((resolve, reject)=>{ 
        mainDb.query(sql, (error, result)=>{  
            
            if(!error){
                if(result.length){ 
                    let allProduct = [];
                    result.forEach((info)=>{ 
                        let newInfo = {...info};
                        newInfo.infos = dataConverterUtils.bufferDataConverter(info.infos);
                        allProduct.push(newInfo);
                    })
                    const {product, filter__navbar} = controllerUtils.brandFilter(allProduct);
                    let shortedProduct = product?.sort((a,b)=> a?.infos?.current__price - b?.infos?.current__price);

                    resolve({filterNavbar: filter__navbar, products: shortedProduct, status__code: 200, current__product__length: allProduct.length});
                }else{
                    resolve({products: [], filter__navbar: [], status__code: 204})
                }
            }else{
                reject(error)
            }
        })
    })
}

const getSingleSqlProductWithDataConverter = (sql) => {
    return new Promise((resolve, reject)=>{
        mainDb.query(sql, (err, result)=>{
            if(!err){ 
                if(result.length === 1){
                    let item = result[0];
                    let newItem = {...item};
                        newItem.data = dataConverterUtils.bufferDataConverter(newItem.data);
                        resolve({item: newItem, status__code: 200});
                }else{
                    resolve({message: `Invalid server request!`, status__code: 204});
                }
            }else{
                reject(err.message)
            }
        })
    })
}


const getSingleSqlProductWithDataConverterSecond = (sql) => {
    return new Promise((resolve, reject)=>{
        mainDb.query(sql, (err, result)=>{
            if(!err){ 
                if(result.length){
                    let allItems = [];
                    result.forEach((info)=>{
                        let newInfo = {...info};
                            newInfo.data =dataConverterUtils.bufferDataConverter(newInfo.data);
                            delete newInfo.ID;
                            
                            allItems.push(newInfo);
                    }) 
                        resolve({items: allItems, status__code: 200});
                }else{
                    resolve({message: `Invalid server request!`, status__code: 204});
                }
            }else{
                reject(err.message)
            }
        })
    })
}

const getAllJustSqlProduct = (sql) => {
    
    return new Promise((resolve, reject)=>{
        mainDb.query(sql, (error, result)=>{
            if(!error){
                if(result.length > 0){
                    resolve({items: result, status__code: 200});
                }else{
                    reject({message: 'No product found!', status__code: 204});
                }
            }else{
                reject({message: error.message, status__code: 500})
            }
        })
    })
}

const getAllJustSqlProduct2 = (sql) => {
    
    return new Promise((resolve, reject)=>{
        mainDb.query(sql, (error, result)=>{
            if(!error){
                if(result.length > 0){
                    resolve({items: result, status__code: 200});
                }else{
                    reject({message: 'No product found!', status__code: 204});
                }
            }else{
                reject({message: error.message, status__code: 500})
            }
        })
    })
}

const getAllJustSqlProduct3 = (sql) => {
    
    return new Promise((resolve, reject)=>{
        mainDb.query(sql, (error, result)=>{
            if(!error){
                if(result.length > 0){
                    resolve({items: result, status__code: 200});
                }else{
                    reject({message: 'No product found!', status__code: 204});
                }
            }else{
                reject({message: error.message, status__code: 500})
            }
        })
    })
}

const getAllJustSqlProduct4 = (sql) => {
    
    return new Promise((resolve, reject)=>{
        mainDb.query(sql, (error, result)=>{
            if(!error){
                if(result.length > 0){
                    resolve({items: result, status__code: 200});
                }else{
                    reject({message: 'No product found!', status__code: 204});
                }
            }else{
                reject({message: error.message, status__code: 500})
            }
        })
    })
}

const getSingleJustSqlProduct = (sql) => {
    
    return new Promise((resolve, reject)=>{
        mainDb.query(sql, (error, result)=>{
            if(!error){
                if(result.length === 1){
                    resolve({items: result, status__code: 200});
                }else{
                    reject({message: 'No product found!', status__code: 204});
                }
            }else{
                reject({message: error.message, status__code: 500})
            }
        })
    })
}

module.exports = {
    getSingleOrMultipleSqlProduct,
    getSingleJustSqlProduct,
    getAllSearchProduct,
    getAllMultipleOffers,
    getAllJustProduct,
    getAllFilterProduct,
    getProductForFilter,
    getFilterForFilter,
    getSingleSqlProduct,
    addSingleSqlProduct,
    updateSingleSqlProduct,
    deleteSingleSqlProduct, 
    getSingleSqlProductWithDataConverter,
    getAllJustSqlProduct,
    getAllJustSqlProduct2,
    getAllJustSqlProduct3,
    getAllJustSqlProduct4,
    getSingleSqlProductById,
    getMultipleSqlProduct,
    getSingleSqlProductWithDataConverterSecond
}
