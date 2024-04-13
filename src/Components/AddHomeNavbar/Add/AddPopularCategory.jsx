import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import DynamicHeader from '../../AddNavbar/DynamicHeader';
import DynamicHeaderHome from '../DynamicHeaderHome';

const AddPopularCategory = () => {
    const [formInfo, setFormInfo] = useState({name: '', link: ''})
    const handleSubmit = (e) => {
        e.preventDefault(); 
    }
    const handleChange = (e) => {
        let {value, name} = e.target;
        let newInputInfo = {...formInfo};
            newInputInfo[name] = value;
            setFormInfo(newInputInfo);
    }
    return (
        <React.Fragment>
            <DynamicHeader message="Add Popular Category"/>
            <DynamicHeaderHome/> 
            <div className='main__category__product__view__upper__container bg__1'>  
                <div className='padding__top padding__bottom'>
                <form onSubmit={handleSubmit} className='form__item__view__main__container'> 

                    <FormControl id="name" isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input
                        type="text"
                        name="name"
                        value={formInfo.name}
                        onChange={handleChange}
                        />
                    </FormControl>

                    <FormControl id="link" isRequired>
                        <FormLabel>Link</FormLabel>
                        <Input
                        type="text"
                        name="link"
                        value={formInfo.link}
                        onChange={handleChange}
                        />
                    </FormControl>                 
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
};

export default AddPopularCategory;