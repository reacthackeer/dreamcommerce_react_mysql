import { EditIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, IconButton, Image, Text } from '@chakra-ui/react';
import React, { memo } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { server__image__host__url } from '../../../app/store';
import { userLOggedOut } from '../../../features/auth/authSlice';
const ProfileCart = memo(() => {
    
    const authInfo = useSelector((state)=> state?.auth?.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleUpdateProfileImage = () => {
        let images = [authInfo.img__src];         
        localStorage.setItem('profile__images', JSON.stringify(images));
        navigate('/upload/profile-image');
    }

    const handleLogOut = () => {
        dispatch(userLOggedOut());
        localStorage.removeItem('auth');
        navigate('/');
    }
    const handleUpdateAddress = () => {
        let division = authInfo.address.division.id;
        let district = authInfo.address.district.id;
        let upazilla = authInfo.address.upazilla.id;
        let union = authInfo.address.union.id;
        let street = authInfo.address.street.street;

        localStorage.setItem('division', division);
        localStorage.setItem('district', district);
        localStorage.setItem('upazilla', upazilla);
        localStorage.setItem('union', union);
        localStorage.setItem('street', street);
        navigate('/add/address/shipping-address')
    }
    return (
        <div>
            <Box borderWidth={1} borderRadius="md" p={4} maxWidth={300}>
                    <Flex direction="column" alignItems="center" mb={4}>
                        <Image src={authInfo?.img__src ? server__image__host__url+authInfo.img__src : server__image__host__url+'profile.png'} alt="User Profile Image" borderRadius="full" boxSize="150px" />
                        <IconButton onClick={handleUpdateProfileImage} icon={<EditIcon />} aria-label="Edit Profile Image" size="sm" mt={2} />
                    </Flex>
                    <Heading as="h2" fontSize="xl" mb={2}>{authInfo?.name}</Heading>
                        <Text>Email: {authInfo?.email}</Text>
                        <Text>Phone: {authInfo?.phone}</Text>
                        <Text>Role: {authInfo?.designation}</Text> 
                    <Heading as="h3" fontSize="lg" mt={4} mb={2}>Address</Heading>
                    <Box borderWidth={1} p={4} borderRadius="md">
                        <Text>Division: {authInfo?.address?.division?.name}</Text>
                        <Text>District: {authInfo?.address?.district?.name}</Text>
                        <Text>Upazilla: {authInfo?.address?.upazilla?.name}</Text>
                        <Text>Union: {authInfo?.address?.union?.name}</Text>
                        <Text>Street Address: {authInfo?.address?.street?.street}</Text>
                    <Flex justifyContent="flex-end" mt={2}>
                        <IconButton onClick={handleUpdateAddress} icon={<EditIcon />} aria-label="Edit Address" size="sm" />
                    </Flex>
                </Box>
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