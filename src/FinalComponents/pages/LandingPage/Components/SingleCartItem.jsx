import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Button, HStack, Icon, Image, Link, Text } from '@chakra-ui/react';
import { debounce } from 'lodash';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { BsStar } from 'react-icons/bs';
import { MdCompare, MdFavoriteBorder } from 'react-icons/md';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { Link as RLink, useNavigate } from 'react-router-dom';
import { server__image__host__url } from '../../../../app/store';
import { useAddSingleCartMutation } from '../../../../features/cart/api';
import { useAddSingleWishlistMutation } from '../../../../features/wishlist/api';

const SingleCartItem = ({infos}) => { 
    const editMode = useSelector((state)=> state.auth.editMode);
    const auth = useSelector((state)=> state.auth.auth);
    const {role} = auth;
    
    const [provideCartInfo, {data, isLoading, isError, isSuccess, error}] = useAddSingleCartMutation();
    let [provideWishlistInfo, {data: wData, isLoading: wIsLoading, isError: wIsError, isSuccess: wIsSuccess, error: wError}] = useAddSingleWishlistMutation()
    let imgSrc = '/not-found.png';
    if(infos?.infos?.images[0] && infos?.infos?.images[0].indexOf('ryan') === -1 ){
        imgSrc = infos?.infos?.images[0];
    }
    
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
            setAddToCartDebounceLoading(()=> false);
            if(error?.status === 500){
                if(error?.data?.message){
                    toast.error(error?.data?.message,{duration: 3000})
                }
            }else{
                toast.error(error?.error,{duration: 3000})
            }
        }
        if(!isLoading && isSuccess && !isError && data?.status__code === 201){
            setAddToCartDebounceLoading(()=> false); 
            toast.success('Successfully added to cart!', {duration: 3000})
        }
    },[data, isLoading, isError, isSuccess, error])

    useEffect(()=>{   
        if(!wIsLoading && !wIsSuccess && wIsError){ 
            setAddToWishlistDebounceLoading(()=> false);
            if(wError?.status === 500){
                if(wError?.data?.message){
                    toast.error(wError?.data?.message,{duration: 3000})
                }
            }else{
                toast.error(wError?.error,{duration: 3000})
            }
        }
        if(!wIsLoading && wIsSuccess && !wIsError && wData?.status__code === 201){
            setAddToWishlistDebounceLoading(()=> false);
            toast.success('Successfully added to wishlist!', {duration: 3000})
        }
    },[wData, wIsSuccess, wIsError, wError, wIsLoading])

    const addToCartDebounceFunction = debounce(handleAddToCart, 1000);
    const [addToCartDebounceLoading, setAddToCartDebounceLoading] = useState(false);
    const handleStartAddToCart = (infos) => {
        setAddToCartDebounceLoading(()=> true);
        addToCartDebounceFunction(infos)
    }

    const addToWishlistDebounceFunction = debounce(handleAddToWishlist, 1000);
    const [addToWishlistDebounceLoading, setAddToWishlistDebounceLoading] = useState(false);
    const handleStartAddToWishlist = (infos) => {
        setAddToWishlistDebounceLoading(()=> true);
        addToWishlistDebounceFunction(infos)
    }
    return ( 
        <Box className='card__item'>
            <Image src={server__image__host__url+imgSrc} alt={infos.infos.title}/>
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
                editMode && auth && role && role < 7? 
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
                :
                <HStack className='button__section'>
                    <Button 
                        padding={'0'}
                        onClick={()=> handleStartAddToCart(infos)}
                        isLoading={isLoading || addToCartDebounceLoading}
                    >
                        <Icon as={RiShoppingCart2Line}/>
                    </Button> 
                    <Button 
                        padding={'0'}
                        isLoading={wIsLoading || addToWishlistDebounceLoading}
                        onClick={()=> handleStartAddToWishlist(infos)}
                    >
                        <Icon as={MdFavoriteBorder}/>
                    </Button> 
                    <Button 
                        padding={'0'}  
                        isDisabled={true}
                    >
                        <Icon as={MdCompare}/>
                    </Button> 
                </HStack>    
        }
        </Box> 
    );
};

export { SingleCartItem };

