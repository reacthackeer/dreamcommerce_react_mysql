import { Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useGetAllCollectionSimilarProductQuery } from '../../../../../features/collection/collectionApi';
import { SingleCartItem } from '../../SingleBrandProductsViews/ChildComponents/SingleCartItem';

const SimilarProductArea = ({parent, child, parentFather, product__id}) => {
    let {data, isLoading, isError, isSuccess} = useGetAllCollectionSimilarProductQuery({father: parentFather, parent: parent, product__id, child: child, page: 1, limit: 40 });
    let products = [];
    if(!isLoading && !isError && isSuccess && data && data?.products?.length > 0){
        products = [...data?.products];
        products = products.sort(()=> Math.random() - 0.5).slice(0,16);
    } 
    return (
        <React.Fragment>
            {
                products && products?.length > 0 && <React.Fragment>
                <div className='related__product__details__container padding__top padding__bottom'>
                    <div className='margin__bottom__30 left__right__free__middle title__history__color'>
                        <Text fontSize={'2xl'} px='4' py='1'>Similar Product</Text>
                        <Link to={`/p/${parentFather}/${parent}/${child}`} className='padding__right__10'>View More</Link>
                    </div>
                <div className='related_product__container large__cart'>
                    {
                        products.slice(0,4).map((info, index)=> <div className='single__related__product__container' key={index}><SingleCartItem infos={info}/></div>)
                    } 
                </div>
                <div className='related_product__container small__cart'>
                    {
                        products.slice(0,8).map((info, index)=> <div className='single__related__product__container' key={index}><SingleCartItem infos={info}/></div>)
                    } 
                </div>
            </div>
                </React.Fragment>
            }
        </React.Fragment>
    );
};

export default SimilarProductArea;