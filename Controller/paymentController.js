const asyncHandler = require('express-async-handler');
const { getSingleSqlProduct } = require('../query/products__query');
const SSLCommerzPayment = require('sslcommerz-lts')
const controllerUtils = require('../utils/filterUtils'); 
const { uid } = require('uid');

const store_id = process.env.SSL__STORE__ID__SUB;
const store_passwd = process.env.SSL__STORE__ID__SUB__KEY;
const is_live = false;

const handleInitiatePayment  = asyncHandler(async(req, res, next) => {
    let data = req.body; 
    console.log(data);
    if(data && data.user__id && data.currency){
        let sql = `SELECT * FROM users WHERE user__id="${data.user__id}"`;
        try {
            let {item} = await getSingleSqlProduct(sql);

            let userInfo = item;  
            userInfo.address = controllerUtils.bufferDataConverter(userInfo.address);
            
            const data = {
                total_amount: 100,
                currency: 'BDT',
                tran_id: uid(11), // use unique tran_id for each api call
                success_url: process.env.ORIGIN+'/payment/success',
                fail_url: process.env.ORIGIN+'/payment/fail',
                cancel_url: process.env.ORIGIN+'/payment/cancel',
                ipn_url: process.env.ORIGIN+'/payment/ipn',
                shipping_method: 'Courier',
                product_name: 'Computer.',
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

            const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
            // sslcz.init(data).then(apiResponse => {
            //     // Redirect the user to payment gateway
            //     let GatewayPageURL = apiResponse.GatewayPageURL
            //     res.redirect(GatewayPageURL)
            //     console.log('Redirecting to: ', GatewayPageURL)
            // });

            try {
                let paymentResult = await sslcz.init(data);
                // Redirect the user to payment gateway
                let GatewayPageURL = paymentResult.GatewayPageURL;
                console.log(GatewayPageURL);
                res.redirect(GatewayPageURL);
            } catch (error) {
                next(new Error(error.message))
            }

        } catch (error) {
            next(new Error(error.message));
        } 
    }else{
        next(new Error('Invalid server request!'))
    } 
});


module.exports = {
    handleInitiatePayment
}