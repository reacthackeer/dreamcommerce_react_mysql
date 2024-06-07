import { Button } from '@chakra-ui/react';
import React, { memo, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useUpdateSingleFilterNavbarMutation } from '../../../../features/product/productApi';

const EditMachine = memo(({prev, all, filter, navbar}) => {
    let {topCategory, category, collection} = navbar;
    const navigate = useNavigate();
    const [allFilterItems] = useState(all);
    const [selectedItems, setSelectedItems] = useState(prev);
    const [provideInfo,{data, isLoading, isError, isSuccess}] = useUpdateSingleFilterNavbarMutation();
    const handleToggleFilterItem = (item) => {
        let newSelectedItems = [...selectedItems];
        let currentItemIndex = newSelectedItems.indexOf(item);
        if(currentItemIndex === -1){
            newSelectedItems.push(item);
        }else{
            newSelectedItems.splice(currentItemIndex, 1);
        }
        setSelectedItems(newSelectedItems);
    }

    const handleFilterItemsSubmit = () => { 
        let newFilterInfo ={...filter, data: selectedItems};
        provideInfo(newFilterInfo);
    }

    useEffect(()=>{
        if(isError && !isSuccess){
            toast.error('There was a server side error!',{duration: 3000})
        }

        if(isSuccess && !isError){
            if(data && data?.status__code === 200){
                toast.success('Successfully filter navbar updated',{duration: 3000});
                setTimeout(() => {
                    navigate(`/p/${topCategory}/${category}/${collection}`);
                }, 3000);
            }
        }
    },[data, isLoading, isError, isSuccess, navigate, topCategory, category, collection])
    return (
        <div className='main__category__product__view__upper__container bg__1'>  
            <div className='padding__top padding__bottom'>
                <div className='filter__items__main__container'>
                    {
                        allFilterItems.map((info, index)=>{
                            return <Button 
                                        key={index}
                                        className={`filter__item ${selectedItems.indexOf(info) !== -1 ? 'active': ''}`}
                                        onClick={()=> handleToggleFilterItem(info)}
                                    >{info}</Button>
                        })
                    }
                </div>
                <div className='padding__top padding__bottom'>
                    <Button onClick={handleFilterItemsSubmit} isLoading={isLoading}>Submit</Button>
                </div>
            </div>
      </div>
    );
});

export default EditMachine;