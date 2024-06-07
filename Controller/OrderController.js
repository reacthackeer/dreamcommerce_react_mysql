const asyncHandler = require('express-async-handler');
const { getAllJustProduct, deleteSingleSqlProduct, getSingleSqlProduct } = require('../query/products__query');
const Order = require('../model/Order');
const { getSqlProductLength } = require('../query/lengthQuery');
const controllerUtils = require('../utils/filterUtils');
const { handlePdfGeneratorMasterOrder, options } = require('../pdf/wishlist');
const { printUserAndProductInfoHtmlString } = require('../printLibrary/pdf');
const fs = require('fs')

const handleApplyForCashOnDelivery = asyncHandler(async(req, res, next)=>{
    let {user__id, order__id, phone} = req.body; 
    if(user__id){ 
        const count1 = `SELECT p.product__id, p.brand, p.child, p.parent, p.parent__father, p.infos, p.visible__url, p.total__sell, c.quantity, p.ID, c.ID as CID FROM products p LEFT JOIN cart c ON c.product__id=p.ID WHERE c.user__id='${user__id}'`;
                
        try {
            let result = await getAllJustProduct(count1);
                if(result.status__code === 200){  
                    let allProductInfosArray = [];
                    result.products.forEach((info, index)=>{ 
                        let newInfo = {...info};
                        let orderProductInfo = {}
                            orderProductInfo.product__id = newInfo.ID;
                            orderProductInfo.quantity =  newInfo.quantity;
                            orderProductInfo.price = newInfo.infos.current__price;
                            orderProductInfo.status = 'pending';
                            orderProductInfo.payment = 'Cash on'
                            orderProductInfo.order__id = order__id;
                            orderProductInfo.pay__type = 'Cash on',
                            orderProductInfo.phone = phone,
                            orderProductInfo.user__id = user__id;
                            orderProductInfo.id_order__id = `${newInfo.ID}_${order__id}`;
                            allProductInfosArray.push(orderProductInfo);
                    })  
                    try {
                        let sql = `DELETE FROM cart WHERE user__id="${user__id}"`;
                        let deleteResult = await deleteSingleSqlProduct(sql);
                        if(deleteResult && deleteResult.status__code === 200){
                            try {
                                let result = await Order.bulkCreate(allProductInfosArray);
                                if(result && result.length){ 
                                    res.json(result)
                                }else{
                                    next(new Error('Internal server Error!'))
                                }
                            } catch (error) { 
                                next(new Error(error.message))
                            }
                        }else{
                            next(new Error('Internal server error!'))
                        }
                    } catch (error) {
                        next(new Error(error.message))
                    }
                }else{
                    res.json({status__code: 201})
                }
        } catch (error) { 
            const error1 = new Error(error.message);
                error1.status = 500;
                next(error1);
        } 
    }else{
        next(new Error('Internal server error!'))
    }
});

const handleGetAllAdminOrderProduct = asyncHandler(async(req, res, next)=>{ 
    
    const page = Number(req.query?.page) || 1;
    let status = req.query?.filter || 'all';
    let phoneNumber = req.query.phoneNumber || '' 
    let peerPage = Number(req.query?.peerPage) || 8;
        peerPage = peerPage > 40 ? 40 : peerPage
    let count = '';
    
        if(status === 'all'){
            count = `SELECT COUNT(*) FROM orders`
        } else if (status !== 'all'){
            if(status === 'phone'){
                if(phoneNumber.length === 11){
                    count = `SELECT COUNT(*) FROM orders WHERE status!="${status}" AND phone="${phoneNumber}"`;
                }else{
                    count = `SELECT COUNT(*) FROM orders`
                }
            }else{
                count = `SELECT COUNT(*) FROM orders WHERE status="${status}"`;
            }
        }   
    try{
        const result = await getSqlProductLength(count); 
        if(result[0]['COUNT(*)'] > 0){   
            console.log(count);
            let total__products = Number(result[0]['COUNT(*)']);
            let total__page = Math.ceil(Number(result[0]['COUNT(*)']) / peerPage);
            const offset = (page - 1) * peerPage;
            const limit = peerPage; 
            let count1 = '';
            if(status === 'all'){
                count1 = `SELECT p.product__id, p.brand, p.child, p.parent, p.parent__father, p.infos, p.visible__url, p.total__sell, c.phone, c.quantity, c.price, c.pay__type, c.user__id, c.status, p.ID, c.ID as CID FROM products p LEFT JOIN orders c ON c.product__id=p.ID WHERE c.status != "${status}" LIMIT ${offset},${limit}`;
            } else if (status !== 'all'){
                if(status === 'phone'){
                    if(phoneNumber.length === 11){
                        count1 = `SELECT p.product__id, p.brand, p.child, p.parent, p.parent__father, p.infos, p.visible__url, p.total__sell, c.phone, c.quantity, c.price, c.pay__type, c.user__id, c.status, p.ID, c.ID as CID FROM products p LEFT JOIN orders c ON c.product__id=p.ID WHERE c.status!='${status}' AND phone="${phoneNumber}" LIMIT ${offset},${limit}`;
                    }else{
                        count1 = `SELECT p.product__id, p.brand, p.child, p.parent, p.parent__father, p.infos, p.visible__url, p.total__sell, c.phone, c.quantity, c.price, c.pay__type, c.user__id, c.status, p.ID, c.ID as CID FROM products p LEFT JOIN orders c ON c.product__id=p.ID WHERE c.status != "${status}" LIMIT ${offset},${limit}`;
                    }
                }else{
                    count1 = `SELECT p.product__id, p.brand, p.child, p.parent, p.parent__father, p.infos, p.visible__url, p.total__sell, c.phone, c.quantity, c.price, c.pay__type, c.user__id, c.status, p.ID, c.ID as CID FROM products p LEFT JOIN orders c ON c.product__id=p.ID WHERE c.status='${status}' LIMIT ${offset},${limit}`;
                }
            }  
            try {
                let result = await getAllJustProduct(count1);
                    if(result.status__code === 200){   
                        res.json({products: result.products, total__page, current__page: page, total__products, current__limit: [offset, offset+limit]});
                    }else{
                        res.json({status__code: 201, products: []})
                    }
            } catch (error) { 
                const error1 = new Error(error.message);
                    error1.status = 500;
                    next(error1);
            }  
        }else{
            const newError = new Error('No product');
                newError.status = 204;
            next(newError);
        }
    } catch (error) {
        console.log(error.message);
        let newError = new Error(error.message);
            newError.status=500;
            next(error);
    } 
});

const handleGetAllUserOrderProduct = asyncHandler(async(req, res, next)=>{
    const page = Number(req.query?.page) || 1;
    let {user__id} = req.params;
    let peerPage = Number(req.query?.peerPage) || 8;
        peerPage = peerPage > 40 ? 40 : peerPage
    let count = `SELECT COUNT(*) FROM orders WHERE user__id="${user__id}"`;
    if(user__id && page && peerPage){
        try{
            const result = await getSqlProductLength(count); 
            if(result[0]['COUNT(*)'] > 0){   
                let total__products = Number(result[0]['COUNT(*)']);
                let total__page = Math.ceil(Number(result[0]['COUNT(*)']) / peerPage);
                const offset = (page - 1) * peerPage;
                const limit = peerPage; 
                let count1 = `SELECT p.product__id, p.brand, p.child, p.parent, p.parent__father, p.infos, p.visible__url, p.total__sell, c.phone, c.quantity, c.price, c.pay__type, c.user__id, c.status, p.ID, c.ID as CID FROM products p LEFT JOIN orders c ON c.product__id=p.ID WHERE c.user__id='${user__id}' LIMIT ${offset},${limit}`; 
                try {
                    let result = await getAllJustProduct(count1);
                        if(result.status__code === 200){  
                            res.json({products: result.products, total__page, current__page: page, total__products, current__limit: [offset, offset+limit]});
                        }else{
                            res.json({status__code: 201, products: []})
                        }
                } catch (error) { 
                    const error1 = new Error(error.message);
                        error1.status = 500;
                        next(error1);
                }  
            }else{
                const newError = new Error('No product');
                    newError.status = 204;
                next(newError);
            }
        } catch (error) {
            let newError = new Error(error.message);
                newError.status=500;
                next(error);
        } 
    }else{
        next(new Error('Invalid server request!'))
    }
});

const handleIncrementOrderProduct = asyncHandler(async(req, res, next)=>{
    let {id} = req.params;
    if(id){
        let result = await Order.increment({quantity: 1},{where: {id, status: 'pending'}});
        if(result && result[0] && result[0][1]){
            res.json(result)
        }else{
            next(new Error('Internal server error!'))
        }
    }else{
        next(new Error('Internal server error!'))
    }
});

const handleUpdateProductOrderStatus = asyncHandler(async(req, res, next)=>{ 
    let {id, status} = req.params;  
    if(id){
        let updateResult = await Order.update({status},{where:{id}}); 
        if(updateResult && updateResult[0]){
            res.json(updateResult)
        }else{
            next(new Error('Internal server error!'))
        }
    }else{
        next(new Error('Internal server error!'))
    }
});

const handleDecrementOrderProduct = asyncHandler(async(req, res, next)=>{
    let {id} = req.params;
    if(id){
        let result = await Order.increment({quantity: -1},{where: {id}, status: 'pending'});
        if(result && result[0] && result[0][1]){
            res.json(result)
        }else{
            next(new Error('Internal server error!'))
        }
    }else{
        next(new Error('Internal server error!'))
    }
});

const handleGetAllSingleUserCartProductAdPdfFormat = asyncHandler(async(req, res, next)=>{
    let {user__id, status} = req.params;
    if(user__id && status){
        let productQuerySql = `SELECT p.product__id, p.infos, c.phone, c.quantity, c.price, c.pay__type, c.user__id, c.status, p.ID, c.ID as CID FROM products p LEFT JOIN orders c ON c.product__id=p.ID WHERE c.status != "all" AND user__id="${user__id}"`;
        if(status === 'pending'){
            productQuerySql = `SELECT p.product__id, p.brand, p.child, p.parent, p.parent__father, p.infos, p.visible__url, p.total__sell, c.phone, c.quantity, c.price, c.pay__type, c.user__id, c.status, p.ID, c.ID as CID FROM products p LEFT JOIN orders c ON c.product__id=p.ID WHERE c.status != "completed" AND user__id="${user__id}"`;
        }else if(status === 'completed'){
            productQuerySql = `SELECT p.product__id, p.brand, p.child, p.parent, p.parent__father, p.infos, p.visible__url, p.total__sell, c.phone, c.quantity, c.price, c.pay__type, c.user__id, c.status, p.ID, c.ID as CID FROM products p LEFT JOIN orders c ON c.product__id=p.ID WHERE c.status = "completed" AND user__id="${user__id}"`;
        }
        try {
            let result = await getAllJustProduct(productQuerySql);
                if(result.status__code === 200){  
                    let sql = `SELECT * FROM users WHERE user__id="${user__id}"`;
                    try {
                        let {item} = await getSingleSqlProduct(sql);  
                        try {
                            let userInfo = item;  
                                if(userInfo.address){
                                    userInfo.address = controllerUtils.bufferDataConverter(userInfo.address);
                                }  
                                delete userInfo?.password 

                                let printDate = new Date().getTime();
                                let pdfGenerateResult = await handlePdfGeneratorMasterOrder(printUserAndProductInfoHtmlString, {products: result.products, user__id: user__id, date: printDate, userInfo}, options)
                                if(pdfGenerateResult.status__code === 200){
                                    res.download(`./${pdfGenerateResult.path}`,(err)=>{
                                        if(!err){
                                            if(pdfGenerateResult.status__code === 200){ 
                                                fs.unlink(pdfGenerateResult.path, (err)=>{
                                                    if(!err){
                                                        // do something here
                                                    }else{ 
                                                        // do something here
                                                    }
                                                })
                                            }
                                        }
                                    })
                                }else{
                                    const error1 = new Error(`There was a server side error!`);
                                    error1.status = 500;
                                    next(error1);
                                }

                        } catch (error) {
                            next(new Error(error.message));
                        }
                    } catch (error) {
                        next(new Error(error.message));
                    } 
                }else{
                    next(new Error('No product founded!'))
                }
        } catch (error) { 
            const error1 = new Error(error.message);
                error1.status = 500;
                next(error1);
        }  
    }else{
        next(new Error('Internal server error!'))
    }
})

module.exports = {
    handleUpdateProductOrderStatus, 
    handleApplyForCashOnDelivery,
    handleGetAllUserOrderProduct,
    handleIncrementOrderProduct,
    handleDecrementOrderProduct,
    handleGetAllAdminOrderProduct,
    handleGetAllSingleUserCartProductAdPdfFormat
}