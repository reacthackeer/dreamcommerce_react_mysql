const asyncHandler = require('express-async-handler'); 
const { getAllSearchProduct, getAllMultipleOffers, getSingleSqlProduct, updateSingleSqlProduct, getMultipleSqlProduct} = require('../query/products__query');
const { getSqlProductLength } = require('../query/lengthQuery'); 
const { addSingleSqlProduct } = require('../query/products__query');
const { deleteGeneralSqlOperation, getSingleOfferQuery, getSingleOffersQuery } = require('../query/offer__query');

const handleGetAllSingleOfferProduct = asyncHandler(async(req, res, next)=>{
    const name = req.params.offer; 
    const count = `SELECT COUNT(*) FROM offers WHERE name='${name}'`;
    
    const page = Number(req.query?.page) || 1;
    let peerPage = Number(req.query?.peerPage) || 45;
        peerPage = peerPage > 70 ? 70 : peerPage
    
    try{
        const result = await getSqlProductLength(count); 
        if(result[0]['COUNT(*)'] > 0){   
            let total__products = Number(result[0]['COUNT(*)']);
            let total__page = Math.ceil(Number(result[0]['COUNT(*)']) / peerPage);
            const offset = (page - 1) * peerPage;
            const limit = peerPage; 
            const count1 = `SELECT p.product__id, p.brand, p.child, p.parent, p.parent__father, p.infos, p.visible__url, p.total__sell, p.ID FROM products p LEFT JOIN offers o ON o.product__id=p.ID WHERE o.name='${name}' LIMIT ${offset},${limit}`;
            
            try {
            let result = await getAllSearchProduct(count1);
                
            res.json({...result, total__page, total__products, current__limit: [offset, offset+limit]});
            } catch (error) { 
                const error1 = new Error(error.message);
                    error1.status = 500;
                    next(error1);
            } 
        }else{
            const newError = new Error('No product found!');
                newError.status = 500;
            next(newError);
        }
    } catch (error) {
        res.json(error)
    }
})

const handleGetAllMultipleOffersProductSinglePage = asyncHandler(async(req, res, next)=>{
    const page = Number(req?.query?.page) || 1;
    const peerPage = Number(req?.query?.limit) || 500 
    try {
        const result = await getSingleOffersQuery(page, peerPage);
        let newProductArray = [];
        let uniqueNameArray = [];
        result.forEach((info)=> {
            if(uniqueNameArray.indexOf(info.name) === -1){
                uniqueNameArray.push(info.name);
                newProductArray.push(info)
            }
        })
        res.json(newProductArray)
    } catch (error) { 
        const errorBody = new Error('An error occurred while fetching data');
        errorBody.status = 500;
        next(errorBody);
    }
});
const handleGetAllMultipleOffersProduct = asyncHandler(async(req, res, next)=>{

    const count = `SELECT COUNT(*) FROM offers WHERE active="true"`;
    
    const page = Number(req.query?.page) || 1;
    let peerPage = Number(req.query?.peerPage) || 45;
        peerPage = peerPage > 70 ? 70 : peerPage
    
    try{
        const result = await getSqlProductLength(count); 
        if(result[0]['COUNT(*)'] > 0){   
            let total__products = Number(result[0]['COUNT(*)']);
            let total__page = Math.ceil(Number(result[0]['COUNT(*)']) / peerPage);
            const offset = (page - 1) * peerPage;
            const limit = peerPage; 
            const count1 = `SELECT p.ID, o.name, p.product__id, p.brand, p.child, p.parent, p.parent__father, p.infos, p.visible__url, p.total__sell FROM products AS p RIGHT JOIN offers AS o ON o.product__id=p.ID WHERE o.active="true"`;
            
            try {
                let result = await getAllMultipleOffers(count1, peerPage);
                res.json({...result, total__page, current__page: page, total__products, current__limit: [offset, offset+limit]});
            } catch (error) { 
                const error1 = new Error(error.message);
                    error1.status = 500;
                    next(error1);
            }
        }else{
            const newError = new Error('No product ');
                newError.status = 204;
            next(newError);
        }
    } catch (error) {
        let newError = new Error(error.message);
            newError.status=500;
            next(error);
    }
})
// name, product__id, img__src, active
const handleAddSingleOffer = asyncHandler(async(req, res, next)=>{
    let {name, product__id, img__src, active} = req.body;
    if( name && product__id && img__src && active){
        let sql = `INSERT INTO offers(name, product__id, img__src, active) VALUES ("${name}","${product__id}","${img__src}","${active}")`;
        try {
            let result = await addSingleSqlProduct(sql);
            if(result.status__code === 201){
                res.json(result);
            }else{
                let newError = new Error('Invalid server request!');
                newError.status=204;
                next(newError);
            }
        } catch (error) {
            let newError = new Error(error.message);
            newError.status=500;
            next(error);
        }
    }else{
        let newError = new Error('Invalid server request!');
            newError.status=204;
            next(newError);
    }
})

const handleGetSingleOffer = asyncHandler(async(req, res, next)=>{
    let {ID} = req.params;
    if(ID){
        let sql = `SELECT * FROM offers WHERE ID="${ID}"`;
        try {
            let result = await getSingleSqlProduct(sql); 
            if(result.status__code === 200){
                res.json(result);
            }else{
                let newError = new Error('Invalid server request!');
                newError.status=204;
                next(newError);
            }
        } catch (error) {
            let newError = new Error(error.message);
            newError.status=500;
            next(error);
        }
    }else{
        let newError = new Error('Invalid server request!');
        newError.status=204;
        next(newError);
    }
})

const handleGetAllOffers = asyncHandler(async(req, res, next)=>{
    console.log('enter');
    let sql = `SELECT * FROM offers`;
    try {
        let result = await getMultipleSqlProduct(sql); 
        if(result.status__code === 200){
            res.json(result);
        }else{
            let newError = new Error('Invalid server request!');
            newError.status=204;
            next(newError);
        }
    } catch (error) {
        let newError = new Error(error.message);
        newError.status=500;
        next(error);
    }
})
const handleUpdateSingleOffer = asyncHandler(async(req, res, next)=>{
    let {ID} = req.params;
    let {name, product__id, img__src, active} = req.body;
    if(ID && name, product__id && img__src && active){
        let sql = `UPDATE offers SET name="${name}",product__id="${product__id}",img__src="${img__src}",active="${active}" WHERE ID="${ID}"`;
        try {
            let result = await updateSingleSqlProduct(sql); 
            if(result.status__code === 200){
                res.json(result);
            }else{
                let newError = new Error('Invalid server request!');
                newError.status=204;
                next(newError);
            }
        } catch (error) {
            let newError = new Error(error.message);
            newError.status=500;
            next(error);
        }
    }else{
        let newError = new Error('Invalid server request!');
        newError.status=204;
        next(newError);
    }
});

const deleteSingleOffer = asyncHandler(async(req, res, next)=>{
    const ID = req.params?.ID 
    if(ID){ 
        const query = `DELETE FROM offers WHERE ID="${ID}"`
        try {
            const result = await deleteGeneralSqlOperation(query);
            if(result?.status__code === 200){
                res.json(result);
            }else{
                const errorBody = new Error('deleted DATA NOT FOUND!');
                errorBody.status = 500;
                next(errorBody);
            }
        } catch (error) {  
            const errorBody = new Error('An error occurred while deleting data');
            errorBody.status = 500;
            next(errorBody);
        }
    }else{
        const error = new Error('Invalid server request?');
        error.status = 500;
        next(error);
    }
})

module.exports = { 
  handleGetAllMultipleOffersProduct,
  handleGetAllSingleOfferProduct,
  handleAddSingleOffer,
  handleGetSingleOffer,
  handleUpdateSingleOffer,
  deleteSingleOffer,
  handleGetAllOffers,
  handleGetAllMultipleOffersProductSinglePage
}