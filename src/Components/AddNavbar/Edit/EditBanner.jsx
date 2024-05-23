import { Box, Button, Heading, Image, Input, Text } from '@chakra-ui/react';
import React, { memo, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { server__image__host__url } from '../../../app/store';
import { useGetAllBannerQuery } from '../../../features/banner/bannerApi';
import DynamicHeader from '../DynamicHeader';
import DynamicTabBanner from '../DynamicTabBanner';
import EditBannerComponent from './Components/EditBanner';

const EditBanner = memo(() => {
    let {data: allBrands, isSuccess: allBrandIsSuccess} = useGetAllBannerQuery();

    console.log(allBrands);
    const [brandSearchText, setBrandSearchText] = useState('');

    const handleFilterBrandData = (newInfos = []) => {
        let newAllBrands = newInfos;
        if(brandSearchText){
            return newAllBrands.filter((info)=> info.title.toLowerCase().indexOf(brandSearchText.toLowerCase()) !== -1)
        }
        return newAllBrands;
    }

    

    const [selected, setSelected] = useState(false);    
    const handleSelectEditBrand = (info) => { 
            let {id, img__src, link, store__id, title, type, visible} = info;
            if(id && img__src && link && store__id && title && type && visible){
                localStorage.setItem('edit__banner__images', JSON.stringify([img__src]));
                localStorage.setItem('edit__banner__title', title);
                localStorage.setItem('edit__banner__id', id);
                localStorage.setItem('edit__banner__link', link);
                localStorage.setItem('edit__banner__store__id', store__id);
                localStorage.setItem('edit__banner__type', type);
                localStorage.setItem('edit__banner__visible', visible);
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
                <DynamicTabBanner/>
                <div className='main__category__product__view__upper__container bg__1'>
                    <div  className='filter__grid__for__delete'>
                        <Input my='5' placeholder='Search Here.....' onChange={(e)=> setBrandSearchText(e.target.value)}></Input>
                    </div>

                {               
                    allBrandIsSuccess && allBrands && allBrands?.length > 0 && 
                    allBrands.map((info, index)=>{
                        return ( 
                            <Box key={index}> 
                                <Heading mb='3'>{info.title}</Heading>
                                <div className='delete__brand__view__main__container'>
                                    {
                                        handleFilterBrandData(info.banners).map((info, index)=> { 
                                            return <Box key={index}>
                                                        <Link to={`/${info.link}`}>
                                                            <Image src={server__image__host__url+info?.img__src}/>
                                                        </Link>
                                                        <Text textAlign={'center'}>{info?.title}</Text>
                                                        <Button width="100%" variant='solid' colorScheme='teal' onClick={()=> handleSelectEditBrand(info)}>Edit</Button>
                                                    </Box>
                                        })
                                    }
                                </div>
                            </Box>
                        )
                    })
                }
                </div>
            </React.Fragment> }
            {selected &&  <EditBannerComponent setSelected={setSelected}/>}
        </div>
    );
});

export default EditBanner;