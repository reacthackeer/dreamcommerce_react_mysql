import { Box, Button, Image, Input } from '@chakra-ui/react';
import React, { memo, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { server__image__host__url } from '../../../../app/store';

import { useGetAllShopByCategoryQuery } from '../../../../features/shopByCategory/shopByCategoryApi';

import AdminPageSkeleton from '../../AdminPageSkeletonComponents/AdminPageSkeleton';
import EditShopByCategoryComponent from './Components/EditShopByCategoryComponent';

const EditShopByCategory = memo(() => {
    let {data: allBrands, isSuccess: allBrandIsSuccess} = useGetAllShopByCategoryQuery();
    const [brandSearchText, setBrandSearchText] = useState('');

    const handleFilterBrandData = () => {
        if(brandSearchText){
            return allBrands.filter((info)=> info.name.toLowerCase().indexOf(brandSearchText.toLowerCase()) !== -1)
        }
        return allBrands;
    }


    const [selected, setSelected] = useState(false);    
    const handleSelectEditBrand = (info) => {
            let {id, link, name, img__src} = info;
            if(id && link && name && img__src){
                localStorage.setItem('edit__shop__by__category__images', JSON.stringify([img__src]));
                localStorage.setItem('edit__shop__by__category__name', name);
                localStorage.setItem('edit__shop__by__category__id', id);
                localStorage.setItem('edit__shop__by__category__link', link);
                setSelected(true);
            }else{
                toast.error('Invalid request',{duration: 3000})
            }
        }
        
    return (
        <div> 
            {!selected && 
            <AdminPageSkeleton>  
                    <div>
                        <Input my='3' size='sm' placeholder='Search Here.....' onChange={(e)=> setBrandSearchText(e.target.value)}></Input>
                    </div>
                    {               
                        allBrandIsSuccess && allBrands && allBrands?.length > 0 && 
                        <div className='data__view__image__preview'>
                            {
                                handleFilterBrandData().map((info, index)=> { 
                                    return <Box key={index}>
                                                <Link to={`/${info.link}`}>
                                                    <Image src={ info.img__src.indexOf('/images/check') === -1 ? info.img__src : server__image__host__url+info.img__src} alt={info.name}/>
                                                </Link>
                                                <Button width="100%" variant="ghost">{info?.name}</Button>
                                                <Button width="100%" variant='solid' colorScheme='teal' onClick={()=> handleSelectEditBrand(info)}>Edit</Button>
                                            </Box>
                                })
                            }
                        </div>
                    } 
            </AdminPageSkeleton> }
            {selected && <AdminPageSkeleton> <EditShopByCategoryComponent setSelected={setSelected}/> </AdminPageSkeleton>}
        </div>
    );
});

export default EditShopByCategory;