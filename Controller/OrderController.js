const asyncHandler = require('express-async-handler');
const { getAllJustProduct, deleteSingleSqlProduct } = require('../query/products__query');
const Order = require('../model/Order');
const { getSqlProductLength } = require('../query/lengthQuery');

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
    let peerPage = Number(req.query?.peerPage) || 8;
        peerPage = peerPage > 40 ? 40 : peerPage
    let count = `SELECT COUNT(*) FROM orders WHERE status="${status}"`;
        if(status === 'all'){
            count = `SELECT COUNT(*) FROM orders`
        }
    try{
        const result = await getSqlProductLength(count); 
        if(result[0]['COUNT(*)'] > 0){   
            let total__products = Number(result[0]['COUNT(*)']);
            let total__page = Math.ceil(Number(result[0]['COUNT(*)']) / peerPage);
            const offset = (page - 1) * peerPage;
            const limit = peerPage; 
            let count1 = `SELECT p.product__id, p.brand, p.child, p.parent, p.parent__father, p.infos, p.visible__url, p.total__sell, c.phone, c.quantity, c.price, c.pay__type, c.user__id, c.status, p.ID, c.ID as CID FROM products p LEFT JOIN orders c ON c.product__id=p.ID WHERE c.status='${status}' LIMIT ${offset},${limit}`; 
            if(status === 'all'){
                count1 = `SELECT p.product__id, p.brand, p.child, p.parent, p.parent__father, p.infos, p.visible__url, p.total__sell, c.phone, c.quantity, c.price, c.pay__type, c.user__id, c.status, p.ID, c.ID as CID FROM products p LEFT JOIN orders c ON c.product__id=p.ID WHERE c.status != "${status}" LIMIT ${offset},${limit}`; 
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
        let newError = new Error(error.message);
            newError.status=500;
            next(error);
    } 
});

const handleGetAllUserOrderProduct = asyncHandler(async(req, res, next)=>{
    let {user__id} = req.params;
    if(user__id){ 
        const count1 = `SELECT p.product__id, p.brand, p.child, p.parent, p.parent__father, p.infos, p.visible__url, p.total__sell, c.quantity, c.price, c.pay__type, c.status, p.ID, c.ID as CID FROM products p LEFT JOIN orders c ON c.product__id=p.ID WHERE c.user__id='${user__id}'`;
                
        try {
            let result = await getAllJustProduct(count1);
                if(result.status__code === 200){  
                    res.json(result.products);
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

module.exports = {
    handleUpdateProductOrderStatus, 
    handleApplyForCashOnDelivery,
    handleGetAllUserOrderProduct,
    handleIncrementOrderProduct,
    handleDecrementOrderProduct,
    handleGetAllAdminOrderProduct
}