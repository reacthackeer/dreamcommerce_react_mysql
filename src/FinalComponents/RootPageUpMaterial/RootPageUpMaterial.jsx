import React from 'react';
import { Toaster } from 'react-hot-toast';
import CartSideBar from './Components/CartModal/CartSideBar';
import ColorNavbar from './Components/Navbar/ColorNavbar';
import Navbar from './Components/Navbar/Navbar';
import NextVisibleNavbar from './Components/NextVisibleNavbar';
import { SearchModal } from './Components/SearchModal';
import VisibleNavbar from './Components/VisibleNavbar';

const RootPageUpMaterial = ({colorNavbarHide}) => {
    return (
        <React.Fragment>
            <Toaster/> 
            <VisibleNavbar/>
            <Navbar/>
            <NextVisibleNavbar/>
            <SearchModal/>
            <CartSideBar/>
            {!colorNavbarHide && <ColorNavbar/>}
        </React.Fragment>
    );
};

export default RootPageUpMaterial;