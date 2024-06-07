import { Box, Button, ButtonGroup } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { usePrintOrderUserProfileInfoAndProductMutation } from '../../../../features/order/api';
import '../../../../styles/profile.scss';

import OrderPagination from './Pagination';
import ProductOrderTable from './ProductTable';
import ProfileCart from './ProfileCart';
const ProfileComponents = ({currentPage, totalPages, handlePageChange}) => { 

    const authInfo = useSelector((state)=> state.auth.printUser); 
    const [providePrintInfo,{data: pdfData, isError: pdfIsError, isLoading: pdfIsLoading, isSuccess: pdfIsSuccess, error: pdfError}] = usePrintOrderUserProfileInfoAndProductMutation();
    const {user__id} = useParams(); 
    const handlePrintOrderProductWithStatus = (status) => {
        providePrintInfo({user__id, status})
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
            let fileName = `Order_for_${authInfo?.name}_${authInfo?.phone}_${authInfo?.user__id}_${time}.pdf`
            link.download = fileName; // Provide the desired filename for the download
            link.click();

            // Clean up the temporary download URL
            URL.revokeObjectURL(downloadUrl);
        }
    },[pdfData, pdfError, pdfIsSuccess, pdfIsLoading, pdfIsError, authInfo])
    return (
        <div className='main__category__product__view__upper__container bg__white'>
            <div className='padding__top padding__bottom profile__container'>
                <div className='profile__cart__left'>
                    <ProfileCart/>
                </div>
                <div className='order__product__view__card__right'>
                    <ProductOrderTable/>
                    <OrderPagination 
                        handlePageChange={handlePageChange}
                        currentPage={currentPage}
                        totalPages={totalPages}
                    />
                    <Box 
                        textAlign={'end'}
                        mt='3'
                        display={user__id ? 'block' : 'none'}
                    >
                        <ButtonGroup 
                            size='sm' 
                            isAttached 
                            variant='outline' 
                            width={'fit-content'}
                        >
                            <Button 
                                size={'sm'}
                                isLoading={false}
                                onClick={()=> handlePrintOrderProductWithStatus('all')}
                            >Print All</Button>
                            <Button 
                                size={'sm'}
                                isLoading={false}
                                onClick={()=> handlePrintOrderProductWithStatus('pending')}
                            >Print Pending</Button>
                            <Button 
                                size={'sm'}
                                isLoading={false}
                                onClick={()=> handlePrintOrderProductWithStatus('completed')}
                            >Print Completed</Button>
                        </ButtonGroup>
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default ProfileComponents;