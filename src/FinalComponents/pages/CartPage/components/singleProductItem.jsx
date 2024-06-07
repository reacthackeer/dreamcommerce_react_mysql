import { Button, Image, Text } from '@chakra-ui/react';
import { debounce } from 'lodash';
import React, { useState } from 'react';
import { IoIosRemove } from 'react-icons/io';
import { MdFavoriteBorder } from 'react-icons/md';
import { RiAddFill, RiDeleteBin6Line } from 'react-icons/ri';
import { server__image__host__url } from '../../../../app/store';
import { useDeleteSingleCartProductMutation, useMoveToWishlistMutation, useUpdateSingleCartProductMutation } from '../../../../features/cart/api';
const SingleCartProductItem = ({infos, no}) => { 
    let [provideDeletedProductID, {isLoading: dL}] = useDeleteSingleCartProductMutation();
    let [provideUpdateInfo, {isLoading}] = useUpdateSingleCartProductMutation();
    const [provideCartId, {isLoading: mIsLoading}] = useMoveToWishlistMutation();

    let imgSrc = '/not-found.png';
    if(infos?.infos?.images[0] && infos?.infos?.images[0].indexOf('ryan') === -1 ){
        imgSrc = infos?.infos?.images[0];
    }
    // enter cart Item
    const handleIncreaseQuantity = () => {
        let {ID, quantity} = infos;
        let user__id = localStorage?.getItem('user__id');
        let productInfo = {product__id: ID, quantity: quantity+1, user__id};
        if(productInfo && productInfo.product__id && productInfo.quantity && productInfo.user__id){
            provideUpdateInfo(productInfo);
        }
        setIncreaseQuantityDebounceLoading(()=> false);
    } 
    
    const handleDecreaseQuantity = () => {
        let {ID, quantity} = infos;
        let user__id = localStorage?.getItem('user__id');
        let productInfo = {product__id: ID, quantity: quantity - 1, user__id};
        if(productInfo && productInfo.product__id && productInfo.quantity && productInfo.user__id && productInfo.quantity > 0){
            provideUpdateInfo(productInfo);
        }
        setDecreaseQuantityDebounceLoading(()=> true);
    } 

    const handleDeleteSingleProduct = () => {
        let {CID} = infos;
        if(CID){
            provideDeletedProductID(CID);
        }
        setDeleteDebounceLoading(()=> false);
    }

    const handleTransferToCart = () => {
        let {CID} = infos;
        provideCartId({cartId: CID})
        setTransferDebounceLoading(()=> false);
    }
    
    const deleteCartItemDebounceFunction = debounce(handleDeleteSingleProduct, 1000);
    const [deleteDebounceLoading, setDeleteDebounceLoading] = useState(false);
    const handleStartDeleteSingleProduct = () => {
        setDeleteDebounceLoading(()=> true);
        deleteCartItemDebounceFunction();
    }
    const transferCartItemDebounceFunction = debounce(handleTransferToCart, 1000);
    const [transferDebounceLoading, setTransferDebounceLoading] = useState(false);
    const handleStartTransferToCart = () => {
        setTransferDebounceLoading(()=> true);
        transferCartItemDebounceFunction();
    }

    const handleIQDebounceFunction = debounce(handleIncreaseQuantity, 1000);
    const [increaseQuantityDebounceLoading, setIncreaseQuantityDebounceLoading] = useState(false);
    const handleStartIncreaseQuantity = () => {
        setIncreaseQuantityDebounceLoading(()=> true);
        handleIQDebounceFunction();
    }
    
    const handleDQDebounceFunction = debounce(handleDecreaseQuantity, 1000);
    const [decreaseQuantityDebounceLoading, setDecreaseQuantityDebounceLoading] = useState(false);
    const handleStartDecreaseQuantity = () => {
        setDecreaseQuantityDebounceLoading(()=> true);
        handleDQDebounceFunction();
    }
    return (  
        <div className='cart__padding__wrapper'>
            <div className='single__final__cart__item'>
                <div className='table__body__column'>
                    <Text>{`${no}`.length === 1 ?'0'+no : no}</Text>
                </div>
                <div className='table__body__column'>
                    <Image src={server__image__host__url+imgSrc} alt='product image'/>
                </div>
                <div className='table__body__column title__box'> 
                    <Text>{infos?.infos?.title}</Text>
                </div>

                <div className='table__body__column'>
                    <Text>{infos?.infos?.current__price} TK</Text> 
                </div>
                <div className='table__body__column'>
                    <div className='increment__group__buttons'>
                        <Button
                            variant={'outline'}
                            border={'none'}
                            borderRadius={'none'}
                            padding={'0'}
                            isDisabled={infos?.quantity - 1 === 0}
                            isLoading={decreaseQuantityDebounceLoading || isLoading}
                            onClick={handleStartDecreaseQuantity}
                        > 
                            {<IoIosRemove/>}
                        </Button>
                        <Text color={'black'} width={'30px'}>{`${infos?.quantity}`.length === 1 ? '0'+infos?.quantity: infos?.quantity}</Text>
                        <Button
                            variant={'outline'}
                            border={'none'}
                            borderRadius={'none'}
                            padding={'0'}
                            onClick={handleStartIncreaseQuantity}
                            isLoading={isLoading || increaseQuantityDebounceLoading}
                        > 
                            <RiAddFill/>
                        </Button>
                    </div>
                </div>
                <div className='table__body__column'>
                    <Text>{infos?.infos?.current__price * infos?.quantity} TK</Text> 
                </div>
                <div className='table__body__column'>
                    <div className='action__group__buttons'>
                        <Button
                            variant={'outline'}
                            className='red'
                            border={'none'}
                            borderRadius={'none'}
                            padding={'0'}
                            isLoading={dL || deleteDebounceLoading}
                            onClick={handleStartDeleteSingleProduct}
                        > 
                            <RiDeleteBin6Line/>
                        </Button> 
                        <Button
                            variant={'outline'}
                            border={'none'}
                            borderRadius={'none'}
                            padding={'0'}
                            onClick={handleStartTransferToCart}
                            isLoading={mIsLoading || transferDebounceLoading}
                        > 
                            <MdFavoriteBorder/>
                        </Button>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default SingleCartProductItem;