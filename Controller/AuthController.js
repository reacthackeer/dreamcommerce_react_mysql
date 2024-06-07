const asyncHandler = require('express-async-handler');
const {hashPassword, comparePasswords} = require('../utils/Password')
const { generateFromEmail } = require("unique-username-generator");
const { generateToken } = require('../utils/jsonwebtoken');
const {addSingleSqlProduct, getSingleSqlProduct, updateSingleSqlProduct, getAllJustSqlProduct, getAllJustSqlProduct2, getAllJustSqlProduct3, getAllJustSqlProduct4, getSingleOrMultipleSqlProduct, deleteSingleSqlProduct}  = require('../query/products__query');
const controllerUtils = require('../utils/filterUtils');
const PopularCategory = require('../model/PopularCategory');
const Banner = require('../model/Banner');
const { Error } = require('sequelize');

const registerUser = asyncHandler(async(req, res, next)=>{
    let {email, password, phone, name, user__id} = req.body;
    if(email && password && phone && name && user__id){
        let passwordHashResult = await hashPassword(password);
            if(passwordHashResult.status__code === 200){
                let username = generateFromEmail(email);
                let data = {email, username, password: passwordHashResult.password, phone, name, user__id};
                    let sql = `INSERT INTO users (name, email, phone, password, user__id) VALUES ("${data.name}","${data.email}","${data.phone}","${data.password}","${data.user__id}")`;
                    try {
                        let userCreateResult = await addSingleSqlProduct(sql);
                        let userPostInfo = {email, password: data.password, phone, name, ID: userCreateResult.result.insertId, user__id};
                        try { 
                            let tokenResult = await generateToken(userPostInfo); 
                            delete userPostInfo.password;
                            res.json({...userPostInfo, token: tokenResult, role: 9, designation: 'user'})
                        } catch (error) {
                            next(new Error(error.message));
                        }
                    } catch (error) { 
                        console.log(error.message);
                        next(new Error('Email or phone already taken!'));
                    }
            }else{
                res.json(passwordHashResult)
            }
    }else{
        next(new Error('Please fill up all the fields!'))
    }
});

const handleRegisterUserFromAdminPanel = asyncHandler(async(req, res, next)=>{
    let {email, password, phone, name, user__id, store__id, store__email, role, designation} = req.body;
    if(email && password && phone && name && user__id && store__id && store__email, role && designation){
        let passwordHashResult = await hashPassword(password);
            if(passwordHashResult.status__code === 200){
                let username = generateFromEmail(email);
                let data = {email, username, password: passwordHashResult.password, phone, name, user__id, store__id, store__email, role, designation};
                    let sql = `INSERT INTO users (name, email, phone, password, user__id, store__id, store__email, role, designation) VALUES ("${data.name}","${data.email}","${data.phone}","${data.password}","${data.user__id}","${data.store__id}","${data.store__email}","${data.role}","${data.designation}")`;
                    try {
                        let userCreateResult = await addSingleSqlProduct(sql);
                        res.json(userCreateResult);
                    } catch (error) {  
                        next(new Error('Email or phone already taken!'));
                    }
            }else{
                res.json(passwordHashResult)
            }
    }else{
        next(new Error('Please fill up all the fields!'))
    }
});
const handleGetAllAdminInfo = asyncHandler(async(req, res, next)=> {
    let {role, designation, store__id, store__email} = req.query;
    if(role && designation && store__email && store__id){
        let sql = `SELECT * FROM users WHERE designation="${designation}" AND role="${role}" ${store__id !== '*' ? `AND store__id="${store__id}"` : '' } ${store__email !== '*' ? `AND store__email="${store__email}"` : ''}`; 
        console.log(sql);
        try {
            let result = await getSingleOrMultipleSqlProduct(sql); 
            if(result && result.status__code === 200){
                let allInfo = [];
                result.item.forEach((info)=> {
                    let userInfo = {...info};
                    delete userInfo.password;
                    delete userInfo.address;
                    delete userInfo.img__src
                    allInfo.push(userInfo);
                });
                res.json(allInfo)
            }else{
                next(new Error('Users not founded'))
            }
        } catch (error) {
            next(new Error(error.message))
        }
    } else { 
        next(new Error('Invalid post request!'))
    } 
})
const loginUser = asyncHandler(async(req, res, next)=>{
    let {email, phone, password} = req.body;
    if(email && phone && password){
        let sql = `SELECT * FROM users WHERE email="${email}" AND phone="${phone}"`;
        try {
            let {item} = await getSingleSqlProduct(sql); 
                    try {
                        let result = await comparePasswords(password, item.password);
                            if(result.status__code === 200){
                                try {
                                    let userInfo = item;  
                                        if(userInfo.address){
                                            userInfo.address = controllerUtils.bufferDataConverter(userInfo.address);
                                        }
                                    let tokenResult = await generateToken(userInfo);
                                    delete userInfo.password;

                                    res.json({...userInfo, token: tokenResult})
                                } catch (error) {
                                    next(new Error(error.message));
                                }
                            }else{
                                res.json(result);
                            }
                    } catch (error) {
                        next(new Error(error.message));
                    }
        } catch (error) {
            next(new Error(error.message));
        } 
    }else{
        next(new Error('Invalid server request!'))
    } 
})


const getPrintUserInfo = asyncHandler(async(req, res, next)=>{
    let {user__id} = req.params; 
    if(user__id){
        let sql = `SELECT * FROM users WHERE user__id="${user__id}"`;
        try {
            let {item} = await getSingleSqlProduct(sql);  
            try {
                let userInfo = item;  
                    if(userInfo.address){
                        userInfo.address = controllerUtils.bufferDataConverter(userInfo.address);
                    }  
                    delete userInfo?.password
                    res.json(userInfo);
            } catch (error) {
                next(new Error(error.message));
            }
        } catch (error) {
            next(new Error(error.message));
        } 
    }else{
        next(new Error('Invalid server request!'))
    } 
})

const updateUser = asyncHandler(async(req, res, next)=>{
    let data = req.body; 
    let {name, email, phone, img__src, address, role, designation, user__id, id}  = data;
    console.log({name, email, phone, role, designation, user__id, id});
    if(name && email && phone && role && designation && user__id && id){ 
        
        let newAddress = '';

        if(address && address?.division  && address?.district && address?.upazilla && address?.union){
            newAddress = controllerUtils.bufferDataMaker(address);
        }else{
            newAddress = null;
        }  
        let sql = `UPDATE users SET name="${name}", email="${email}", phone="${phone}", img__src="${img__src}", address='${newAddress}', role="${role}", designation="${designation}", user__id="${user__id}" WHERE id="${id}"`;
        try {
            let result = await updateSingleSqlProduct(sql);
            res.json(result);
        } catch (error) {
            console.log(error.message);
            next(new Error(error.message))
        }
    }else{ 
        next(new Error('Invalid server request'));
    }
})

const handleChangePasswordByAdmin = asyncHandler(async(req, res, next)=>{
    let data = req.body; 
    let {phone, password}  = data; 

    if(phone && password){ 
        try {
            const hashPasswordResult = await hashPassword(password); 
            if(hashPasswordResult && hashPasswordResult.status__code === 200){
                let sql = `UPDATE users SET password="${hashPasswordResult.password}" WHERE phone="${phone}"`;
                try {
                    let result = await updateSingleSqlProduct(sql);
                    res.json(result);
                } catch (error) {
                    console.log(error.message);
                    next(new Error(error.message))
                }
            }else{
                next(new Error('Internal server error!'))
            }
        } catch (error) {
            next(new Error(error.message))
        }
    }else{ 
        next(new Error('Invalid server request'));
    }
})
const updateAdminUser = asyncHandler(async(req, res, next)=>{
    let data = req.body; 
    let {name, email, phone, designation, role, user__id, store__id, store__email, id, block}  = data; 

    if(name && email && phone && role && designation && user__id && id && store__id && store__email && block){ 
        
        let sql = `UPDATE users SET name="${name}", email="${email}", phone="${phone}", role="${role}", designation='${designation}',  user__id="${user__id}", store__id="${store__id}", store__email="${store__email}", block="${block}" WHERE id="${id}"`;
        try {
            let result = await updateSingleSqlProduct(sql);
            res.json(result);
        } catch (error) {
            console.log(error.message);
            next(new Error(error.message))
        }
    }else{ 
        next(new Error('Invalid server request'));
    }
})


const deleteAdminUser = asyncHandler(async(req, res, next)=>{
    let {id} = req.params;
    if(id){
        let sql = `DELETE FROM users WHERE id="${id}"`;
        try {
            let result = await deleteSingleSqlProduct(sql);
            res.json(result);
        } catch (error) {
            next(new Error(error.message))
        }
    }else{
        next(new Error('Invalid delete request!'))
    }
})

const getAllNavbarData = asyncHandler(async(req, res, next)=>{
    
        let childSql  = 'SELECT * FROM child';
        let parentSql = 'SELECT * FROM parent';
        let upSql = `SELECT * FROM up`;
        let grandFatherSql = 'SELECT * FROM grandfather';
        
        try {
            let childResult = await getAllJustSqlProduct(childSql);
            try {
                let parentResult = await getAllJustSqlProduct2(parentSql);
                try {
                    let grandFatherResult = await getAllJustSqlProduct3(grandFatherSql);
                    try {
                        let upResult = await getAllJustSqlProduct4(upSql); 
                        let result = controllerUtils.navbarMaker({child: childResult.items, parent: parentResult.items, parent__father: grandFatherResult.items, up: upResult.items});
                        // res.json(result); 
                        try {
                            let allBannerResult = await Banner.findAll({});
                            let allTypes = [];
                            let allBannerResultByType = [];
                            allBannerResult.forEach((extraInfo)=> { 
                                let info = extraInfo.dataValues;
                                if(allTypes.indexOf(info.type) === -1){
                                    allTypes.push(info.type)
                                    allBannerResultByType.push({title: info.type, banners: [info]});
                                }else{
                                    let indexResult = allTypes.indexOf(info.type);  
                                    allBannerResultByType[indexResult].banners.push(info);
                                }
                            }) 
                            // res.json(allBannerResultByType); 
                            try {
                                let allCategoryResult = await PopularCategory.findAll({});
                                res.json({popularCategory: allCategoryResult, banners: allBannerResultByType, navbar: result})
                            } catch (error) {
                                next(new Error(error.message))
                            }
                        } catch (error) {
                            next(new Error(error.message))
                        }
                    } catch (error) { 
                        console.log(error.message);
                        next(new Error(error.message));
                    }
                } catch (error) {
                    next(new Error(error.message));
                }
            } catch (error) {
                next(new Error(error.message));
            }
        } catch (error) {
            next(new Error(error.message));
        } 
})
module.exports = {
    registerUser,
    loginUser,
    updateUser,
    getAllNavbarData,
    getPrintUserInfo,
    handleRegisterUserFromAdminPanel,
    handleGetAllAdminInfo,
    updateAdminUser,
    deleteAdminUser,
    handleChangePasswordByAdmin
}