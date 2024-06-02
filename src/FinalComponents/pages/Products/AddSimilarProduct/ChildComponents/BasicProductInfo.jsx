 
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
    Text
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useGetAllBrandQuery, useGetAllChildNavbarQuery, useGetAllParentFatherNavbarQuery, useGetAllParentNavbarQuery, useGetAllUpNavbarQuery } from '../../../../../features/brand/brandApi';


const BasicProductInfo = () => {
    let {data} = useGetAllBrandQuery();

    
    const [product, setProduct] = useState(JSON.parse(sessionStorage.getItem('product')) || {}); 
    const [brand, setBrand] = useState(sessionStorage.getItem('brand') || '');
    const [brandSearchText, setBrandSearchText] = useState('');

    // const [saveChange, setSaveChange] = useState(false);
    

    
    const [activeProductClear, setActiveProductClear] = useState(true);
    const [showClear, setShowClear] = useState(false);
    const handleClearProductCache = () => {
      sessionStorage.removeItem('product')
      setProduct({}); 
      setActiveProductClear(true);
      document.querySelectorAll('input').forEach((info)=>{
        info.value = ''
      })
    } 

      
    const handleChange = (event) => {
            if(showClear === false){
                setShowClear(()=> true)
            }
          const { name, value } = event.target;
          setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
          }));
        };
    const handleBrandChange = (value) => {
        setBrand(value);
    }


    

    const handleFilterBrandData = () => {
        if(brandSearchText){
            return data.filter((info)=> info.brand.toLowerCase().indexOf(brandSearchText.toLowerCase()) !== -1)
        }
        return data;
    }
    
    // section navbar start
    let { data : upNavbarData } = useGetAllUpNavbarQuery();
    const [upNavbar, setUpNavbar] = useState(sessionStorage.getItem('up__navbar') || '');
    const [upNavbarSearchText, setUpNavbarSearchText] = useState('');
    
    const handleUpNavbarChange = (value) => {
        setUpNavbar(value);
    }
    
    const handleFilterUpNavbarData = () => {

        if(upNavbarData && upNavbarData?.status__code === 200 && upNavbarData?.items?.length > 0){
            if(upNavbarSearchText){
                return upNavbarData.items.filter((info)=> info.name.toLowerCase().indexOf(upNavbarSearchText.toLowerCase()) !== -1)
            }else{
                return upNavbarData.items;
            }
        }
        return []
    }
    // section navbar end

    // top category start
    let {data: topCategoryData} = useGetAllParentFatherNavbarQuery(upNavbar);
    const [topCategory, setTopCategory] = useState(sessionStorage.getItem('top__category') || '');
    const [topCategorySearchText, setTopCategorySearchText] = useState('');
    
    const handleTopCategoryChange = (value) => {
        setTopCategory(value);
    }
    const handleFilterTopCategoryData = () => {

        if(topCategoryData && topCategoryData?.status__code === 200 && topCategoryData?.items?.length > 0){
            if(topCategorySearchText){
                return topCategoryData.items.filter((info)=> info.name.toLowerCase().indexOf(upNavbarSearchText.toLowerCase()) !== -1)
            }else{
                return topCategoryData.items;
            }
        }
        return []
    }
    // top category end
    // category start
    let {data: categoryData} = useGetAllParentNavbarQuery({parent__father: topCategory, up: upNavbar});
    const [category, setCategory] = useState(sessionStorage.getItem('category') || '');
    const [categorySearchText, setCategorySearchText] = useState('');
    
    const handleCategoryChange = (value) => {
        setCategory(value);
    }
    
    const handleFilterCategoryData = () => {

        if(categoryData && categoryData?.status__code === 200 && categoryData?.items?.length > 0){
            if(categorySearchText){
                return categoryData.items.filter((info)=> info.name.toLowerCase().indexOf(upNavbarSearchText.toLowerCase()) !== -1)
            }else{
                return categoryData.items;
            }
        }
        return []
    }

    // category end

    let {data: collectionData} = useGetAllChildNavbarQuery({parent: category, up: upNavbar});
    const [collection, setCollection] = useState(sessionStorage.getItem('collection') || '');
    const [collectionSearchText, setCollectionSearchText  ] = useState('');
    
    const handleCollectionChange = (value) => {
        setCollection(value);
    }
    
    const handleFilterCollectionData = () => {

        if(collectionData && collectionData?.status__code === 200 && collectionData?.items?.length > 0){
            if(collectionSearchText){
                return collectionData.items.filter((info)=> info.name.toLowerCase().indexOf(upNavbarSearchText.toLowerCase()) !== -1)
            }else{
                return collectionData.items;
            }
        }
        return []
    } 
    const [visible, setVisible] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();  
        let newProduct = {...product, brand, child: collection, parent: category, visible, parent__father: topCategory, up: upNavbar}
            sessionStorage.setItem('product',JSON.stringify(newProduct));
    };  
    
    return (
        <form onSubmit={handleSubmit}> 
        <Text fontSize={'2xl'} className='padding__bottom' >Product Basic Information</Text>
        <Box className='data__view__form'>
            <FormControl id="product__id" isRequired>
                <FormLabel>Product ID</FormLabel>
                <Input
                type="text"
                size='sm'
                name="product__id"
                placeholder='Enter product id'
                value={product.product__id} 
                onChange={handleChange}
                />
            </FormControl>
            <FormControl id="title" isRequired>
                <FormLabel>Title</FormLabel>
                <Input
                type="text"
                size='sm'
                name="title"
                placeholder='Enter product title'
                value={product.title}
                onChange={handleChange}
                />
            </FormControl>  
            <FormControl id="quantity" isRequired>
                <FormLabel>Quantity</FormLabel>
                <Input
                type="number"
                size='sm'
                name="quantity"
                placeholder='Enter total avail quantity'
                value={product.quantity}
                onChange={handleChange}
                />
            </FormControl>
            <FormControl id="total__sell" isRequired>
                <FormLabel>Total Sell</FormLabel>
                <Input
                type="number"
                size='sm'
                name="total__sell"
                placeholder='Enter total sale quantity'
                value={product.total__sell}
                onChange={handleChange}
                />
            </FormControl>
            <FormControl id="current__price" isRequired>
                <FormLabel>Current Price</FormLabel>
                <Input
                type="number"
                size='sm'
                name="current__price"
                placeholder='Enter current price'
                value={product.current__price}
                onChange={handleChange}
                />
            </FormControl>
            <FormControl id="wholesale__price" isRequired>
                <FormLabel>Wholesale Price</FormLabel>
                <Input
                type="number"
                size='sm'
                name="wholesale__price"
                placeholder='Enter wholesale price'
                value={product.wholesale__price}
                onChange={handleChange}
                />
            </FormControl>
            <FormControl id="previous__price" isRequired>
                <FormLabel>Previous Price</FormLabel>
                <Input
                type="number"
                size='sm'
                name="previous__price"
                placeholder='Enter previous price'
                value={product.previous__price}
                onChange={handleChange}
                />
            </FormControl>
            <FormControl id="views" isRequired>
                <FormLabel>Views</FormLabel>
                <Input
                type="number"
                size='sm'
                name="views"
                placeholder='Enter total views'
                value={product.views}
                onChange={handleChange}
                />
            </FormControl> 
            <Box >   
                <Box
                    display={'grid'}  
                >
                    <FormControl>
                        <FormLabel>Visible</FormLabel>
                        <Select
                            value={visible}
                            size='sm'
                            onChange={({target:{value}}) => setVisible(value)}
                            placeholder="Select section"
                        >   
                            <option value={'1'}>Visible</option>
                            <option value={'0'}>Hidden</option>
                        </Select>  
                    </FormControl> 
                </Box>
            </Box>  
            {   
                upNavbarData && upNavbarData?.status__code === 200 && upNavbarData?.items?.length > 0 &&
                <Box>   
                    <Box
                        display={'grid'} 
                        gridTemplateColumns={'auto 150px'} 
                        gridGap={'5px'}  
                    >
                        <FormControl>
                            <FormLabel>Section</FormLabel>
                            <Select
                                value={upNavbar}
                                size='sm'
                                onChange={(e) => handleUpNavbarChange(e.target.value)}
                                placeholder="Select section"
                            > 
                                {
                                    handleFilterUpNavbarData().map((info, index)=> <option key={index} value={info.name}>{info.name}</option>)
                                }
                            </Select>  
                        </FormControl>
                        <FormControl>
                            <FormLabel>Search here</FormLabel>
                            <Input 
                                type='text' 
                                size='sm'
                                placeholder='Search section here'
                                onChange={({target:{value}})=> setUpNavbarSearchText(value)}
                            ></Input>
                        </FormControl>
                    </Box>
                </Box> 
            }
            {   
                topCategoryData && topCategoryData?.status__code === 200 && topCategoryData?.items?.length > 0 &&
                <Box>   
                    <Box
                        display={'grid'} 
                        gridTemplateColumns={'auto 150px'} 
                        gridGap={'5px'}  
                    >
                        <FormControl>
                            <FormLabel>Top Category</FormLabel>
                            <Select
                                value={topCategory}
                                size='sm'
                                onChange={(e) => handleTopCategoryChange(e.target.value)}
                                placeholder="Select section"
                            > 
                                {
                                    handleFilterTopCategoryData().map((info, index)=> <option key={index} value={info.name}>{info.name}</option>)
                                }
                            </Select>  
                        </FormControl>
                        <Box>
                            <FormLabel>Search here</FormLabel>
                            <Input 
                                type='text' 
                                size='sm'
                                placeholder='Search Top Category here'
                                onChange={({target:{value}})=> setTopCategorySearchText(value)}
                            ></Input>
                        </Box>
                    </Box>
                </Box> 
            }
            {   
                categoryData && categoryData?.status__code === 200 && categoryData?.items?.length > 0 &&
                <Box 

                >   
                    <Box
                        display={'grid'} 
                        gridTemplateColumns={'auto 150px'} 
                        gridGap={'5px'}  
                    >
                        <FormControl>
                            <FormLabel>Category</FormLabel>
                            <Select
                                value={category}
                                size='sm'
                                onChange={(e) => handleCategoryChange(e.target.value)}
                                placeholder="Select section"
                            > 
                                {
                                    handleFilterCategoryData().map((info, index)=> <option key={index} value={info.name}>{info.name}</option>)
                                }
                            </Select>  
                        </FormControl>
                        <FormControl>
                            <FormLabel>Search here</FormLabel>
                            <Input 
                                type='text' 
                                size='sm'
                                placeholder='Search Category here'
                                onChange={({target:{value}})=> setCategorySearchText(value)}
                            ></Input>
                        </FormControl>
                    </Box>
                </Box> 
            }
            {   
                collectionData && collectionData?.status__code === 200 && collectionData?.items?.length > 0 &&
                <Box 

                >   
                    <Box
                        display={'grid'} 
                        gridTemplateColumns={'auto 150px'} 
                        gridGap={'5px'}  
                    >
                        <FormControl>
                            <FormLabel>Collection</FormLabel>
                            <Select
                                value={collection}
                                size='sm'
                                onChange={(e) => handleCollectionChange(e.target.value)}
                                placeholder="Select section"
                            > 
                                {
                                    handleFilterCollectionData().map((info, index)=> <option key={index} value={info.name}>{info.name}</option>)
                                }
                            </Select>  
                        </FormControl>
                        <Box>
                            <FormLabel>Search here</FormLabel>
                            <Input 
                                type='text' 
                                size='sm'
                                placeholder='Search Top Category here'
                                onChange={({target:{value}})=> setCollectionSearchText(value)}
                            ></Input>
                        </Box>
                    </Box>
                </Box> 
            } 
            {   
                data && data?.length > 0 &&
                <Box>   
                    <Box
                        display={'grid'} 
                        gridTemplateColumns={'auto 150px'} 
                        gridGap={'5px'}  
                    >
                        <Box>
                            <FormLabel>Brand</FormLabel>
                            <Select
                                value={brand}
                                size='sm'
                                onChange={(e) => handleBrandChange(e.target.value)}
                                placeholder="Select brand"
                            > 
                                {
                                    handleFilterBrandData().map((info, index)=> <option key={index} value={info.brand}>{info.brand}</option>)
                                } 
                            </Select>  
                        </Box>
                        <Box>
                            <FormLabel>Search here</FormLabel>
                            <Input 
                                type='text' 
                                size='sm'
                                placeholder='Search brand here'
                                onChange={({target:{value}})=> setBrandSearchText(value)}
                            ></Input>
                        </Box>
                    </Box>
                </Box> 
            }
        </Box>
        <div className='data__form__submit__button'>
            <Button 
                colorScheme="red"  
                variant={'outline'}
                type='button'
                onClick={handleClearProductCache}
                size='sm'
                mr='5px'
                isDisabled={activeProductClear}
                display={activeProductClear? 'none' : 'inline-flex'}
            >
                clear info
            </Button> 
            <Button 
                colorScheme='yellow' 
                variant={'outline'}
                type="button"
                display={showClear === false ? 'none' : 'inline-flex'}
                size='sm'
                mr='5px'
                onClick={()=>setActiveProductClear(!activeProductClear)}
            >
                Clear
            </Button> 
            <Button 
                colorScheme="green" 
                variant={'outline'}
                type="submit"
                size='sm' 
            >
                Save
            </Button>  
        </div>
    </form> 
    );
};

export default BasicProductInfo;