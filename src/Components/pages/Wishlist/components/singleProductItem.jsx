import { Button, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { IoIosRemove } from 'react-icons/io';
import { RiAddFill, RiDeleteBin6Line, RiShoppingCart2Line } from 'react-icons/ri';
import { server__image__host__url } from '../../../../app/store';
import { useDeleteSingleWishlistProductMutation, useMoveToCartMutation, useUpdateSingleWishlistProductMutation } from '../../../../features/wishlist/api';
const SingleCartProductItem = ({infos, no}) => {

    let [provideDeletedProductID, {isLoading: dL}] = useDeleteSingleWishlistProductMutation();
    let [provideUpdateInfo, {isLoading}] = useUpdateSingleWishlistProductMutation();
    const [provideWishlistId, {isLoading: mIsLoading}] = useMoveToCartMutation();

    let imgSrc = '/not-found.png';
    if(infos?.infos?.images[0] && infos?.infos?.images[0].indexOf('ryan') === -1 ){
        imgSrc = infos?.infos?.images[0];
    }
    
    const handleIncreaseQuantity = () => {
        let {ID, quantity} = infos;
        let user__id = localStorage?.getItem('user__id');
        let productInfo = {product__id: ID, quantity: quantity+1, user__id};
        if(productInfo && productInfo.product__id && productInfo.quantity && productInfo.user__id){
            provideUpdateInfo(productInfo);
        }
    } 

    const handleDecreaseQuantity = () => {
        let {ID, quantity} = infos;
        let user__id = localStorage?.getItem('user__id');
        let productInfo = {product__id: ID, quantity: quantity - 1, user__id};
        if(productInfo && productInfo.product__id && productInfo.quantity && productInfo.user__id && productInfo.quantity > 0){
            provideUpdateInfo(productInfo);
        }
    } 

    const handleDeleteSingleProduct = () => {
        let {CID} = infos;
        if(CID){
            provideDeletedProductID(CID);
        }
    }

    const handleTransferToCart = () => {
        let {CID} = infos;
        provideWishlistId({wishlistId: CID})
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
                            onClick={handleDecreaseQuantity}
                        > 
                            {<IoIosRemove/>}
                        </Button>
                        <Text color={'black'} width={'30px'}>{`${infos?.quantity}`.length === 1 ? '0'+infos?.quantity: infos?.quantity}</Text>
                        <Button
                            variant={'outline'}
                            border={'none'}
                            borderRadius={'none'}
                            padding={'0'}
                            onClick={handleIncreaseQuantity}
                            isLoading={isLoading}
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
                            isLoading={dL}
                            onClick={handleDeleteSingleProduct}
                        > 
                            <RiDeleteBin6Line/>
                        </Button> 
                        <Button
                            variant={'outline'}
                            border={'none'}
                            borderRadius={'none'}
                            padding={'0'}
                            onClick={handleTransferToCart}
                            isLoading={mIsLoading}
                        > 
                            <RiShoppingCart2Line/>
                        </Button>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default SingleCartProductItem;