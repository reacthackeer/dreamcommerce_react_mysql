 
import { Box, Button, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineHeart, AiOutlineMinus, AiOutlinePlus, AiOutlineStar } from 'react-icons/ai';
import { GrCart } from 'react-icons/gr';
import { useAddSingleCartMutation } from '../../../../features/cart/api';
import { useAddSingleWishlistMutation } from '../../../../features/wishlist/api';
const DetailsArea = ({product}) => {
    const [quantity, setQuantity] = useState(1);


    const [provideCartInfo, {data, isLoading, isError, isSuccess, error}] = useAddSingleCartMutation();
    let [provideWishlistInfo, {data: wData, isLoading: wIsLoading, isError: wIsError, isSuccess: wIsSuccess, error: wError}] = useAddSingleWishlistMutation()
    
    const handleAddToCart = (infos) => {
        let user__id = localStorage.getItem('user__id');
        let product__id = infos?.ID;
        
        provideCartInfo({user__id, product__id, quantity});
    }

    const handleAddToWishlist = (infos) => {
        let user__id = localStorage.getItem('user__id');
        let product__id = infos?.ID; 
        provideWishlistInfo({user__id, product__id, quantity});
    }
    
    useEffect(()=>{   
        if(!isLoading && !isSuccess && isError){ 
            if(error?.status === 500){
                if(error?.data?.message){
                    toast.error(error?.data?.message,{duration: 3000})
                }
            }else{
                toast.error(error?.error,{duration: 3000})
            }
        }
        if(!isLoading && isSuccess && !isError && data?.status__code === 201){

            toast.success('Successfully added to cart!', {duration: 3000})
        }
    },[data, isLoading, isError, isSuccess, error])

    useEffect(()=>{   
        if(!wIsLoading && !wIsSuccess && wIsError){ 
            if(wError?.status === 500){
                if(wError?.data?.message){
                    toast.error(wError?.data?.message,{duration: 3000})
                }
            }else{
                toast.error(wError?.error,{duration: 3000})
            }
        }
        if(!wIsLoading && wIsSuccess && !wIsError && wData?.status__code === 201){

            toast.success('Successfully added to wishlist!', {duration: 3000})
        }
    },[wData, wIsSuccess, wIsError, wError, wIsLoading])

    return (
        <div>
            <Box className='single__product__top__link__container t_n'> 
                <Text fontSize={'25px'}>
                    {product?.infos?.title}
                </Text>
            </Box>
            <Box className='single__product__top__link__container t_n'>
                <Button
                    leftIcon={<AiOutlineStar/>}
                    variant={'outline'}
                >
                    0 Reviews
                </Button>
            </Box>
            <Box className='single__product__top__link__container t_n' display={'flex'} alignItems={'center'}> 
                <Text color={'tomato'} fontSize={'20px'} textDecoration={'line-through'}> 
                    {product?.infos?.previous__price} TK
                </Text>
                <Text ml='4' fontSize={'25px'}> 
                    {product?.infos?.current__price} TK
                </Text>
            </Box>
            <Box className='single__product__top__link__container t_n'>
                <Text fontSize={'18px'} fontWeight={'semibold'}>
                    Quiz Overview
                </Text>
                <Box pl='4'>
                    {
                        product?.infos?.overviews.map((info, index)=>{
                            return <Text fontSize={'medium'} key={index}>{info}</Text>
                        })
                    }
                </Box>
            </Box>  
            <Box 
                className='single__product__top__link__container t_n' 
                display={'grid'}
                gridTemplateColumns={'auto auto auto'}
                justifyContent={'start'}
                gridGap={'10px'}
            >
                <Box 
                    display={'grid'} 
                    gridTemplateColumns={'auto auto auto'} 
                    width={'fit-content'} 
                    alignItems={'center'}
                >
                    <Button 
                        onClick={()=> setQuantity((prevQ)=> prevQ+1)}
                    >
                        <AiOutlinePlus/>
                    </Button>
                    <Text py='1' textAlign={'center'} width={'40px'}>{quantity}</Text>
                    <Button
                        onClick={()=> setQuantity((prevQ)=> prevQ - 1)}
                        isDisabled={quantity === 1 || quantity === 0}
                    >
                        <AiOutlineMinus/>
                    </Button>
                </Box>
                <Button
                    isLoading={wIsLoading}
                    onClick={()=> handleAddToWishlist(product)}
                >
                    <AiOutlineHeart/>
                </Button>
                <Button
                    isLoading={isLoading}
                    onClick={()=> handleAddToCart(product)} 
                >
                    <GrCart/>
                </Button>
            </Box>
            <Image src='/ads.png' alt='product ads'></Image> 
        </div>
    );
};

export default DetailsArea;