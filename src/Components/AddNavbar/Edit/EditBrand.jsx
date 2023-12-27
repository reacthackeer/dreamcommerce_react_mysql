import { Box, Button, Image, Input } from '@chakra-ui/react';
import React, { memo, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { server__image__host__url } from '../../../app/store';
import { useGetAllBrandQuery } from '../../../features/brand/brandApi';
import DynamicHeader from '../DynamicHeader';
import DynamicTab from '../DynamicTab';
import EditBrandComponents from './Components/EditBrand';

const EditBrand = memo(() => {
    let {data: allBrands, isSuccess: allBrandIsSuccess} = useGetAllBrandQuery();
    const [brandSearchText, setBrandSearchText] = useState('');

    const handleFilterBrandData = () => {
        if(brandSearchText){
            return allBrands.filter((info)=> info.brand.toLowerCase().indexOf(brandSearchText.toLowerCase()) !== -1)
        }
        return allBrands;
    }


    const [selected, setSelected] = useState(false);    
    const handleSelectEditBrand = (info) => {
            let {ID, brand, src, uid} = info;
            if(ID && brand && src && uid){
                localStorage.setItem('edit__brand__images', JSON.stringify([src]));
                localStorage.setItem('edit__brand__name', brand);
                localStorage.setItem('edit__brand__id', ID);
                localStorage.setItem('edit__brand__uid', uid);
                setSelected(true);
            }else{
                toast.error('Invalid request',{duration: 3000})
            }
        }
        
    return (
        <div> 
            {!selected && 
            <React.Fragment>
                <DynamicHeader message={'Delete Brand'}/>
                <DynamicTab/>
                <div className='main__category__product__view__upper__container bg__1'>
                    <div  className='filter__grid__for__delete'>
                        <Input my='5' placeholder='Search Here.....' onChange={(e)=> setBrandSearchText(e.target.value)}></Input>
                    </div>

    {               allBrandIsSuccess && allBrands && allBrands?.length > 0 && 
                    <div className='delete__brand__view__main__container'>
                        {
                            handleFilterBrandData().map((info, index)=> { 
                                return <Box key={index}>
                                            <Link to={`/brands/${info?.brand}`}>
                                                <Image src={server__image__host__url+info?.src}/>
                                            </Link>
                                            <Button width="100%" variant="ghost">{info?.brand}</Button>
                                            <Button width="100%" variant='solid' colorScheme='teal' onClick={()=> handleSelectEditBrand(info)}>Edit</Button>
                                        </Box>
                            })
                        }
                    </div>}
                </div>
            </React.Fragment> }
            {selected &&  <EditBrandComponents setSelected={setSelected}/>}
        </div>
    );
});

export default EditBrand;