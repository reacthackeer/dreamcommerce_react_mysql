import React from 'react';
import { Toaster } from 'react-hot-toast';
import ColorNavbar from '../../Components/Navbar/ColorNavbar';
import CartSideBar from './Components/CartModal/CartSideBar';
import Navbar from './Components/Navbar/Navbar';
import NextVisibleNavbar from './Components/NextVisibleNavbar';
import { SearchModal } from './Components/SearchModal';
import TopSmallNavbar from './Components/TopSmallNavbar';
import VisibleNavbar from './Components/VisibleNavbar';

const RootPageUpMaterial = ({colorNavbarHide}) => {
    return (
        <React.Fragment>
            <Toaster/>
            <TopSmallNavbar/>
            <VisibleNavbar/>
            <NextVisibleNavbar/>
            <Navbar/>
            <SearchModal/>
            <CartSideBar/>
            {!colorNavbarHide && <ColorNavbar/>}
        </React.Fragment>
    );
};

export default RootPageUpMaterial;