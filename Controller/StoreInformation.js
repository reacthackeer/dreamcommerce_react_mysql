const asyncHandler = require('express-async-handler');  
const StoreInformation = require('../model/StoreInformation');

const handleAddSingleStoreInformation = asyncHandler(async(req, res, next)=>{

    const data = req.body;
    const {img__src , store__name, store__email, store__id} = data;
    if(
        data &&
        img__src &&
        store__email &&
        store__name &&
        store__id
    ){
        try {
            const getSystemResult = await StoreInformation.findOne({where: {id: 1}});
            if(getSystemResult && getSystemResult?.dataValues?.id){
                try {
                    let updateSystemResult = await StoreInformation.update(data, {where: {id: 1}});
                    if(updateSystemResult && updateSystemResult[0]){
                        res.json({id: 1, ...data})
                    }
                } catch (error) {
                    next(new Error(error.message))
                }
            }else{ 
                const addResult = await StoreInformation.create({...data, id: 1});
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
const handleGetSingleStoreInformation = asyncHandler(async(req, res, next)=> {
    try {
        let systemGetResult = await StoreInformation.findOne({where: {id: 1}});
        res.json(systemGetResult);
    } catch (error) {
        next(new Error(error.message))
    }
})
module.exports = {
    handleAddSingleStoreInformation,
    handleGetSingleStoreInformation
}