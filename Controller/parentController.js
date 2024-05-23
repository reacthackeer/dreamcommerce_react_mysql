const asyncHandler = require('express-async-handler');
const { getAllJustSqlProduct, getSingleSqlProduct, addSingleSqlProduct, updateSingleSqlProduct } = require('../query/products__query');
const { deleteGeneralSqlOperation } = require('../query/offer__query');

const getAllParentNavbar = asyncHandler(async(req, res, next)=>{
    console.log('entered');
    let sql = `SELECT * FROM parent`;
    try {
        let result = await getAllJustSqlProduct(sql);
        res.json(result);
    } catch (error) {
        let newError = new Error(error.message);
            newError.status = 500;
            next(newError);
    }
})


// const getAllParentNavbar = asyncHandler(async(req, res, next)=>{
//     let {name, parent__father} = req.query;
//     if(name && parent__father){
//         let sql = `SELECT * FROM parent WHERE name="${name}" AND parent__father="${parent__father}"`;
//         try {
//             let result = await getAllJustSqlProduct(sql);
//             res.json(result);
//         } catch (error) {
//             let newError = new Error(error.message);
//                 newError.status = 500;
//                 next(newError);
//         }
//     }else{
//         let newError = new Error("Invalid server request");
//             newError.status=204;
//             next(newError);
//     }
// })
const getAllParentNavbarAll = asyncHandler(async(req, res, next)=>{
    let {up, parent__father} = req.query;
    up = up.replace(/anndd/g,'&');
    parent__father = parent__father.replace(/anndd/g,'&');
    if(up && parent__father){
        let sql = `SELECT * FROM parent WHERE up="${up}" AND parent__father="${parent__father}"`;
        try {
            let result = await getAllJustSqlProduct(sql);
            res.json(result);
        } catch (error) {
            let newError = new Error(error.message);
                newError.status = 500;
                next(newError);
        }
    }else{
        let newError = new Error("Invalid server request");
        newError.status=204;
        next(newError);
    }
})

const getAllParentFatherNavbar = asyncHandler(async(req, res, next)=>{
    let {parent__father} = req.query;
    parent__father = parent__father.replace(/anndd/g,'&');
    if(parent__father){
        let sql = `SELECT * FROM parent WHERE parent__father="${parent__father}"`;
        try {
            let result = await getAllJustSqlProduct(sql);
            res.json(result);
        } catch (error) {
            let newError = new Error(error.message);
                newError.status = 500;
                next(newError);
        }
    }else{
        let newError = new Error("Invalid server request");
            newError.status=204;
            next(newError);
    }
})

const getSingleParentNavbar = asyncHandler(async(req, res, next)=>{
    let {item__id} = req.params;
    if(item__id){
        let sql = `SELECT * FROM parent WHERE ID="${item__id}"`;
        try {
            let result = await getSingleSqlProduct(sql);
            res.json(result);
        } catch (error) {
            let newError = new Error(error.message);
            newError.status = 500;
            next(newError);
        }
    }else{
        let newError = new Error("Invalid server request");
        newError.status=204;
        next(newError);
    }
})

const addSingleParentNavbar = asyncHandler(async(req, res, next)=>{
    let {name, parent__father, uid, src, up} = req.body;
    if( name && parent__father && uid && src && up){
        let sql = `INSERT INTO parent (name, parent__father, uid, src, up) VALUES ("${name}","${parent__father}","${uid}","${src}","${up}")`;
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

const updateSingleParentNavbar = asyncHandler(async(req, res, next)=>{
    let {item__id} = req.params;
    let {name, parent__father, uid, src, up} = req.body;
    if(item__id &&  name && parent__father && uid && src && up){
        let sql = `UPDATE parent SET name="${name}",parent__father="${parent__father}",uid="${uid}",src="${src}", up="${up}" WHERE ID="${item__id}"`;
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
})


const deleteSingleParentNavbar = asyncHandler(async(req, res, next)=>{
    const ID = req.params?.item__id
    if(ID){ 
        const query = `DELETE FROM parent WHERE ID="${ID}"`
        try {
            const result = await deleteGeneralSqlOperation(query);
            if(result?.status__code === 200){
                res.json(result);
            }else{
                const errorBody = new Error('DELETED DATA NOT FOUND!');
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
    getAllParentNavbar,
    getSingleParentNavbar,
    addSingleParentNavbar,
    updateSingleParentNavbar,
    deleteSingleParentNavbar,
    getAllParentFatherNavbar,
    getAllParentNavbarAll
}