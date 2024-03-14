import { Button, FormControl, FormLabel, Input, Select, Text } from '@chakra-ui/react';
import numberUid from 'number-uid';
import React, { memo, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useUpdateUserMutation } from '../../features/auth/api';
import { userLOggedOut, userLoggedIn } from '../../features/auth/authSlice';
import { useGetAllDistrictQuery, useGetAllDivisionsQuery, useGetAllUnionsQuery, useGetAllUpazillasQuery } from '../../features/geocode/brandApi';
import HeaderLinkItem from '../pages/developViewSkeletonComponents/HeaderLinkItems';


const ShippingAddress = memo(() => { 
    
    let linksArray = [
        {name: "Home", link: '/'},
        {name: 'Shipping Address', link: `/add/address/shipping-address`}
    ]

    let authInfo = useSelector((state)=> state.auth.auth);
    const [division, setDivision] = useState(localStorage.getItem('division') || '');
    const [upazilla, setUpazilla] = useState(localStorage.getItem('upazilla') || '');
    const [street, setStreet] = useState(localStorage.getItem('street') || '');
    const [district, setDistrict] = useState(localStorage.getItem('district') || '');
    const [union, setUnion] = useState(localStorage.getItem('union') || '');
    const {data, isSuccess} = useGetAllDivisionsQuery();
    let {data: dData, isSuccess:dIsSuccess} = useGetAllDistrictQuery(division); 
    let {data: uData, isSuccess: uIsSuccess} = useGetAllUpazillasQuery(district);
    let {data: pData, isSuccess: pIsSuccess} = useGetAllUnionsQuery(upazilla);
    
    let [provideInfo, {data: fData, isLoading, isError, error, isSuccess: fIsSuccess}] = useUpdateUserMutation();
    const handleSubmit = (e) => {
        e.preventDefault(); 
        let getDivision = data.items.filter((info)=> info.id === Number(division))[0];
        let getDistrict = dData.items.filter((info)=> info.id === Number(district))[0];
        let getUpazilla = uData.items.filter((info)=> info.id === Number(upazilla))[0];
        let getUnion = pData.items.filter((info)=> info.id === Number(union))[0];

        let address = {division: getDivision, district: getDistrict, upazilla: getUpazilla, union: getUnion, street: {id: numberUid(8), street}};
        let newAuthInfo = {...authInfo};
            newAuthInfo.address = address; 
            provideInfo(newAuthInfo);
            localStorage.setItem('profile__address', JSON.stringify(newAuthInfo));
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [updated, setUpdated] = useState(false);
    
    useEffect(()=>{ 
        if(isError && !isLoading && !fIsSuccess){
            toast.error('There was a server side error!',{duration: 3000})
            dispatch(userLOggedOut());
            localStorage.removeItem('auth');
            navigate('/login');
        }
        if(!isError && fIsSuccess && !isLoading){
            if(fData && fData?.status__code === 200){
                if(!updated){
                    let nowNewAuthInfo = JSON.parse(localStorage.getItem('profile__address'));
                    toast.success('Successfully Address updated',{duration: 3000});
                    localStorage.setItem('auth', JSON.stringify(nowNewAuthInfo));
                    dispatch(userLoggedIn(nowNewAuthInfo));
                    setUpdated(()=> true);
                    localStorage.removeItem('profile__address');
                    setTimeout(() => {
                        navigate('/profile');
                    }, 3000);
                }
            }
        }
    },[fData, isLoading, isError, error, fIsSuccess, navigate, dispatch, updated])
    return (
        <React.Fragment> 
            <div className='main__category__product__view__upper__container'>
                <div style={{paddingTop:'30px',paddingBottom:'30px'}}>
                    <HeaderLinkItem linksArray={linksArray}/>
                    <Text fontSize={'40px'} fontWeight={'bold'} letterSpacing={'.5px'} textAlign={'center'} paddingY={'30px'}>{'Update your shipping address'}</Text>
                </div>  
            </div> 
            <div className='main__category__product__view__upper__container bg__white'>
                <div className='padding__top padding__bottom'>
                    <form onSubmit={handleSubmit} className='form__item__view__main__container'> 
                    {isSuccess && data?.items && data?.items?.length > 0 &&
                        <FormControl id="image" isRequired>
                            <FormLabel>Your Division Name</FormLabel>
                            <Select
                                value={division}
                                onChange={(e) => setDivision(e.target.value)}
                                placeholder="Select Your Division"
                                isRequired={true}
                            > 
                                {
                                    isSuccess && data?.items && data?.items?.length > 0 && data?.items.map((info, index)=> {
                                        return <option key={index} value={info.id}>{info.bn_name}</option>
                                    })
                                }
                            </Select>  
                        </FormControl> 
                    }
                    {
                        dIsSuccess && dData?.items && dData?.items?.length > 0 &&
                    
                        <FormControl id="image" isRequired>
                            <FormLabel>Your District Name</FormLabel>
                            <Select
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                                placeholder="Select Your District"
                                isRequired={true}
                            > 
                                {
                                    dIsSuccess && dData?.items && dData?.items?.length > 0 && dData?.items.map((info, index)=> {
                                        return <option key={index} value={info.id}>{info.bn_name}</option>
                                    })
                                }
                            </Select>  
                        </FormControl>
                    }
                    {uIsSuccess && uData?.items && uData?.items?.length > 0 &&
                    
                        <FormControl id="image" isRequired>
                            <FormLabel>Your Upazilla Name</FormLabel>
                            <Select
                                value={upazilla}
                                onChange={(e) => setUpazilla(e.target.value)}
                                placeholder="Select Your Upazilla"
                                isRequired={true}
                            > 
                                {
                                    uIsSuccess && uData?.items && uData?.items?.length > 0 && uData?.items.map((info, index)=> { 
                                        return <option key={index} value={info.id}>{info.bn_name}</option>
                                    })
                                }
                            </Select>  
                        </FormControl>
                    }
                    {
                        pIsSuccess && pData?.items && pData?.items?.length > 0 &&
                    
                        <FormControl id="image" isRequired>
                            <FormLabel>Your Union Name</FormLabel>
                            <Select
                                value={union}
                                onChange={(e) => setUnion(e.target.value)}
                                placeholder="Select Your Upazilla"
                                isRequired={true}
                            > 
                                {
                                    pIsSuccess && pData?.items && pData?.items?.length > 0 && pData?.items.map((info, index)=> { 
                                        return <option key={index} value={info.id}>{info.bn_name}</option>
                                    })
                                }
                            </Select>  
                        </FormControl>
                    }
                    {
                        pIsSuccess && pData?.items && pData?.items?.length > 0 && union &&
                    
                        <FormControl id="image" isRequired>
                            <FormLabel>Your Street Address</FormLabel>
                            <Input 
                                value={street}
                                type='text' 
                                placeholder='Your Street Address'
                                onChange={({target:{value}})=> setStreet(value)}
                            ></Input>
                        </FormControl>
                    }
                        <div className='register__button'>
                            <Button 
                            colorScheme="green" 
                            variant={'outline'}
                            type="submit"
                            size='sm'  
                            >
                                Save
                            </Button>      
                        </div>
                    </form> 
                </div>
            </div>
        </React.Fragment>
    );
});

export default ShippingAddress;