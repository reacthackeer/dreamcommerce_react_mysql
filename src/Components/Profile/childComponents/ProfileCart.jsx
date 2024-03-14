import { CopyIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, IconButton, Image, Text, useClipboard } from '@chakra-ui/react';
import React, { memo, useEffect, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { server__image__host__url } from '../../../app/store';
import { userLOggedOut } from '../../../features/auth/authSlice';
const ProfileCart = memo(() => { 
    let authInfo = useSelector((state)=> state?.auth?.auth);
    let printUserInfo = useSelector((state)=> state.auth.printUser);
    console.log(printUserInfo);
    const {user__id} = useParams();  
    const [currentViewProfile, setCurrentViewProfile] = useState({});

    useEffect(()=>{
        if(user__id && printUserInfo?.name){
            setCurrentViewProfile(()=> printUserInfo);
        }else{
            setCurrentViewProfile(()=> authInfo);
        }
    },[user__id, printUserInfo, authInfo])

    const { onCopy } = useClipboard(currentViewProfile?.user__id);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleUpdateProfileImage = () => {
        let images = [currentViewProfile.img__src];         
        localStorage.setItem('profile__images', JSON.stringify(images));
        navigate('/upload/profile-image');
    }

    const handleLogOut = () => {
        dispatch(userLOggedOut());
        localStorage.removeItem('auth');
        navigate('/login');
    }
    const handleUpdateAddress = () => {
        if(currentViewProfile && currentViewProfile.address){
            let division = currentViewProfile.address.division.id;
            let district = currentViewProfile.address.district.id;
            let upazilla = currentViewProfile.address.upazilla.id;
            let union = currentViewProfile.address.union.id;
            let street = currentViewProfile.address.street.street;
    
            localStorage.setItem('division', division);
            localStorage.setItem('district', district);
            localStorage.setItem('upazilla', upazilla);
            localStorage.setItem('union', union);
            localStorage.setItem('street', street);
            navigate('/add/address/shipping-address')
        }else{
            navigate('/add/address/shipping-address')
        }
    }
    return (
        <div>
            <Box borderWidth={1} borderRadius="md" p={4} maxWidth={300}>
                    <Flex direction="column" alignItems="center" mb={4}>
                        <Image src={currentViewProfile?.img__src ? server__image__host__url+currentViewProfile.img__src : server__image__host__url+'profile.png'} alt="User Profile Image" borderRadius="full" boxSize="150px" />
                        <IconButton onClick={handleUpdateProfileImage} icon={<EditIcon />} aria-label="Edit Profile Image" size="sm" mt={2} />
                    </Flex>
                    <Heading as="h2" fontSize="xl" mb={2}>{currentViewProfile?.name}</Heading>
                        <Text>Email: {currentViewProfile?.email}</Text>
                        <Text>Phone: {currentViewProfile?.phone}</Text>
                        <Text>Role: {currentViewProfile?.designation}</Text> 
                    <Heading as="h3" fontSize="lg" mt={4} mb={2}>Address</Heading>
                    <Box borderWidth={1} p={4} borderRadius="md">
                        <Text>Division: {currentViewProfile?.address?.division?.name}</Text>
                        <Text>District: {currentViewProfile?.address?.district?.name}</Text>
                        <Text>Upazilla: {currentViewProfile?.address?.upazilla?.name}</Text>
                        <Text>Union: {currentViewProfile?.address?.union?.name}</Text>
                        <Text>Street Address: {currentViewProfile?.address?.street?.street}</Text>
                    <Flex justifyContent="flex-end" mt={2}>
                        <IconButton onClick={handleUpdateAddress} icon={<EditIcon />} aria-label="Edit Address" size="sm" />
                    </Flex>
                </Box>
                <Button
                    mt='3'
                    width={'100%'}
                    rightIcon={<CopyIcon/>} 
                    onClick={onCopy}
                >
                    {currentViewProfile.user__id}
                </Button>
                <Button
                    mt='3'
                    width={'100%'}
                    rightIcon={<CopyIcon/>} 
                    onClick={()=> navigate('/order-management/all')}
                >
                    MANAGE ORDER
                </Button>
                <Button
                    mt='3'
                    width={'100%'}
                    rightIcon={<FiLogOut/>}
                    onClick={handleLogOut}
                >
                    Log Out
                </Button>
            </Box> 
        </div>
    );
});

export default ProfileCart;