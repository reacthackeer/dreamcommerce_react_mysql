const asyncHandler = require('express-async-handler');  
const StoreInformation = require('../model/StoreInformation');
const ContactUs = require('../model/ContactUs');

const handleAddSingleContactUs = asyncHandler(async(req, res, next)=>{

    const data = req.body;
    const {name, address, phone, website, facebook, instagram, twitter, email, youtube, linkedin } = data;
    if(
        data && 
        name &&
        address &&
        phone &&
        website &&
        facebook &&
        instagram &&
        twitter &&
        email && 
        youtube &&
        linkedin
    ){
        try {
            const getSystemResult = await ContactUs.findOne({where: {id: 1}});
            if(getSystemResult && getSystemResult?.dataValues?.id){
                try {
                    let updateSystemResult = await ContactUs.update(data, {where: {id: 1}});
                    if(updateSystemResult && updateSystemResult[0]){
                        res.json({id: 1, ...data})
                    }
                } catch (error) {
                    next(new Error(error.message))
                }
            }else{ 
                const addResult = await ContactUs.create({...data, id: 1});
                res.json(addResult);
            }
            
        } catch (error) {  
            next(new Error(error.message))
        }
    }else{
        next(new Error('Invalid server request'))
    }
});
const handleGetSingleContactUs = asyncHandler(async(req, res, next)=> {
    try {
        let systemGetResult = await ContactUs.findOne({where: {id: 1}});
        res.json(systemGetResult);
    } catch (error) {
        next(new Error(error.message))
    }
});

module.exports = {
    handleAddSingleContactUs,
    handleGetSingleContactUs
}
