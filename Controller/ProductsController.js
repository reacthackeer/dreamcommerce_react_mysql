const asyncHandler = require('express-async-handler');
const { dataConverterUtils } = require('../utils/dataConverterUtils');
const { 
    getAllSearchProduct, 
    getAllMultipleOffers, 
    getProductForFilter, 
    getFilterForFilter, 
    getSingleSqlProductById,
    addSingleSqlProduct,
    updateSingleSqlProduct
} = require('../query/products__query');
const { getSqlProductLength } = require('../query/lengthQuery'); 
const { 
    childProductAndSpecification, 
    brandFilter 
} = require('../utils/filterUtils');
const controllerUtils = require('../utils/filterUtils');

const handleGetAllSearchProduct = asyncHandler(async(req, res, next)=>{
    
    const searchStr = req.params.search_string;
    let newSearchString = searchStr.toLowerCase().replace(/ /g,'%'); 
    const count = `SELECT COUNT(*) FROM products WHERE visible__url LIKE '%${newSearchString}%'`;
    const page = Number(req.query?.page) || 1;
    let peerPage = Number(req.query?.peerPage) || 45;
        peerPage = peerPage > 70 ? 70 : peerPage
    try{
        const result = await getSqlProductLength(count); 
        if(result[0]['COUNT(*)'] > 0){  
            let total__products = Number(result[0]['COUNT(*)']);
            let total__page = Math.ceil(Number(result[0]['COUNT(*)']) / peerPage);
            const offset = (page - 1) * peerPage;
            const limit = peerPage; 
            const count1 = `SELECT * FROM products WHERE visible__url LIKE '%${newSearchString}%' LIMIT ${offset},${limit}`;
            try {
            let result = await getAllSearchProduct(count1);
            res.json({...result, total__page, total__products, current__limit: [offset, offset+limit]});
            } catch (error) { 
                const error1 = new Error(error.message);
                    error1.status = 500;
                    next(error1);
            }

        }else{
            const newError = new Error('No product ');
                newError.status = 204;
            next(newError);
        }
    } catch (error) {
        res.json(error)
    }
})

const handleGetAllSingleBrandProduct = asyncHandler(async(req, res, next)=>{
    const brand = req.params.brand;   
    
    const count = `SELECT COUNT(*) FROM products WHERE brand='${brand}'`;
    const page = Number(req.query?.page) || 1;
    let peerPage = Number(req.query?.peerPage) || 45;
        peerPage = peerPage > 70 ? 70 : peerPage
        

    try{
        const result = await getSqlProductLength(count); 
        if(result[0]['COUNT(*)'] > 0){   
            let total__products = Number(result[0]['COUNT(*)']);
            let total__page = Math.ceil(Number(result[0]['COUNT(*)']) / peerPage);
            const offset = (page - 1) * peerPage;
            const limit = peerPage; 
            const count1 = `SELECT * FROM products WHERE brand='${brand}' LIMIT ${offset},${limit}`;
            try {
            let result = await getAllSearchProduct(count1);
            res.json({...result, total__page, total__products, current__limit: [offset, offset+limit]});
            } catch (error) { 
                const error1 = new Error(error.message);
                    error1.status = 500;
                    next(error1);
            } 
        }else{
            const newError = new Error('No product ');
                newError.status = 204;
            next(newError);
        }
    } catch (error) {
        res.json(error)
    }
})

const handleGetAllProduct = asyncHandler(async(req, res, next)=>{
    let {offset, limit} = req.query; 
    const count1 = `SELECT * FROM products`;
    try {
    let result = await getAllSearchProduct(count1);
    res.json(result);
    } catch (error) { 
        const error1 = new Error(error.message);
            error1.status = 500;
            next(error1);
    } 
})

const handleGetAllSingleBrandSimilarProduct = asyncHandler(async(req, res, next)=>{
    const {brand, product__id} = req.params;    

    const count1 = `SELECT * FROM products WHERE brand='${brand}' AND ID != '${product__id}' LIMIT 1,40`;
    try {
        let result = await getAllSearchProduct(count1);
        res.json({status__code: 200, products: result.products});
    } catch (error) { 
        const error1 = new Error(error.message);
            error1.status = 500;
            next(error1);
    } 
})

// up  completed




const handleGetSingleChildProduct = asyncHandler(async(req, res, next)=>{
    const params = req.params;  
    if(params && params?.child && params?.parent && params?.parent__father){
        const {child, parent, parent__father} = params;
        const count = `SELECT COUNT(*) FROM products WHERE child='${child}' AND parent='${parent}' AND parent__father='${parent__father}'`;
        const page = Number(req.query?.page) || 1;
        let peerPage = Number(req.query?.peerPage) || 45;
            peerPage = peerPage > 70 ? 70 : peerPage
        try{
            
            const result = await getSqlProductLength(count); 
            
            if(result[0]['COUNT(*)'] > 0){  
                let total__products = Number(result[0]['COUNT(*)']);
                let total__page = Math.ceil(Number(result[0]['COUNT(*)']) / peerPage);
                const offset = (page - 1) * peerPage;
                const limit = peerPage; 
                const count1 = `SELECT * FROM products WHERE child='${child}' AND parent='${parent}' AND parent__father='${parent__father}' LIMIT ${offset},${limit}`;
                try {
                let resultP = await getProductForFilter(count1);
                    if(resultP.length > 0){
                        try {
                            const count1 = `SELECT * FROM filter__navbar WHERE child='${child}' AND parent='${parent}' AND parent__father='${parent__father}'`;
                            let resultF = await getFilterForFilter(count1);  
                            if(resultF.length > 0){
                                let {product, filterNavbar} = childProductAndSpecification(resultP, resultF);
                                let shortedProduct = product?.sort((a,b)=> a?.infos?.current__price - b?.infos?.current__price);
                                let lowPrice = shortedProduct[0]?.infos?.current__price;
                                let highPrice = shortedProduct[shortedProduct.length - 1]?.infos?.current__price

                                res.json({products: product, lowPrice, highPrice, filter__navbar: filterNavbar, status__code: 200, current__product__length: product.length, total__page: total__page, current__page: page, total__products, current__limit: [offset, offset+limit]});
                            }else{
                                const {product, filterNavbar} = childProductAndSpecification(resultP,  []);
                                let shortedProduct = product?.sort((a,b)=> a?.infos?.current__price - b?.infos?.current__price);
                                let lowPrice = shortedProduct[0]?.infos?.current__price;
                                let highPrice = shortedProduct[shortedProduct.length - 1]?.infos?.current__price
                                res.json({products: product, lowPrice, highPrice, filter__navbar: filterNavbar, status__code: 200, current__product__length: product.length, total__page: total__page, current__page: page, total__products, current__limit: [offset, offset+limit]});
                            }
                        } catch (error) {
                            const error1 = new Error(error.message);
                            error1.status = 500;
                            next(error1);
                        }
                    }else{
                        const newError = new Error('No product Found');
                        newError.status = 204;
                        next(newError);
                    }
                } catch (error) { 
                    const error1 = new Error(error.message);
                        error1.status = 500;
                        next(error1);
                }
    
            }else{
                const newError = new Error('No product Found');
                    newError.status = 204;
                next(newError);
            }
        } catch (error) {
            const error1 = new Error(error.message);
            error1.status = 500;
            next(error1);
        }
    }else{
        const newError = new Error('Invalid server request!');
            newError.status = 500;
            next(newError);
    }
});


const handleGetSingleChildSimilarProductProduct = asyncHandler(async(req, res, next)=>{
    const params = req.params;  
    if(params && params?.child && params?.parent && params?.parent__father && params?.product__id){
        const {child, parent, parent__father, product__id} = params;
        const count = `SELECT COUNT(*) FROM products WHERE child='${child}' AND parent='${parent}' AND parent__father='${parent__father}' AND ID != '${product__id}'`;
        const page = Number(req.query?.page) || 1;
        let peerPage = Number(req.query?.peerPage) || 45;
            peerPage = peerPage > 70 ? 70 : peerPage
        try{
            
            const result = await getSqlProductLength(count); 
            
            if(result[0]['COUNT(*)'] > 0){   
                const offset = (page - 1) * peerPage;
                const limit = peerPage; 
                const count1 = `SELECT * FROM products WHERE child='${child}' AND parent='${parent}' AND parent__father='${parent__father}' LIMIT ${offset},${limit}`;
                try {
                let resultP = await getProductForFilter(count1);
                    if(resultP.length > 0){
                        res.status(200).json({products: resultP})
                    }else{
                        const newError = new Error('No product Found');
                        newError.status = 500;
                        next(newError);
                    }
                } catch (error) { 
                    const error1 = new Error(error.message);
                        error1.status = 500;
                        next(error1);
                }
    
            }else{
                const newError = new Error('No product Found');
                    newError.status = 204;
                next(newError);
            }
        } catch (error) {
            const error1 = new Error(error.message);
            error1.status = 500;
            next(error1);
        }
    }else{
        const newError = new Error('Invalid server request!');
            newError.status = 500;
            next(newError);
    }
});

const handleGetSingleParentProduct = asyncHandler(async(req, res, next)=>{
    const params = req.params;  
    if(params && params?.parent && params?.parent__father){
        const {child, parent, parent__father} = params;
        const count = `SELECT COUNT(*) FROM products WHERE parent='${parent.replace(/_/g,'/')}' AND parent__father='${parent__father.replace(/_/g,'/')}'`;
        const page = Number(req.query?.page) || 1;
        let peerPage = Number(req.query?.peerPage) || 45;
            peerPage = peerPage > 70 ? 70 : peerPage
        try{
            const result = await getSqlProductLength(count); 
            
            if(result[0]['COUNT(*)'] > 0){  
                let total__products = Number(result[0]['COUNT(*)']);
                let total__page = Math.ceil(Number(result[0]['COUNT(*)']) / peerPage);
                const offset = (page - 1) * peerPage;
                const limit = peerPage; 
                const count1 = `SELECT * FROM products WHERE parent='${parent.replace(/_/g,'/')}' AND parent__father='${parent__father.replace(/_/g,'/')}' LIMIT ${offset},${limit}`;
                try {
                let resultP = await getProductForFilter(count1);
                    if(resultP.length > 0){
                        try {
                            const count1 = `SELECT * FROM filter__navbar WHERE parent='${parent.replace(/_/g,'/')}' AND parent__father='${parent__father.replace(/_/g,'/')}'`;
                            let resultF = await getFilterForFilter(count1); 
                            if(resultF.length > 0){
                                let {product, filterNavbar} = childProductAndSpecification(resultP, resultF);
                                let shortedProduct = product?.sort((a,b)=> a?.infos?.current__price - b?.infos?.current__price);
                                let lowPrice = shortedProduct[0]?.infos?.current__price;
                                let highPrice = shortedProduct[shortedProduct.length - 1]?.infos?.current__price
                                res.json({products: product, lowPrice, highPrice, filter__navbar: filterNavbar, status__code: 200, current__product__length: product.length, total__page: total__page, current__page: page, total__products, current__limit: [offset, offset+limit]});
                            }else{
                                const {product, filterNavbar} = childProductAndSpecification(resultP,  []);
                                let shortedProduct = product?.sort((a,b)=> a?.infos?.current__price - b?.infos?.current__price);
                                let lowPrice = shortedProduct[0]?.infos?.current__price;
                                let highPrice = shortedProduct[shortedProduct.length - 1]?.infos?.current__price
                                res.json({products: product, lowPrice, highPrice, filter__navbar: filterNavbar, status__code: 200, current__product__length: product.length, total__page: total__page, current__page: page, total__products, current__limit: [offset, offset+limit]});
                            }
                        } catch (error) {
                            const error1 = new Error(error.message);
                            error1.status = 500;
                            next(error1);
                        }
                    }else{
                        const newError = new Error('No product Found');
                        newError.status = 204;
                        next(newError);
                    }
                } catch (error) { 
                    const error1 = new Error(error.message);
                        error1.status = 500;
                        next(error1);
                }
    
            }else{
                const newError = new Error('No product Found');
                    newError.status = 204;
                next(newError);
            }
        } catch (error) {
            const error1 = new Error(error.message);
            error1.status = 500;
            next(error1);
        }
    }else{
        const newError = new Error('Invalid server request!');
            newError.status = 500;
            next(newError);
    }
})

const handleGetSingleFatherProduct = asyncHandler(async(req, res, next)=>{
    const params = req.params;  
    if(params && params?.parent__father){
        const {parent__father} = params;
        const count = `SELECT COUNT(*) FROM products WHERE parent__father='${parent__father}'`;
        const page = Number(req.query?.page) || 1;
        let peerPage = Number(req.query?.peerPage) || 45;
            peerPage = peerPage > 70 ? 70 : peerPage
        try{
            const result = await getSqlProductLength(count);  
            if(result[0]['COUNT(*)'] > 0){  
                let total__products = Number(result[0]['COUNT(*)']);
                let total__page = Math.ceil(Number(result[0]['COUNT(*)']) / peerPage);
                const offset = (page - 1) * peerPage;
                const limit = peerPage; 
                const count1 = `SELECT * FROM products WHERE parent__father='${parent__father}' LIMIT ${offset},${limit}`;
                try {
                let result = await getProductForFilter(count1);
                    if(result.length > 0){
                        let {product, filterNavbar} = brandFilter(result); 
                        let shortedProduct = product?.sort((a,b)=> a?.infos?.current__price - b?.infos?.current__price);
                        let lowPrice = shortedProduct[0]?.infos?.current__price;
                        let highPrice = shortedProduct[shortedProduct.length - 1]?.infos?.current__price
                        res.json({products: product, lowPrice, highPrice, filter__navbar: filterNavbar, status__code: 200, current__product__length: product.length, total__page: total__page, current__page: page, total__products, current__limit: [offset, offset+limit]});
                    }else{
                        res.json({products: [], filter__navbar: [], status__code: 204, current__product__length: 0, total__page: 0, current__page: 1, total__products: 0, current__limit: [offset, offset+limit]});
                    }
                } catch (error) { 
                    const error1 = new Error(error.message);
                        error1.status = 500;
                        next(error1);
                }
    
            }else{
                const newError = new Error('No product Found');
                    newError.status = 204;
                next(newError);
            }
        } catch (error) {
            res.json(error)
        }
    }else{
        const newError = new Error('Invalid server request!');
            newError.status = 500;
            next(newError);
    }
});

const handleGetSingleProductById = asyncHandler(async(req, res, next)=>{
    let {product__id, visible__url} = req.params;
    if(product__id && visible__url){
        let sql = `SELECT * FROM products WHERE ID="${product__id}" AND visible__url="${visible__url}"`;
        let singleProduct = await getSingleSqlProductById(sql);
        if(singleProduct?.status__code === 200){
            res.json(singleProduct)
        }else{
            res.json({product: {}, status__code: 204})
        }
    }else{
        let newError = new Error('Invalid server request!');
            newError.status = 500;
            next(newError);
    }
})


const handleGetSingleProductByJustId = asyncHandler(async(req, res, next)=>{
    let {product__id} = req.params;
    if(product__id){
        let sql = `SELECT * FROM products WHERE ID="${product__id}"`;
        let singleProduct = await getSingleSqlProductById(sql);
        if(singleProduct?.status__code === 200){
            res.json(singleProduct)
        }else{
            res.json({product: {}, status__code: 204})
        }
    }else{
        let newError = new Error('Invalid server request!');
            newError.status = 500;
            next(newError);
    }
})

const handleAddNewProduct = asyncHandler(async(req, res, next)=>{
    let product = req.body;
    let {product__id, brand, child, parent, parent__father, up, visible__url, visible, total__sell, quantity, views} = product;
    if(product && product?.product__id){
        let bufferData = controllerUtils.bufferDataMaker(product); 
        
        let sql = `INSERT INTO products (product__id, brand, child, parent, parent__father, up, visible__url, visible, total__sell, quantity, views, infos) VALUES ("${product__id}","${brand}","${child}","${parent}","${parent__father}","${up}","${visible__url}","${visible}","${total__sell}","${quantity}","${views}",'${bufferData}')`
        try {
            let result = await addSingleSqlProduct(sql);
            if(result.status__code === 201){
                res.json(result);
            }else{ 
                next(new Error('Invalid server request!'));
            }
        } catch (error) {
            next(new Error('Invalid Server Request!'))
        }
    }else{
        next(new Error('Invalid Server Request!'))
    }
});

const handleEditSingleProduct =  asyncHandler(async(req, res, next)=>{
    let {ID} = req.params;
    let product = req.body;
    let {product__id, brand, child, parent, parent__father, up, visible__url, visible, total__sell, quantity, views} = product;
    if(ID && product && product?.product__id){
        let bufferData = controllerUtils.bufferDataMaker(product);
        let sql = `UPDATE products SET product__id="${product__id}",brand="${brand}",child="${child}",parent="${parent}",parent__father="${parent__father}",up="${up}",visible__url="${visible__url}",visible="${visible}",total__sell="${total__sell}",quantity="${quantity}",views="${views}",infos='${bufferData}' WHERE ID="${ID}"`;
        try {
            let result = await updateSingleSqlProduct(sql);
            if(result.status__code === 200){
                res.json(result);
            }else{
                next(new Error('Invalid server request!'));
            }
        } catch (error) {
            next(new Error(error.message));
        }
    }else{
        let newError = new Error('Invalid server request!');
        next(newError);
    }
})


const handleGetAllSingleOfferProduct = asyncHandler(async(req, res, next)=>{
    const name = req.params.offer; 
    const count = `SELECT COUNT(*) FROM offers WHERE name='${name}'`;
    
    const page = Number(req.query?.page) || 1;
    let peerPage = Number(req.query?.peerPage) || 45;
        peerPage = peerPage > 70 ? 70 : peerPage
    
    try{
        const result = await getSqlProductLength(count); 
        if(result[0]['COUNT(*)'] > 0){   
            let total__products = Number(result[0]['COUNT(*)']);
            let total__page = Math.ceil(Number(result[0]['COUNT(*)']) / peerPage);
            const offset = (page - 1) * peerPage;
            const limit = peerPage; 
            const count1 = `SELECT p.product__id, p.brand, p.child, p.parent, p.parent__father, p.infos, p.visible__url, p.total__sell, p.ID FROM products p LEFT JOIN offers o ON o.product__id=p.ID WHERE o.name='${name}' LIMIT ${offset},${limit}`;
            
            try {
            let result = await getAllSearchProduct(count1);
            res.json({...result, total__page, total__products, current__limit: [offset, offset+limit]});
            } catch (error) { 
                const error1 = new Error(error.message);
                    error1.status = 500;
                    next(error1);
            } 
        }else{
            const newError = new Error('No product ');
                newError.status = 204;
            next(newError);
        }
    } catch (error) {
        res.json(error)
    }
})

const handleGetAllMultipleOffersProduct = asyncHandler(async(req, res, next)=>{
    const name = req.params.offer; 
    const count = `SELECT COUNT(*) FROM offers WHERE active="true"`;
    
    const page = Number(req.query?.page) || 1;
    let peerPage = Number(req.query?.peerPage) || 45;
        peerPage = peerPage > 70 ? 70 : peerPage
    
    try{
        const result = await getSqlProductLength(count); 
        if(result[0]['COUNT(*)'] > 0){   
            let total__products = Number(result[0]['COUNT(*)']);
            let total__page = Math.ceil(Number(result[0]['COUNT(*)']) / peerPage);
            const offset = (page - 1) * peerPage;
            const limit = peerPage; 
            const count1 = `SELECT p.ID, o.name, p.product__id, p.brand, p.child, p.parent, p.parent__father, p.infos, p.visible__url, p.total__sell FROM products AS p RIGHT JOIN offers AS o ON o.product__id=p.ID WHERE o.active="true"`;
            
            try {
                let result = await getAllMultipleOffers(count1, peerPage);
                res.json({...result, total__page, current__page: page, total__products, current__limit: [offset, offset+limit]});
            } catch (error) { 
                const error1 = new Error(error.message);
                    error1.status = 500;
                    next(error1);
            }
        }else{
            const newError = new Error('No product ');
                newError.status = 204;
            next(newError);
        }
    } catch (error) {
        res.json(error)
    }
})

module.exports = {
    handleEditSingleProduct,
    handleAddNewProduct,
    handleGetAllSearchProduct,
    handleGetAllSingleBrandProduct, 
    handleGetAllSingleOfferProduct,
    handleGetAllMultipleOffersProduct,  
    handleGetSingleChildProduct,
    handleGetSingleParentProduct,
    handleGetSingleFatherProduct,
    handleGetSingleProductById,
    handleGetSingleChildSimilarProductProduct,
    handleGetAllSingleBrandSimilarProduct,
    handleGetSingleProductByJustId,
    handleGetAllProduct
}