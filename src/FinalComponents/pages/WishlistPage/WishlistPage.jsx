import { Box, Button, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { AiOutlinePrinter } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useGetAllSingleUserWishlistProductQuery } from '../../../features/wishlist/api';
import useModeratorCheck from '../../../hooks/moderatorCheck';
import { LoadingPage, NotFoundPage } from '../LandingPage/Components/Loading';
import TableHead from './components/TableHead';
import ProductTable from './components/productTable';
const MyWishlistPage = () => {
    const checkIsLogin = useModeratorCheck({graterThanRole: 10});
    const navigate = useNavigate();
    const [generatingPdf, setGeneratingPdf] = useState(false);
    let [userId] = useState(localStorage?.getItem('user__id'));
    let {data, isLoading, isError, error, isSuccess} = useGetAllSingleUserWishlistProductQuery(userId);
    
    // decide what to render
    let content = null;
    if(isLoading && !isError && !isSuccess){
        content = <LoadingPage/>
    }
    if(!isLoading && isError && !isSuccess){
        content = <NotFoundPage message={error?.message}/>
    } 

    
    const handlePrintPdf = () => {
        if(checkIsLogin){
            setGeneratingPdf(true);
            let user__id = localStorage.getItem('user__id') || ''
            axios.post(`http://localhost:10000/api/v1/wishlist/get-all/product-as-a-pdf-format/${user__id}`,{}, {responseType: 'blob'}).then((res)=>{
                if(res.status === 200){
                    
                // Create a temporary download URL
                const downloadUrl = URL.createObjectURL(new Blob([res.data]));
    
                // Create a link element and click it programmatically to start the download
                const link = document.createElement('a');
                link.href = downloadUrl;
                let time = new Date().getTime();
                let fileName = `${user__id}_cart_${time}.pdf`
                link.download = fileName; // Provide the desired filename for the download
                link.click();
    
                // Clean up the temporary download URL
                URL.revokeObjectURL(downloadUrl);
                setGeneratingPdf(false);
                }
            }).catch(err => {
                setGeneratingPdf(false); 
            })
        }else{
            navigate('/login');
        }
    }   
    
    if(!isLoading && !isError && isSuccess){
        if(data?.status__code === 200){
            
            content =  <React.Fragment>
            <div className='main__category__product__view__upper__container cart__page__view__upper__container'> 
                <div className='scroll__wrapping__container'>
                    <div className='cart__view__page__upper__container'>
                        <TableHead/> 
                        <ProductTable products={data?.products}/>
                    </div>
                </div>
            </div>
            <div className='main__category__product__view__upper__container button__print__and__action__container'>
                <div className='print__and__action__container'>
                    <Box className='apply__padding__margin'>
                        <Button 
                            onClick={handlePrintPdf}
                            isLoading={generatingPdf}
                        >
                            {<AiOutlinePrinter/>}
                        </Button> 
                    </Box>
                    <Box className='action__items__container__coupon'>
                        <Button
                            variant={'unstyled'}
                            color={'red.600'}
                        >
                            Clear Wishlist
                        </Button>
                        <Button>
                            Add to Cart All 
                        </Button>
                    </Box> 
                </div> 
            </div>
        </React.Fragment>
        }else{
            content = <React.Fragment>
                <div className='add__product__main__container'>
                    <h1>You have not added any products to the wishlist</h1>
                    <h1>But you can add</h1>
                    <Button 
                        onClick={()=> navigate('/')}
                    >
                        Add Product
                    </Button>
                </div>
            </React.Fragment>
        }
    }

    return (
        <React.Fragment>
            <div className='main__category__product__view__upper__container' style={{paddingTop:'30px',paddingBottom:'30px'}}>
                <Text>Home / wishlist</Text>
                <Text fontSize={'40px'} fontWeight={'bold'} letterSpacing={'.5px'} textAlign={'center'} paddingY={'30px'}>Wishlist</Text>
            </div>
            {content}
        </React.Fragment>
    );
};

export default MyWishlistPage;