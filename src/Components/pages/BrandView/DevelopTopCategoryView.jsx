import { Button } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { clearFilterProduct } from '../../../features/product/productSlice';
import { useGetAllTopCategoryProductQuery } from '../../../features/topCategory/topCategoryApi';
import { LoadingPage, NotFoundPage } from '../../skleton/Loading';
import DevelopViewSkeleton from '../developViewSkeleton';

const DevelopTopCategoryView = () => {
    const params = useParams();  
    const searchParams = useSearchParams()[0];
    let page = searchParams.get('page') ? Number(searchParams.get('page')) : 1 
    let limit = searchParams.get('limit') ? Number(searchParams.get('limit')) : 45
    let {topCategory} = params;   
    let {data, isLoading, isError, isSuccess, error} = useGetAllTopCategoryProductQuery({father: topCategory, page, limit});
    
    const viewProductIdes = useSelector((state)=> state.productFilter.ides);
    const viewProductPrice = useSelector((state)=> state.productFilter.price);
    const searchString = useSelector((state)=> state.productFilter.searchString);
    
    const navigate = useNavigate();
    // decide what to render
    let content = null;
    if(isLoading && !isError && !isSuccess){
        content = <LoadingPage/>
    }
    if(!isLoading && isError && !isSuccess){
        content = <NotFoundPage message={error?.message}/>
    }
    let linksArray = [
        {name: 'HOME', link: '/'},
        {name: topCategory.toUpperCase(), link: `/p/${topCategory}`}, 
    ] 

    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(clearFilterProduct())
    },[data, isLoading, isError, isSuccess, error, dispatch])

                
    const handleFilterResetProductByCategory = (products) => {
        if(viewProductIdes.length === 0){
            return products;
        }else{
            return products.filter((info)=> viewProductIdes.indexOf(info.product__id) !== -1);
        }
    }

    const handleSearchProductBySearchString = (products) => {
        if(!searchString){
            return products;
        }else{
            return products.filter((info)=> info.infos.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
        }
    }

    const handleFilterResetProductByPrice = (products) => {

        let {start, end} = viewProductPrice
        if(start === 0 && end === 0){
            return products;
        }else{ 
            return products.filter((info)=> info.infos?.current__price >= start && info.infos?.current__price <= end)
        }
    }
    
    useEffect(()=>{
        let mainView = document.querySelector('.mobile__view__container');
        if(mainView){
            mainView.scrollTop = 0;
        } 
    },[data, isLoading, isError, isSuccess, error])

    if(!isLoading && !isError && isSuccess && data?.products?.length > 0){
        let resetProduct = handleFilterResetProductByCategory([...data?.products]);
        resetProduct = handleFilterResetProductByPrice([...resetProduct]);
        resetProduct = handleSearchProductBySearchString([...resetProduct]);
        content = <DevelopViewSkeleton linksArray={linksArray}  lowPrice={data?.lowPrice || 0} highPrice={data?.highPrice || 0} page={page} limit={limit} filterNavbar={data?.filter__navbar} products={resetProduct} totalPage={data?.total__page} totalProducts={data?.total__products} startFrom={data?.current__limit[0]} startTo={data?.current__limit[1]}/>
    }

    if(!isLoading && !isError && isSuccess && !data){
        content = <React.Fragment>
        <div className='add__product__main__container'>
            <h1>No product found!</h1>
            <h1>But you can try different route</h1>
            <Button
                onClick={()=> navigate('/')}
            >
                Go Back Home
            </Button>
        </div>
    </React.Fragment>
    }
    return content;
}



export default DevelopTopCategoryView;