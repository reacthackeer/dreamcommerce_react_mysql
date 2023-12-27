import { Box, Button, Input, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlinePrinter } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useGetAllSingleUserCartProductQuery, usePrintPdfMutation } from '../../features/cart/api';
import useLoginCheck from '../../hooks/loginCheck';
import TableHead from '../pages/Cart/components/TableHead';
import ProductTable from '../pages/Cart/components/productTable';
import CalculateTable from '../pages/Wishlist/components/CalculateTable';
import { LoadingPage, NotFoundPage } from './Loading';
const CartPage = () => {
    const checkIsLoggedIn = useLoginCheck(); 
    const [provideUserId,{data: pdfData, isError: pdfIsError, isLoading: pdfIsLoading, isSuccess: pdfIsSuccess, error: pdfError}] = usePrintPdfMutation();
    const navigate = useNavigate(); 
    const authInfo = useSelector((state)=> state?.auth?.auth);
    // let [userId, setUserId] = useState(localStorage?.getItem('user__id'));
    let {data, isLoading, isError, error, isSuccess} = useGetAllSingleUserCartProductQuery(localStorage?.getItem('user__id') || ''); 
    // decide what to render 
    let content = null;
    if(isLoading && !isError && !isSuccess){
        content = <LoadingPage/>
    }
    if(!isLoading && isError && !isSuccess){
        content = <NotFoundPage message={error?.message}/>
    } 
    
    
    useEffect(()=>{
        if(pdfIsError && !pdfIsSuccess && !pdfIsLoading){
            toast.error('There was a server side error',{duration:3000})
        }
        if(!pdfIsError && !pdfIsLoading && pdfIsSuccess){ 
            // Create a temporary download URL
            const downloadUrl = URL.createObjectURL(new Blob([pdfData]));

            // Create a link element and click it programmatically to start the download
            const link = document.createElement('a');
            link.href = downloadUrl;
            let time = new Date().getTime();
            let fileName = `${authInfo?.name}_${authInfo?.phone}_${authInfo?.user__id}_${time}.pdf`
            link.download = fileName; // Provide the desired filename for the download
            link.click();

            // Clean up the temporary download URL
            URL.revokeObjectURL(downloadUrl);
        }
    },[pdfData, pdfError, pdfIsSuccess, pdfIsLoading, pdfIsError, authInfo])


    const handlePrintPdf = () => {
        if(checkIsLoggedIn){
            let user__id = localStorage.getItem('user__id') || ''
            provideUserId(user__id);
        }else{
            navigate('/login')
        }
    }   
    
    if(!isLoading && !isError && isSuccess){
        if(data?.status__code === 200){
            
            content = <React.Fragment>
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
                                isLoading={pdfIsLoading}
                                onClick={handlePrintPdf}
                            >
                                {<AiOutlinePrinter/>}
                            </Button>
                            <Button
                                variant={'unstyled'} 
                                onClick={()=> navigate('/')}
                            >
                                Continue Shopping
                            </Button>
                        </Box>
                        <Box className='action__items__container__coupon'>
                            <Input placeholder='Apply Discount Code...'/>
                            <Button>Apply</Button>
                        </Box> 
                    </div>
                </div>
                <div className='main__category__product__view__upper__container button__print__and__action__container'>
                    <div className='print__and__action__container'>
                        <Button 
                            opacity='0'  
                            className='display__none'  
                            onClick={handlePrintPdf}
                            
                        >
                            {<AiOutlinePrinter/>}
                        </Button> 
                        <Box>
                            <CalculateTable products={data?.products}/>
                        </Box>
                    </div>
                </div>
                <div className='main__category__product__view__upper__container button__print__and__action__container'>
                    <div className='print__and__action__container'>
                        <Button 
                            opacity='0' 
                            className='display__none' 
                            onClick={()=> navigate('/print/cart')}
                        >
                            {<AiOutlinePrinter/>}
                        </Button>  
                        <Button 
                            onClick={()=> navigate('/checkout')}
                        >Proceed To Checkout</Button>
                    </div>
                </div>
            </React.Fragment>
        }else{ 
            content = <React.Fragment>
                <div className='add__product__main__container'>
                    <h1>You have not added any products to the cart</h1>
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
                <Text>Home / Cart</Text>
                <Text fontSize={'40px'} fontWeight={'bold'} letterSpacing={'.5px'} textAlign={'center'} paddingY={'30px'}>Your Cart</Text>
            </div>
            {content}
        </React.Fragment>
    );
};

export default CartPage;