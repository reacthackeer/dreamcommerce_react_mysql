import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { adminPortal, coverPortal, getCurrentActions, getCurrentItem, getCurrentNav, productPortal, systemPortal } from './AdminFixedDatabase';

const Sidebar = () => {
    const [sideBarProperty, setSideBarProperty] = useState({action: 'add', name: 'users'});
    const [currentActions, setCurrentActions] = useState(['add', 'edit', 'delete'])
    const [activeButton, setActiveButton] = useState(1); 

    useEffect(()=>{ 
        let locationArray = window.location.pathname.split('/'); 
        let action = locationArray[2];
        let name = locationArray[3]; 
        setActiveButton(getCurrentNav(name));
        setSideBarProperty({action, name}) 
    },[]);
    const navigate = useNavigate();
    const handleClickSideBarActionButton = (actionName) => {
        setSideBarProperty({...sideBarProperty, action: actionName});  
        setCurrentActions(getCurrentActions(sideBarProperty.name))
        setActiveButton(getCurrentNav(sideBarProperty.name))
        let {links, push} = getCurrentItem(sideBarProperty.name);
        let linkIndex = links.indexOf(actionName);
        if(push[linkIndex]){   
            navigate(`/admin/${actionName}/${sideBarProperty.name}`); 
        }

    }

    const handleClickSideBarUrlButton = (urlName) => {

        setSideBarProperty({...sideBarProperty, name: urlName});
        setCurrentActions(getCurrentActions(urlName))
        setActiveButton(getCurrentNav(urlName))

        let {links, push} = getCurrentItem(urlName);
        let linkIndex = links.indexOf(sideBarProperty.action);
        if(push[linkIndex]){   
            navigate(`/admin/${sideBarProperty.action}/${urlName}`);
        }

    } 
    return (
        <Box className='side__bar'>
            <Box className='button__group'>
                <button onClick={()=> setActiveButton(()=> 1)} className={activeButton === 1 ? 'active' : ''}>Product</button>
                <button onClick={()=> setActiveButton(()=> 2)} className={activeButton === 2 ? 'active' : ''}>Banner</button>
                <button onClick={()=> setActiveButton(()=> 3)} className={activeButton === 3 ? 'active' : ''}>System</button>
                <button onClick={()=> setActiveButton(()=> 4)} className={activeButton === 4 ? 'active' : ''}>Admin</button>
            </Box>
            <Box className='link__group' style={{display: activeButton !== 4 && 'none'}}> 
                {
                    adminPortal.map((info, index) => <button disabled={info.links.indexOf(sideBarProperty.action) === -1 || info.push[info.links.indexOf(sideBarProperty.action)] === false} key={index} className={`link__item ${sideBarProperty.name === info.url ? 'active' : ''}`} onClick={()=> handleClickSideBarUrlButton(info.url)}>{info.name}</button>)
                } 
            </Box>
            <Box className='link__group' style={{display: activeButton !== 1 && 'none'}}> 
                {
                    productPortal.map((info, index) => <button disabled={info.links.indexOf(sideBarProperty.action) === -1 || info.push[info.links.indexOf(sideBarProperty.action)] === false} key={index} className={`link__item ${sideBarProperty.name === info.url ? 'active' : ''}`} onClick={()=> handleClickSideBarUrlButton(info.url)}>{info.name}</button>)
                } 
            </Box>
            <Box className='link__group' style={{display: activeButton !== 2 && 'none'}}> 
                {
                    coverPortal.map((info, index) => <button disabled={info.links.indexOf(sideBarProperty.action) === -1 || info.push[info.links.indexOf(sideBarProperty.action)] === false} key={index} className={`link__item ${sideBarProperty.name === info.url ? 'active' : ''}`} onClick={()=> handleClickSideBarUrlButton(info.url)}>{info.name}</button>)
                } 
            </Box>
            <Box className='link__group' style={{display: activeButton !== 3 && 'none'}}> 
                {
                    systemPortal.map((info, index) => <button disabled={info.links.indexOf(sideBarProperty.action) === -1 || info.push[info.links.indexOf(sideBarProperty.action)] === false} key={index} className={`link__item ${sideBarProperty.name === info.url ? 'active' : ''}`} onClick={()=> handleClickSideBarUrlButton(info.url)}>{info.name}</button>)
                } 
            </Box>
            <Box className='action__group'>
                <button disabled={currentActions.indexOf('add') === -1} onClick={()=> handleClickSideBarActionButton('add')} className={sideBarProperty.action === 'add' ? 'active' : ''}><AddIcon/></button>
                <button disabled={currentActions.indexOf('edit') === -1} onClick={()=> handleClickSideBarActionButton('edit')} className={sideBarProperty.action === 'edit' ? 'active' : ''}><EditIcon/></button>
                <button disabled={currentActions.indexOf('delete') === -1} onClick={()=> handleClickSideBarActionButton('delete')} className={sideBarProperty.action === 'delete' ? 'active' : ''}><DeleteIcon/></button>
            </Box>
        </Box>
    );
};

export default Sidebar;