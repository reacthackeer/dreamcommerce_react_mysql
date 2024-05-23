const asyncHandler = require('express-async-handler');
const { getSingleSqlProduct, getAllJustProduct, deleteSingleSqlProduct } = require('../query/products__query');
const SSLCommerzPayment = require('sslcommerz-lts')
const controllerUtils = require('../utils/filterUtils'); 
const { uid } = require('uid');
const Order = require('../model/Order');
const System = require('../model/System');
const SslCommerzPayment = require('sslcommerz-lts/api/payment-controller');
const PaymentStatus = require('../model/PaymentStatus');

const store_id = process.env.SSL__STORE__ID__SUB;
const store_passwd = process.env.SSL__STORE__ID__SUB__KEY;
const is_live = false;

const handleSuccessPayment = asyncHandler(async(req, res, next)=>{
    let {val_id} = req.body; 
    let {orderId, userId} = req.params;  
    if(val_id){
        const sslC = new SSLCommerzPayment(store_id, store_passwd, is_live);
        try {
            const result = await sslC.validate({val_id});
            let {emi_issuer, card_issuer, card_type} = result;
            if(result && result?.amount && result?.status === 'VALID'){ 
                let totalPaymentAmount = Number(result.amount);
                const count1 = `SELECT p.product__id, p.brand, p.child, p.parent, p.parent__father, p.infos, p.visible__url, p.total__sell, c.quantity, c.price, p.ID, c.ID as CID FROM products p LEFT JOIN orders c ON c.product__id=p.ID WHERE c.order__id='${orderId}' AND c.user__id='${userId}'`;
                
                try {
                    let result = await getAllJustProduct(count1); 
                        if(result.status__code === 200){   
                            try {
                                let getSystemInformation = await System.findOne({where: {id: 1}});
                                if(getSystemInformation && getSystemInformation?.dataValues?.id){
                                    try {
                                        let totalResultInfo = await handleCalculatePrice(result.products, getSystemInformation.dataValues);
                                        let allTotalPrice = totalResultInfo.allTotal;

                                        try {
                                            let allPaymentProductsIdes = [];
                                            result.products.forEach((info)=>{
                                                allPaymentProductsIdes.push({product__id: info.ID, quantity: info.quantity})
                                            })
                                            let totalPaymentResultInfo = await handleCalculatePaymentProductPrice(result.products, getSystemInformation.dataValues);
                                            let allTotalPaymentPrice = totalPaymentResultInfo.allTotal; 
                                            if(totalPaymentAmount === allTotalPaymentPrice && totalPaymentAmount === allTotalPrice){
                                                try {
                                                    let updateOrderProductResult = await Order.update({reason: `Payment success`, status: 'accept', payment: 'completed'},{where: {user__id: userId, order__id: orderId}});
                                                    if(updateOrderProductResult && updateOrderProductResult[0]){
                                                        let paymentHistoryInfo = {user__id: userId, order__id: orderId, amount: totalPaymentAmount, wallet: card_issuer, quantity: totalResultInfo.totalQuantity, products__ides: allPaymentProductsIdes, status: 'success'};
                                                        try {
                                                            let paymentHistoryResult = await PaymentStatus.create(paymentHistoryInfo);
                                                            if(paymentHistoryResult && paymentHistoryInfo?.amount){
                                                                res.redirect(process.env.ORIGIN+'/profile')
                                                            }else{
                                                                next('Internal server error!');
                                                            }
                                                        } catch (error) {
                                                            next(new Error(error.message))
                                                        }
                                                    }else{
                                                        next(new Error('Invalid order status'))
                                                    }
                                                } catch (error) {
                                                    next(new Error(error.message))
                                                }
                                            }else{
                                                try {
                                                    let updateOrderProductResult = await Order.update({reason: `Full payment incomplete`, status: 'accept', payment: 'half-payment'},{where: {user__id: userId, order__id: orderId}});
                                                    if(updateOrderProductResult && updateOrderProductResult[0]){
                                                        let paymentHistoryInfo = {user__id: userId, order__id: orderId, amount: totalPaymentAmount, wallet: card_issuer, quantity: totalResultInfo.totalQuantity, products__ides: allPaymentProductsIdes, status: 'incomplete'};
                                                        try {
                                                            let paymentHistoryResult = await PaymentStatus.create(paymentHistoryInfo);
                                                            if(paymentHistoryResult && paymentHistoryInfo?.amount){
                                                                res.redirect(process.env.ORIGIN+'/profile')
                                                            }else{
                                                                next('Internal server error!');
                                                            }
                                                        } catch (error) {
                                                            next(new Error(error.message))
                                                        }
                                                    }else{
                                                        next(new Error('Invalid order status'))
                                                    }
                                                } catch (error) {
                                                    next(new Error(error.message))
                                                }
                                            }
                                        } catch (error) {
                                            next(new Error(error.message))
                                        }
                                    } catch (error) {
                                        next(new Error(error.message))
                                    } 
                                }else{
                                    next(new Error('Invalid server request!'))
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
                next(new Error('Invalid server request!'))
            }
        } catch (error) {
            next(new Error(error?.message))
        }
    }else{
        next(new Error('Internal server error!'))
    }
})

const handleCalculatePrice = async (products, system) => {
    const totalPrice = products.reduce( ( sum, { quantity, infos:{current__price} } ) => sum + (quantity*current__price) , 0);
    const totalQuantity = products.reduce( ( sum, { quantity } ) => sum + quantity , 0);
    let totalVat = (totalPrice / 100) * system?.vatPercent || 0;
    let totalTax = (totalPrice / 100) * system?.taxPercent || 0;
    let totalShippingFee = system.everyOrderShippingFee || 0;
    if(system.allProductShippingFeeInOn !== 'true'){ 
        totalShippingFee = totalQuantity * system.everyOrderShippingFee;
    }
    let allTotal = totalPrice + totalVat + totalTax + totalShippingFee;
    return {totalPrice, totalQuantity, totalVat, totalTax, totalShippingFee, allTotal, system}
}


const handleCalculatePaymentProductPrice = async (products, system) => {
    const totalPrice = products.reduce( ( sum, { quantity, price } ) => sum + (quantity*price) , 0);
    const totalQuantity = products.reduce( ( sum, { quantity } ) => sum + quantity , 0);
    let totalVat = (totalPrice / 100) * system?.vatPercent || 0;
    let totalTax = (totalPrice / 100) * system?.taxPercent || 0;
    let totalShippingFee = system.everyOrderShippingFee || 0;
    if(system.allProductShippingFeeInOn !== 'true'){ 
        totalShippingFee = totalQuantity * system.everyOrderShippingFee;
    }
    let allTotal = totalPrice + totalVat + totalTax + totalShippingFee;
    return {totalPrice, totalQuantity, totalVat, totalTax, totalShippingFee, allTotal, system}
}


const handleVerifyPayment = asyncHandler(async(req, res, next)=>{
    let orderId = req.params.orderId;
    if(orderId){
        let sslC = new SslCommerzPayment();
        try {
            let result = await sslC.validate({tran_id: orderId});
            console.log(result);
        } catch (error) {
            next(new Error(error.message))
        }
    }else{
        next(new Error('Invalid server request'))
    }
})

const handleInitiatePayment  = asyncHandler(async(req, res, next) => {
    let {user__id, currency} = req.body;  
    let order__id = uid(15);
    try {
        let getSystemInformation = await System.findOne({where: {id: 1}});
        if(getSystemInformation && getSystemInformation?.dataValues?.id){
            if(user__id && currency && order__id){
                let sql = `SELECT * FROM users WHERE user__id="${user__id}"`;
                try {
                    let {item} = await getSingleSqlProduct(sql);
        
                    let userInfo = item;  
                    userInfo.address = controllerUtils.bufferDataConverter(userInfo.address);
                    
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
                                            orderProductInfo.payment = 'Incomplete'
                                            orderProductInfo.order__id = order__id;
                                            orderProductInfo.pay__type = 'Online pay',
                                            orderProductInfo.phone = userInfo?.phone,
                                            orderProductInfo.user__id = user__id;
                                            orderProductInfo.id_order__id = `${newInfo.ID}_${order__id}`;
                                            allProductInfosArray.push(orderProductInfo);  
                                    });
                                    try {
                                        let totalResultInfo = await handleCalculatePrice(result.products, getSystemInformation.dataValues);
                                        try {
                                            let sql = `DELETE FROM cart WHERE user__id="${user__id}"`;
                                            let deleteResult = await deleteSingleSqlProduct(sql);
                                            if(deleteResult && deleteResult.status__code === 200){
                                                try {
                                                    let result = await Order.bulkCreate(allProductInfosArray);
                                                    if(result && result.length){ 
                                                        const data = {
                                                            total_amount: totalResultInfo.allTotal,
                                                            currency: 'BDT',
                                                            tran_id: order__id, // use unique tran_id for each api call
                                                            success_url: `http://localhost:10000`+'/api/v1/payment/success/'+order__id+`/${user__id}`,
                                                            // success_url: process.env.ORIGIN+'/payment/success/'+order__id,
                                                            fail_url: process.env.ORIGIN+'/payment/fail/'+order__id,
                                                            cancel_url: process.env.ORIGIN+'/payment/cancel/'+order__id,
                                                            ipn_url: process.env.ORIGIN+'/payment/ipn/'+order__id,
                                                            shipping_method: 'Courier',
                                                            product_name: 'Computer Accessories '+totalResultInfo.totalQuantity+' products',
                                                            product_category: 'Electronic',
                                                            product_profile: 'general',
                                                            cus_name: userInfo.name,
                                                            cus_email: userInfo.email,
                                                            cus_add1: userInfo.address.division.name,
                                                            cus_add2: userInfo.address.district.name,
                                                            cus_add3: userInfo.address.upazilla.name,
                                                            cus_add4: userInfo.address.union.name,
                                                            cus_add5: userInfo.address.street.street, 
                                                            cus_postcode: '6320',
                                                            cus_city: userInfo.address.district.name,
                                                            cus_state: userInfo.address.division.name, 
                                                            cus_country: 'Bangladesh',
                                                            cus_phone: '01711111111', 
                                                            ship_name: userInfo.name,
                                                            ship_add1: userInfo.address.division.name,
                                                            ship_add2: userInfo.address.district.name,
                                                            ship_add3: userInfo.address.upazilla.name,
                                                            ship_add4: userInfo.address.union.name,
                                                            ship_add5: userInfo.address.street.street, 
                                                            ship_city: userInfo.address.district.name,
                                                            ship_state: userInfo.address.division.name, 
                                                            ship_postcode: '6320',
                                                            ship_country: 'Bangladesh',
                                                        };
                                            
                                                        const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);

                                                        try {
                                                            let paymentResult = await sslcz.init(data); 
                                                                res.json(paymentResult);
                                                        } catch (error) {
                                                            next(new Error(error.message))
                                                        }
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
        
        
                    
                } catch (error) {
                    next(new Error(error.message));
                } 
            }else{
                next(new Error('Invalid server request!'))
            } 
        }else{
            next(new Error('Invalid server request'))
        }
    } catch (error) {
        next(new Error(error.message))
    }
});

module.exports = {
    handleInitiatePayment,
    handleVerifyPayment,
    handleSuccessPayment
}