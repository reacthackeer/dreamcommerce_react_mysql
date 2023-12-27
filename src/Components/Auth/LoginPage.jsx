import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../../features/auth/api';
import { userLoggedIn } from '../../features/auth/authSlice';
import useLoginCheck from '../../hooks/loginCheck';

const LoginPage = () => {
  const checkIsLoggedIn = useLoginCheck();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState('');
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };


  useEffect(()=>{
    if(checkIsLoggedIn){
      window.history.back()
    }
  },[checkIsLoggedIn])

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [provideLoginInfo,{data, isLoading, isError, isSuccess, error}] = useLoginUserMutation();
  const handleLogin = () => {
    // Perform login logic here 
    if(phone && email && password){
      let postData = {phone, email, password};
      provideLoginInfo(postData)
    }else{
      toast.error('Please fill up all the fields',{duration: 3000})
    }
  };
  const [entered, setEntered] = useState(false);
  useEffect(()=>{
    if(!isLoading && isError && !isSuccess){
        toast.error('There was a server side error!',{duration: 3000});
    }
    if(!isLoading && isSuccess && !isError){
        if(data && data?.name){ 
          if(!entered){
            let newAuthInfo = {...data};
            newAuthInfo.isLoggedIn = true; 
            dispatch(userLoggedIn(newAuthInfo)); 
            window.history.back() 
            localStorage.setItem('auth', JSON.stringify(newAuthInfo));
            localStorage.setItem('user__id', newAuthInfo.user__id);
            setEntered(true)
          }
        }
    }
  },[data, isLoading, isError, isSuccess, error, dispatch, navigate, entered])
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box
        borderWidth="1px"
        borderRadius="lg"
        p={8}
        maxWidth="400px"
        width="100%"
      >
        <Heading mb={6}>Login</Heading>

        <Stack spacing={4}>

          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="********@gmail.com"
              value={email}
              onChange={handleEmailChange}
            />
          </FormControl>

          <FormControl id="phone">
            <FormLabel>Phone</FormLabel>
            <Input
              type="phone"
              placeholder="+8801*********"
              value={phone}
              onChange={handlePhoneChange}
            />
          </FormControl>

          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="*********x#(9"
                value={password}
                onChange={handlePasswordChange}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={handleTogglePassword}
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <ViewOffIcon fontSize="sm" />
                  ) : (
                    <ViewIcon fontSize="sm" />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Button 
            colorScheme="blue" 
            size="lg"  
            fontSize="md" 
            onClick={handleLogin}
            isLoading={isLoading}
          >
            Login
          </Button>

          <Text fontSize="sm" textAlign="center">
            Don't have an account? <a href="/signup">Sign up</a>
          </Text>
        </Stack>
      </Box>
    </Box>
  );
};

export default LoginPage;
