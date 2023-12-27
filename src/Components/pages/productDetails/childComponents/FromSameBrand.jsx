import { Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useGetSingleBrandSimilarProductQuery } from '../../../../features/brand/brandApi';
import { SingleCartItem } from '../../Home/Components/developSingleCart';

const FromSameBrand = ({brand, product__id}) => {
    
    let {data, isLoading, isError, isSuccess} = useGetSingleBrandSimilarProductQuery({brand : brand, product__id, page: 1, limit: 50});
    let products = [];
    if(!isLoading && !isError && isSuccess && data && data?.products?.length > 0){
        products = [...data?.products];
        products = products.sort(()=> Math.random() - 0.5).slice(0,16);
    } 

    return (
        <React.Fragment>
            {
                products && products?.length > 0 && <React.Fragment>
                <div className='related__product__details__container padding__bottom'>
                    <div className='margin__bottom__30 left__right__free__middle title__history__color'>
                        <Text fontSize={'2xl'} px='4' py='1'>From {brand} Brand</Text>
                        <Link to={`/brands/${brand}`} className='padding__right__10'>View More</Link>
                    </div>
                    <div className='related_product__container grid__related__product__container'>
                        {
                            products.slice(0, 14).map((info, index)=> <div className='single__related__product__container' key={index}><SingleCartItem infos={info}/></div>)
                        }
                    </div>
                </div>
            </React.Fragment>
            }
        </React.Fragment>
    );
};

export default FromSameBrand;