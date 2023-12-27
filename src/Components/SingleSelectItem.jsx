import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Checkbox, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilterProduct } from '../features/product/productSlice';

const SingleSelectItem = ({infos}) => {
    let productFilterItem = useSelector((state)=> state.productFilter); 
    const dispatch = useDispatch();
    
    const handleToggleIdes = (data) => {
        let str = `${data.header}__${data.title}`
        let {ides, header} = productFilterItem; 
        let newIdes = [...ides];
        let newHeader = [...header];
        let indexHeader = newHeader.indexOf(str);
        if(indexHeader === -1){
            newHeader.push(str);
            data.id.forEach((info)=>{
                newIdes.push(info);
            })
        }else{
            newHeader.splice(indexHeader,1);
            data.id.forEach((info)=>{
                let index = newIdes.indexOf(info);
                newIdes.splice(index, 1)
            })
        } 
        dispatch(updateFilterProduct({ides: newIdes, header: newHeader}));
    }
    return (
        <AccordionItem> 
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                    <Text className='header__text__item' fontSize={'20px'}>
                        {infos?.name}
                    </Text>
                </Box>
                <AccordionIcon />
            </AccordionButton> 
            <AccordionPanel pb={4}>     
            <VStack className='select__main__container' direction='row'>
                {
                    infos?.dataset.map((info, index)=> {
                        return <Checkbox onChange={()=>handleToggleIdes({title: info[0], id: info[1], header: infos?.name})} colorScheme='red' key={index}>
                                    {info[0]}
                                </Checkbox> 
                    })
                } 
            </VStack>
            </AccordionPanel>
        </AccordionItem>
    );
};



export default SingleSelectItem;
