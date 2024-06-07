const asyncHandler = require('express-async-handler');
const System = require('../model/System');
const { getAllJustProduct } = require('../query/products__query');

const handleAddSingleSystem = asyncHandler(async(req, res, next)=>{

    const data = req.body;
    const {everyOrderShippingFee, everyProductShippingFee, vatPercent, taxPercent, allProductShippingFeeInOn, onlinePayment, cashOnDelivery} = data;
    if(
        data && 
        everyOrderShippingFee &&
        allProductShippingFeeInOn &&
        onlinePayment && 
        cashOnDelivery &&
        vatPercent &&
        taxPercent &&
        everyProductShippingFee
    ){
        try {
            const getSystemResult = await System.findOne({where: {id: 1}});
            if(getSystemResult && getSystemResult?.dataValues?.id){
                try {
                    let updateSystemResult = await System.update(data, {where: {id: 1}});
                    if(updateSystemResult && updateSystemResult[0]){
                        res.json({id: 1, ...data})
                    }
                } catch (error) {
                    next(new Error(error.message))
                }
            }else{ 
                const addResult = await System.create({...data, id: 1});
                res.json(addResult);
            }
            
        } catch (error) { 
            console.log(error.message);
            next(new Error(error.message))
        }
    }else{
        next(new Error('Invalid server request'))
    }
});
const handleGetSingleSystemInformation = asyncHandler(async(req, res, next)=> {
    try {
        let systemGetResult = await System.findOne({where: {id: 1}});
        res.json(systemGetResult);
    } catch (error) {
        next(new Error(error.message))
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
const handleGetSinglePriceCalculator = asyncHandler(async(req, res, next)=>{
    let userId = req.params.userId;
    if(userId){
        try {
            let systemInformation = await System.findOne({where: {id: 1}});
            if(systemInformation && systemInformation?.dataValues?.id && userId){
                const count1 = `SELECT p.product__id, p.brand, p.child, p.parent, p.parent__father, p.infos, p.visible__url, p.total__sell, c.quantity, p.ID, c.ID as CID FROM products p LEFT JOIN cart c ON c.product__id=p.ID WHERE c.user__id='${userId}'`;
                
                try {
                    let result = await getAllJustProduct(count1);
                        if(result.status__code === 200){ 
                            let priceCalculate = await handleCalculatePrice(result.products, systemInformation.dataValues);
                            res.json(priceCalculate)
                        }else{
                            res.json({status__code: 201})
                        }
                } catch (error) { 
                    const error1 = new Error(error.message);
                        error1.status = 500;
                        next(error1);
                } 
            }else{ 
                next(new Error("Internal server error!"))
            }
        } catch (error) {
            next(new Error(error.message))
        }
    }else{
        next(new Error('Invalid get requested!'))
    }
})
module.exports = {
    handleAddSingleSystem,
    handleGetSinglePriceCalculator,
    handleGetSingleSystemInformation
}