import { Box, Button, Image, Input } from '@chakra-ui/react';
import React, { memo, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { server__image__host__url } from '../../../app/store';
import { useGetAllPopularCategoryQuery } from '../../../features/popularCategory/popularCategoryApi';

import DynamicHeader from '../../AddNavbar/DynamicHeader';
import DynamicHeaderHome from '../DynamicHeaderHome';
import EditBrandComponents from './Components/EditPopularCategory';

const EditBrand = memo(() => {
    let {data: allBrands, isSuccess: allBrandIsSuccess} = useGetAllPopularCategoryQuery();
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
                localStorage.setItem('edit__popular__category__images', JSON.stringify([img__src]));
                localStorage.setItem('edit__popular__category__name', name);
                localStorage.setItem('edit__popular__category__id', id);
                localStorage.setItem('edit__popular__category__link', link);
                setSelected(true);
            }else{
                toast.error('Invalid request',{duration: 3000})
            }
        }
        
    return (
        <div> 
            {!selected && 
            <React.Fragment>
                <DynamicHeader message={'Edit Popular Category'}/>
                <DynamicHeaderHome/>
                <div className='main__category__product__view__upper__container bg__1'>
                    <div  className='filter__grid__for__delete'>
                        <Input my='5' placeholder='Search Here.....' onChange={(e)=> setBrandSearchText(e.target.value)}></Input>
                    </div>

    {               allBrandIsSuccess && allBrands && allBrands?.length > 0 && 
                    <div className='delete__brand__view__main__container'>
                        {
                            handleFilterBrandData().map((info, index)=> { 
                                return <Box key={index}>
                                            <Link to={`/${info.link}`}>
                                                <Image src={server__image__host__url+info?.img__src}/>
                                            </Link>
                                            <Button width="100%" variant="ghost">{info?.name}</Button>
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