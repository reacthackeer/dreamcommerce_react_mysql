import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useVerifyPaymentQuery } from "../../features/payment/paymentApi";

const PaymentSuccessPage = () => {
  const navigate = useNavigate();
  const {orderId} = useParams(); 
  const {data, isError, isSuccess, isLoading} = useVerifyPaymentQuery(orderId || '')

  // Function to handle redirection to home page
  const redirectToHome = () => {
     navigate('/')
  };

  useEffect(()=>{
    console.log({data, isLoading, isSuccess, isError});
  }, [data, isLoading, isSuccess, isError])
  return (
    <Box textAlign="center" className="padding__top padding__bottom">
      <Image src="/payment.gif" alt="Success" boxSize="100px" mx="auto" />
      <Heading mt="4">Payment Successful!</Heading>
      <Text mt="2" fontSize="lg">
        Thank you for your purchase.
      </Text>
      <Text mt="2">You will receive a confirmation email shortly.</Text>

      <Button colorScheme="blue" mt="6" onClick={redirectToHome}>
        Continue Shopping
      </Button>
    </Box>
  );
};

export default PaymentSuccessPage;
