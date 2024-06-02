 
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
import { useNavigate } from 'react-router-dom';
import { useGetAllBrandQuery, useGetAllChildNavbarQuery, useGetAllParentFatherNavbarQuery, useGetAllParentNavbarQuery, useGetAllUpNavbarQuery } from '../../../features/brand/brandApi';
import '../../../styles/addProduct.scss';

const BasicProductInfo = () => {

    const navigate = useNavigate();
    let {data} = useGetAllBrandQuery();
    let { data : upNavbarData } = useGetAllUpNavbarQuery();
    
    const [product, setProduct] = useState(JSON.parse(localStorage.getItem('product')) || {});
    const [brand, setBrand] = useState('');
    const [brandSearchText, setBrandSearchText] = useState('');
    const [upNavbar, setUpNavbar] = useState('');
    const [upNavbarSearchText, setUpNavbarSearchText] = useState('');


    // const [saveChange, setSaveChange] = useState(false);
    
  
    const handleChange = (event) => {
    //   setSaveChange(true);
      const { name, value } = event.target;
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: value,
      }));
    };
    
    const [activeProductClear, setActiveProductClear] = useState(true);
    const handleClearProductCache = () => {
      localStorage.removeItem('product')
      setProduct({}); 
      setActiveProductClear(true);
      document.querySelectorAll('input').forEach((info)=>{
        info.value = ''
      })
    } 

    const handleBrandChange = (value) => {
        setBrand(value);
    }
    
    const handleUpNavbarChange = (value) => {
        setUpNavbar(value);
    }

    

    const handleFilterBrandData = () => {
        if(brandSearchText){
            return data.filter((info)=> info.brand.toLowerCase().indexOf(brandSearchText.toLowerCase()) !== -1)
        }
        return data;
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
    
    let {data: topCategoryData} = useGetAllParentFatherNavbarQuery(upNavbar);
    const [topCategory, setTopCategory] = useState('');
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
    
    let {data: categoryData} = useGetAllParentNavbarQuery({parent__father: topCategory, up: upNavbar});
    const [category, setCategory] = useState('');
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

    let {data: collectionData} = useGetAllChildNavbarQuery({parent: category, up: upNavbar});
    const [collection, setCollection] = useState('');
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
            localStorage.setItem('product',JSON.stringify(newProduct));
            console.log(newProduct);
    };

    return (
        <div>
            <div className='register__button padding__top padding__bottom'>
                <Button 
                colorScheme="red"  
                variant={'outline'}
                type='button'
                onClick={()=> navigate('/add/section')}
                size='sm'
                mr='30px' 
                >
                    add section
                </Button> 
                <Button 
                colorScheme="red"  
                variant={'outline'}
                type='button'
                onClick={()=> navigate('/add/top-category')}
                size='sm'
                mr='30px' 
                >
                    add top category
                </Button> 
                <Button 
                colorScheme="red"  
                variant={'outline'}
                type='button'
                onClick={()=> navigate('/add/category')}
                size='sm'
                mr='30px' 
                >
                    add category
                </Button> 
                <Button 
                colorScheme="red"  
                variant={'outline'}
                type='button'
                onClick={()=> navigate('/add/collection')}
                size='sm'
                mr='30px' 
                >
                    add collection
                </Button> 
                <Button 
                colorScheme="red"  
                variant={'outline'}
                type='button'
                onClick={()=> navigate('/add/brand')}
                size='sm'
                mr='30px' 
                >
                    add brand
                </Button>  
            </div>
            <Box>
            <Text fontSize={'2xl'} paddingBottom={'30px'}>Product Basic Information</Text>
            <form onSubmit={handleSubmit} className='form__item__view__main__container'> 

                <FormControl id="product__id" isRequired>
                    <FormLabel>Product ID</FormLabel>
                    <Input
                    type="text"
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
                        <Box>
                            <FormLabel>Visible</FormLabel>
                            <Select
                                value={visible}
                                onChange={({target:{value}}) => setVisible(value)}
                                placeholder="Select section"
                            >   
                                <option value={'1'}>Visible</option>
                                <option value={'0'}>Hidden</option>
                            </Select>  
                        </Box> 
                    </Box>
                </Box>  
                {   
                    upNavbarData && upNavbarData?.status__code === 200 && upNavbarData?.items?.length > 0 &&
                    <Box 

                    >   
                        <Box
                            display={'grid'} 
                            gridTemplateColumns={'auto 200px'} 
                            gridGap={'10px'}  
                        >
                            <Box>
                                <FormLabel>Section</FormLabel>
                                <Select
                                    value={upNavbar}
                                    onChange={(e) => handleUpNavbarChange(e.target.value)}
                                    placeholder="Select section"
                                > 
                                    {
                                        handleFilterUpNavbarData().map((info, index)=> <option key={index} value={info.name}>{info.name}</option>)
                                    }
                                </Select>  
                            </Box>
                            <Box>
                                <FormLabel>Search here</FormLabel>
                                <Input 
                                    type='text' 
                                    placeholder='Search section here'
                                    onChange={({target:{value}})=> setUpNavbarSearchText(value)}
                                ></Input>
                            </Box>
                        </Box>
                    </Box> 
                }
                {   
                    topCategoryData && topCategoryData?.status__code === 200 && topCategoryData?.items?.length > 0 &&
                    <Box 

                    >   
                        <Box
                            display={'grid'} 
                            gridTemplateColumns={'auto 200px'} 
                            gridGap={'10px'}  
                        >
                            <Box>
                                <FormLabel>Top Category</FormLabel>
                                <Select
                                    value={topCategory}
                                    onChange={(e) => handleTopCategoryChange(e.target.value)}
                                    placeholder="Select section"
                                > 
                                    {
                                        handleFilterTopCategoryData().map((info, index)=> <option key={index} value={info.name}>{info.name}</option>)
                                    }
                                </Select>  
                            </Box>
                            <Box>
                                <FormLabel>Search here</FormLabel>
                                <Input 
                                    type='text' 
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
                            gridTemplateColumns={'auto 200px'} 
                            gridGap={'10px'}  
                        >
                            <Box>
                                <FormLabel>Category</FormLabel>
                                <Select
                                    value={category}
                                    onChange={(e) => handleCategoryChange(e.target.value)}
                                    placeholder="Select section"
                                > 
                                    {
                                        handleFilterCategoryData().map((info, index)=> <option key={index} value={info.name}>{info.name}</option>)
                                    }
                                </Select>  
                            </Box>
                            <Box>
                                <FormLabel>Search here</FormLabel>
                                <Input 
                                    type='text' 
                                    placeholder='Search Top Category here'
                                    onChange={({target:{value}})=> setCategorySearchText(value)}
                                ></Input>
                            </Box>
                        </Box>
                    </Box> 
                }
                {   
                    collectionData && collectionData?.status__code === 200 && collectionData?.items?.length > 0 &&
                    <Box 

                    >   
                        <Box
                            display={'grid'} 
                            gridTemplateColumns={'auto 200px'} 
                            gridGap={'10px'}  
                        >
                            <Box>
                                <FormLabel>Collection</FormLabel>
                                <Select
                                    value={collection}
                                    onChange={(e) => handleCollectionChange(e.target.value)}
                                    placeholder="Select section"
                                > 
                                    {
                                        handleFilterCollectionData().map((info, index)=> <option key={index} value={info.name}>{info.name}</option>)
                                    }
                                </Select>  
                            </Box>
                            <Box>
                                <FormLabel>Search here</FormLabel>
                                <Input 
                                    type='text' 
                                    placeholder='Search Top Category here'
                                    onChange={({target:{value}})=> setCollectionSearchText(value)}
                                ></Input>
                            </Box>
                        </Box>
                    </Box> 
                } 
                {   
                    data && data?.length > 0 &&
                    <Box 

                    >   
                        <Box
                            display={'grid'} 
                            gridTemplateColumns={'auto 200px'} 
                            gridGap={'10px'}  
                        >
                            <Box>
                                <FormLabel>Brand</FormLabel>
                                <Select
                                    value={brand}
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
                                    placeholder='Search brand here'
                                    onChange={({target:{value}})=> setBrandSearchText(value)}
                                ></Input>
                            </Box>
                        </Box>
                    </Box> 
                }

                <div className='register__button'>
                    <Button 
                    colorScheme="red"  
                    variant={'outline'}
                    type='button'
                    onClick={handleClearProductCache}
                    size='sm'
                    mr='30px'
                    isDisabled={activeProductClear}
                    >
                        clear info
                    </Button> 
                    <Button 
                    colorScheme='yellow' 
                    variant={'outline'}
                    type="button"
                    size='sm'
                    mr='30px'
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
            </Box> 
        </div>
    );
};

export default BasicProductInfo;