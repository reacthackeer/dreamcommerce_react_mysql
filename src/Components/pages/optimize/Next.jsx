import { Box } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';

const Next = () => {
    const [collection, setCollection] = useState([]);

    const handleGetAllData = () => {
        axios.get('http://localhost:3000/api/product/getAllProduct').then((res) => {
            setCollection(()=> res.data.collection)
        }).catch((err)=>{
            console.log(err.message);
        })
    }
    return (
        <div> 
        <button onClick={handleGetAllData}>Get All Data</button>
        <Box w='100%'></Box>
        </div>
    );
};

export default Next;