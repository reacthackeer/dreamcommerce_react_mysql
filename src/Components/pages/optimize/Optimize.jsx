import { Button, Heading } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { uid } from 'uid';

const Optimize = () => {
    const [products, setProducts] = useState([]); 

    const handleGetAllProduct = (index) => {
        axios.get(`http://localhost:10000/api/v1/products/getAllProduct`)
        .then((res)=>{ 
            let storeInfo = {
                store__id: 999999999999,
                store__email: 'dearvayu@gmail.com'
            }
            let {products} = res.data;
            let allNewGeneratedProducts = [];
            products.forEach((info)=>{
                let newProductInfo = {       
                    "product__group": "", 
                };
                newProductInfo.store__id = storeInfo.store__id;
                newProductInfo.store__email = storeInfo.store__email;
                newProductInfo.product__id = info.product__id;
                newProductInfo.product__uid = uid(15).toUpperCase();
                newProductInfo.visible__url = info.visible__url;
                newProductInfo.title = info.infos.title;
                newProductInfo.child = info.child;
                newProductInfo.brand = info.brand;
                newProductInfo.parent = info.parent;
                newProductInfo.parent__father = info.parent__father;
                newProductInfo.up = info.up;
                newProductInfo.message = 'Color may be different'
                newProductInfo.total__sell = 0;
                newProductInfo.total__review = 0;
                newProductInfo.total__profit = 0;
                newProductInfo.total__view = 0;
                newProductInfo.rating__average = 5;
                newProductInfo.offer__quantity = 0;
                newProductInfo.quantity = 100;
                newProductInfo.way__quantity = 0;
                newProductInfo.whole__price = info.infos.whole__price;
                newProductInfo.profit = info.infos.current__price - info.infos.whole__price;
                newProductInfo.current__price = info.infos.current__price;
                newProductInfo.offer__price = info.infos.current__price;
                newProductInfo.previous__price = info.infos.previous__price;
                newProductInfo.infos = info.infos;
                newProductInfo.specifications = info.infos.specifications;
                newProductInfo.details = info.infos.details;
                newProductInfo.overviews = info.infos.overviews;
                newProductInfo.images = info.infos.images;
                newProductInfo.editor__history = [];
                newProductInfo.price__history = [];
                newProductInfo.discount__coupons = [];
                newProductInfo.is__recycle = 'no';
                newProductInfo.salable = 'yes';
                newProductInfo.visible = 'yes';
                newProductInfo.discountable = 'no';
                newProductInfo.stock__out_salable = 'no';
                newProductInfo.offer__stock__out__salable = 'no';
                newProductInfo.on__way = 'no';
                let  filterArray = [];
                info.infos.specifications.forEach((sInfo)=>{
                    sInfo.infos.forEach((pInfo)=>{
                        if(pInfo && pInfo?.title && pInfo?.info){
                            let filterSingleString = `${pInfo.title}_${pInfo.info}__`;
                            filterArray.push(filterSingleString);
                        }
                    })
                }) 
                filterArray = filterArray.sort(); 
                newProductInfo.filter_url = `__${filterArray.join('')}__`;

                let product__group = 'z';

                if(info.infos.current__price < 200){
                    product__group = 'A'
                } else if(info.infos.current__price < 300){
                    product__group = 'B'
                } else if(info.infos.current__price < 500){
                    product__group = 'C'
                } else if(info.infos.current__price < 800){
                    product__group = 'D'
                } else if(info.infos.current__price < 1000){
                    product__group = 'E'
                } else if(info.infos.current__price < 1500){
                    product__group = 'F'
                } else if(info.infos.current__price < 2000){
                    product__group = 'G'
                } else if(info.infos.current__price < 3000){
                    product__group = 'H'
                } else if(info.infos.current__price < 5000){
                    product__group = 'I'
                } else if(info.infos.current__price < 10000){
                    product__group = 'J'
                } else if(info.infos.current__price < 20000){
                    product__group = 'K'
                } else if(info.infos.current__price < 40000){
                    product__group = 'L'
                } else if(info.infos.current__price < 80000){
                    product__group = 'M'
                } else if(info.infos.current__price < 160000){
                    product__group = 'N'
                } else if(info.infos.current__price < 3000000){
                    product__group = 'O'
                } else if(info.infos.current__price < 6000000){
                    product__group = 'P'
                } else if(info.infos.current__price < 12000000){
                    product__group = 'U'
                } else if(info.infos.current__price < 24000000){
                    product__group = 'V'
                } else if(info.infos.current__price < 48000000){
                    product__group = 'W'
                } else if(info.infos.current__price < 96000000){
                    product__group = 'X'
                } else if(info.infos.current__price < 192000000){
                    product__group = 'Y'
                }
                newProductInfo.product__group = product__group;
                allNewGeneratedProducts.push(newProductInfo);
            })     
            setProducts(()=> allNewGeneratedProducts);
        }).catch((err)=>{ 
        })
    }

    const handlePostAllProducts = (count) => { 
        axios.post('http://localhost:3000/api/v1/products',products[count])
        .then((res)=> { 
            document.getElementById('heading__id').innerText = count; 
            let newCount = count+1;
            handlePostAllProducts(newCount)
        }).catch((err)=>{ 
        })
    }
    return (
        <div> 
            <Button
                onClick={()=>handleGetAllProduct(30, 0)}
            >Get All Product</Button>
            <Button
                onClick={()=> handlePostAllProducts(0)}
                isDisabled={products.length === 0}
            >Post All Product</Button>
            <Heading size={'4xl'} id='heading__id'></Heading>
        </div>
    );
};

export default Optimize;

// let newProductInfo = {          
//     "product__id": "",
//     "product__uid": uid(15),
//     "store__id": storeInfo.store__id,
//     "store__email": storeInfo.store__email,
//     "product__group": "",
//     "filter_url": "",
//     "visible__url": "",
//     "title": "",
//     "brand": "",
//     "child": "",
//     "parent": "",
//     "parent__father": "",
//     "up": "Computer and accessories",
//     "message": 'Color may be different',
//     "total__sell": 0,
//     "total__review": 0,
//     "total__profit": 0,
//     "total__view": 0,
//     "way__quantity": 0,
//     "quantity": 100,
//     "offer__quantity": 0,
//     "rating__average": 5,
//     "whole__price": 0,
//     "current__price": 0,
//     "previous__price": 0,
//     "offer__price": 0,
//     "profit": 0,
//     "on__way": "no",
//     "offer__stock__out__salable": "no",
//     "stock__out_salable": "no",
//     "discountable": "no", 
//     "visible": "yes",
//     "salable": 'yes',
//     "is__recycle": 'no',
//     "discount__coupons": [
//         {code: 'DangUli', discount: 10}
//     ], 
//     "images": [],
//     "overviews": [],
//     "details": [],
//     "specifications": [], 
//     "price__history": [], 
//     "editor__history": [],
//     "infos": {}
// };