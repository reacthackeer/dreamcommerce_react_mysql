import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Button, HStack, Icon, Image, Link, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { BsStar } from 'react-icons/bs';
import { MdCompare, MdFavoriteBorder } from 'react-icons/md';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { Link as RLink, useNavigate } from 'react-router-dom';
import { server__image__host__url } from '../../../../app/store';
import { useAddSingleCartMutation } from '../../../../features/cart/api';
import { useAddSingleWishlistMutation } from '../../../../features/wishlist/api';

const SingleCartItem = ({infos}) => { 
    const [provideCartInfo, {data, isLoading, isError, isSuccess, error}] = useAddSingleCartMutation();
    let [provideWishlistInfo, {data: wData, isLoading: wIsLoading, isError: wIsError, isSuccess: wIsSuccess, error: wError}] = useAddSingleWishlistMutation()
    let imgSrc = '/not-found.png';
    if(infos?.infos?.images[0] && infos?.infos?.images[0].indexOf('ryan') === -1 ){
        imgSrc = infos?.infos?.images[0];
    }
    
    const editMode = true;
    const navigate = useNavigate();
    const handleAddToCart = (infos) => {
        let user__id = localStorage.getItem('user__id');
        let product__id = infos?.ID;
        let quantity = 1; 
        provideCartInfo({user__id, product__id, quantity});
    }

    const handleAddToWishlist = (infos) => {
        let user__id = localStorage.getItem('user__id');
        let product__id = infos?.ID;
        let quantity = 1; 
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
        <Box className='card__item'>
            <Image src={server__image__host__url+imgSrc}/>
            <Link 
                as={RLink} 
                to={`/${infos?.visible__url}/${infos.ID}`}
                fontSize={'sm'}
                textAlign={'center'}
                display={'block'}
                py={'2'}
            >
                {infos?.infos?.title.slice(0,40)+'...'}
            </Link> 
            <HStack display='flex' justify={'center'}>
                <Icon color={'tomato'} as={BsStar}/>
                <Icon color={'tomato'} as={BsStar}/>
                <Icon color={'tomato'} as={BsStar}/>
                <Icon color={'tomato'} as={BsStar}/>
                <Icon color={'tomato'} as={BsStar}/>
            </HStack>
            <HStack className='price__section'> 
                <Text 
                    color={'red'} 
                    textDecoration={'line-through'}
                    fontSize={'small'}
                >{infos?.infos?.previous__price} TK</Text>
                <Text fontSize={'small'}>{infos?.infos?.current__price} TK</Text>
            </HStack>
            {
                !editMode ? 

            <HStack className='button__section'>
                <Button 
                    padding={'0'}
                    onClick={()=> handleAddToCart(infos)}
                    isLoading={isLoading}
                >
                    <Icon as={RiShoppingCart2Line}/>
                </Button> 
                <Button 
                    padding={'0'}
                    onClick={()=> handleAddToWishlist(infos)}
                >
                    <Icon as={MdFavoriteBorder}/>
                </Button> 
                <Button 
                    padding={'0'}  
                >
                    <Icon as={MdCompare}/>
                </Button> 
            </HStack>             
            : 
            <HStack className='button__section'>
                <Button 
                    padding={'0'} 
                    isLoading={isLoading}
                    onClick={()=> navigate(`/admin/add/similar-product/${infos.ID}`)}
                > 
                    <AddIcon/>
                </Button> 
                <Button 
                    padding={'0'} 
                    onClick={()=> navigate(`/admin/edit/offer/${infos.ID}`)}
                >
                    <DeleteIcon/>
                </Button> 
                <Button 
                    padding={'0'} 
                    onClick={()=> navigate(`/admin/edit/product/${infos.ID}`)}
                > 
                    <EditIcon/>
                </Button> 
            </HStack> 
        }
        </Box> 
    );
};

export { SingleCartItem };

