import { Box, Button, Image } from '@chakra-ui/react';
import React, { memo, useState } from 'react';
import { toast } from 'react-hot-toast';
import { server__image__host__url } from '../../../../app/store';
import { useGetAllUpNavbarQuery } from '../../../../features/brand/brandApi';
import AdminPageSkeleton from '../../AdminPageSkeletonComponents/AdminPageSkeleton';
import EditSectionComponents from './Components/EditSection';

const EditSection = memo(() => {
    
        let { data : upNavbarData } = useGetAllUpNavbarQuery();
    
        // category end
        const [selected, setSelected] = useState(false);

        
        const handleUpdateCollection = (info) => { 
            let {ID, name,  src, uid} = info;
            if(ID && name && src && uid){
                localStorage.setItem('edit__section__images', JSON.stringify([src]));
                localStorage.setItem('edit__section__name', name);
                localStorage.setItem('edit__section__id', ID);
                localStorage.setItem('edit__section__uid', uid); 
                setSelected(true);
            }else{
                toast.error('Invalid request',{duration: 3000})
            } 
        }

    return (
        <div> 
            {
                !selected && 
                <AdminPageSkeleton>  
                    {                
                        upNavbarData && upNavbarData?.status__code === 200 && upNavbarData?.items?.length > 0 &&
                            <div className='data__view__image__preview'>
                                {
                                    upNavbarData?.items?.map((info, index)=> { 
                                        return <Box key={index}> 
                                                    <Image src={server__image__host__url+info?.src}/> 
                                                    <Button width="100%" variant="ghost">{info?.name}</Button>
                                                    <Button 
                                                        width="100%" 
                                                        variant='solid' 
                                                        colorScheme='teal'
                                                        onClick={()=> handleUpdateCollection(info)}
                                                    >Edit</Button>
                                                </Box>
                                    })
                                }
                            </div>
                    } 
                </AdminPageSkeleton>
            }
            {
                selected && <AdminPageSkeleton> <EditSectionComponents setSelected={setSelected}/> </AdminPageSkeleton>
            }
        </div>
    );
});

export default EditSection;