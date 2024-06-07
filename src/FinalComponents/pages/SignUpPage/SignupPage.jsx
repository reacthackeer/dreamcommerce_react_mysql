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
import { debounce } from 'lodash';
import numberUid from 'number-uid';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../../../features/auth/api';
import { userLoggedIn } from '../../../features/auth/authSlice';
import useModeratorCheck from '../../../hooks/moderatorCheck';

const SignupPage = () => {

  const checkIsLoggedIn = useModeratorCheck({graterThanRole: 10});
  const {auth} = useSelector((state)=> state.auth);
  useEffect(()=>{
    if(auth && auth?.name && checkIsLoggedIn){
      window.history.back();
    }
  },[checkIsLoggedIn, auth])
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const [provideData, {data, isLoading, isError, isSuccess, error}] = useRegisterUserMutation();

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(()=>{ 
    if(!isLoading && isError && !isSuccess){
      setAddDebounceLoading(()=> false);
        if(error.status === 500){
          toast.error(error.data.error.message,{duration: 3000, position: 'top-center'});
        }else{
          toast.error('There was a server side error',{duration: 3000, position: 'center'});
        }
    }
    if(!isLoading && !isError && isSuccess){ 
      setAddDebounceLoading(()=> false);
        if(data && data?.name){ 
          let {name, email, phone, user__id, role, designation, token, ID} = data;
          dispatch(userLoggedIn({name, ID, email, phone, user__id, role, designation, token, img__src: undefined, address: undefined}));
          let saveData = {...data, img__src: null, address: null};
          localStorage.setItem('auth', JSON.stringify(saveData));
          localStorage.setItem('user__id', data.user__id);
          toast.success('Successfully logged in 🥰',{duration: 3000, position: 'center'});
          setTimeout(() => {
            navigate('/profile')
          }, 3000);
        }else{
          toast.error('There was a server side error.',{duration: 3000, position: 'center'});
        }
      
    }
  },[data, isLoading, isError, isSuccess, error, dispatch, navigate]);
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  }; 
  const handleSignup = (e) => {
    e.preventDefault();
    let user__id =  numberUid(12);
    if(fullName && email && password && confirmPassword && user__id){
        if(password === confirmPassword){
          if(fullName.length > 5){
            let postInfo = {name: fullName, email, password, phone, user__id};
            provideData(postInfo);
          }else{
            setAddDebounceLoading(()=> false);
            toast.error('Your name must be at least 6 characters.',{duration: 3000, position: 'top-right'});
          }
        }else{
          setAddDebounceLoading(()=> false);
          toast.error('Please ensure your passwords are the same.',{duration: 3000, position: 'top-right'});
        }
    }else{
      setAddDebounceLoading(()=> false);
      toast.error('Please fill up all the fields!',{duration: 3000, position: 'top-right'});
    }
  };


  const [addDebounceLoading, setAddDebounceLoading] = useState(false);
  const handleSubmitDebounceFunction = debounce(handleSignup, 1000);

  const handleStartSubmit = (e) => {
      e.preventDefault();
      setAddDebounceLoading(()=> true);
      handleSubmitDebounceFunction(e);
  }


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
        <Heading mb={6}>Signup</Heading>
        <form onSubmit={handleStartSubmit}>
          <Stack spacing={4}>

            <FormControl id="fullName" isRequired>
              <FormLabel>Full Name</FormLabel>
              <Input
                type="text"
                placeholder="******** Khan"
                value={fullName}
                onChange={handleFullNameChange}
              />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="********@gmail.com"
                value={email}
                onChange={handleEmailChange}
              />
            </FormControl>

            <FormControl id="phone" isRequired>
              <FormLabel>Phone</FormLabel>
              <Input
                type="phone"
                placeholder="+8801*********"
                value={phone}
                onChange={handlePhoneChange}
              />
            </FormControl>


            <FormControl id="password" isRequired>
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

            <FormControl id="confirmPassword" isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="*********x#(9"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
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
              type='submit' 
              colorScheme="blue" 
              size="lg" fontSize="md"
              isLoading={isLoading || addDebounceLoading}
            >
              Signup
            </Button>

            <Text fontSize="sm" textAlign="center">
              Already have an account? <a href="/login">Login</a>
            </Text>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default SignupPage;
