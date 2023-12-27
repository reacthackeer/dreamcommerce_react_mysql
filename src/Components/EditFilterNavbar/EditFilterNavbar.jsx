import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleFilterNavbarQuery, useGetSingleFilterProductQuery } from '../../features/product/productApi';
import { LoadingPage } from '../skleton/Loading';
import EditMachine from './ChildComponents/EditMachine';

const EditFilterNavbar = memo(() => {
    const {topCategory, category, collection} = useParams();
    const {data} = useGetSingleFilterProductQuery({child: collection, parent: category, parent__father: topCategory});
    const {data:navbarData} = useGetSingleFilterNavbarQuery({child: collection, parent: category, parent__father: topCategory});
    // decide what to render

    let content = <LoadingPage/>;

    if(data && data?.status__code === 200 && navbarData && navbarData?.status__code === 200){
        let {products} = data;
        let specifications = products[0].infos.specifications; 
        let generalFilterItem = [];
            specifications.forEach((info)=>{
                info.infos.forEach((secondInfo)=>{
                    generalFilterItem.push(secondInfo.title);
                })
            }); 
        let filterItem = navbarData.item.data;
        let filter = navbarData.item;
        filterItem.forEach((info)=>{
            if(generalFilterItem.indexOf(info) === -1){
                generalFilterItem.push(info);
            }
        })
        content = (
            <React.Fragment>
                <div> 
                    <EditMachine prev={filterItem} all={generalFilterItem} filter={filter} navbar={{topCategory, category, collection}}/>
                </div>
            </React.Fragment>
        )
    }

    return content;
});

export default EditFilterNavbar;