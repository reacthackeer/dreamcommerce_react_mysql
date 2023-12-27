const asyncHandler = require('express-async-handler');
const { getAllJustProduct, deleteSingleSqlProduct } = require('../query/products__query');
const Order = require('../model/Order');

const handleApplyForCashOnDelivery = asyncHandler(async(req, res, next)=>{
    let {user__id, order__id} = req.body;
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

const handleGetAllUserOrderProduct = asyncHandler(async(req, res, next)=>{
    let {user__id} = req.params;
    if(user__id){ 
        const count1 = `SELECT p.product__id, p.brand, p.child, p.parent, p.parent__father, p.infos, p.visible__url, p.total__sell, c.quantity, c.price, c.status, p.ID, c.ID as CID FROM products p LEFT JOIN orders c ON c.product__id=p.ID WHERE c.user__id='${user__id}'`;
                
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
    handleApplyForCashOnDelivery,
    handleGetAllUserOrderProduct,
    handleIncrementOrderProduct,
    handleDecrementOrderProduct
}