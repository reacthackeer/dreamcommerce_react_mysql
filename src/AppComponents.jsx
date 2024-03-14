import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { uid } from 'uid';

import { Box } from '@chakra-ui/react';
import AddBanner from './Components/AddHomeNavbar/Add/AddBanner.jsx';
import AddByBrand from './Components/AddHomeNavbar/Add/AddByBrand.jsx';
import AddByCategory from './Components/AddHomeNavbar/Add/AddByCategory.jsx';
import AddPopularCategory from './Components/AddHomeNavbar/Add/AddPopularCategory.jsx';
import DeleteBanner from './Components/AddHomeNavbar/Delete/DeleteBanner.jsx';
import DeleteByBrand from './Components/AddHomeNavbar/Delete/DeleteByBrand.jsx';
import DeleteByCategory from './Components/AddHomeNavbar/Delete/DeleteByCategory.jsx';
import DeletePopularCategory from './Components/AddHomeNavbar/Delete/DeletePopularCategory.jsx';
import EditBanner from './Components/AddHomeNavbar/Edit/EditBanner.jsx';
import EditByBrand from './Components/AddHomeNavbar/Edit/EditByBrand.jsx';
import EditByCategory from './Components/AddHomeNavbar/Edit/EditByCategory.jsx';
import EditPopularCategory from './Components/AddHomeNavbar/Edit/EditPopularCategory.jsx';
import AddBrand from './Components/AddNavbar/Add/AddBrand.jsx';
import AddCategory from './Components/AddNavbar/Add/AddCategory.jsx';
import AddCollection from './Components/AddNavbar/Add/AddCollection.jsx';
import AddSection from './Components/AddNavbar/Add/AddSection.jsx';
import AddTopCategory from './Components/AddNavbar/Add/AddTopCategory.jsx';
import DeleteBrand from './Components/AddNavbar/DELETEE/DeleteBrand.jsx';
import DeleteCategory from './Components/AddNavbar/DELETEE/DeleteCategory.jsx';
import DeleteCollection from './Components/AddNavbar/DELETEE/DeleteCollection.jsx';
import DeleteSection from './Components/AddNavbar/DELETEE/DeleteSection.jsx';
import DeleteTopCategory from './Components/AddNavbar/DELETEE/DeleteTopCategory.jsx';
import EditBrand from './Components/AddNavbar/Edit/EditBrand.jsx';
import EditCategory from './Components/AddNavbar/Edit/EditCategory.jsx';
import EditCollection from './Components/AddNavbar/Edit/EditCollection.jsx';
import EditSection from './Components/AddNavbar/Edit/EditSection.jsx';
import EditTopCategory from './Components/AddNavbar/Edit/EditTopCategory.jsx';
import AddProductForm from './Components/AddProduct/AddFrom.jsx';
import LoginPage from './Components/Auth/LoginPage.jsx';
import SignupPage from './Components/Auth/SignupPage.jsx';
import EditFilterNavbar from './Components/EditFilterNavbar/EditFilterNavbar.jsx';
import EditProductForm from './Components/EditProduct/EditProduct.jsx';
import CardSideBar from './Components/Modal/CardModal';
import { SearchModal } from './Components/Modal/SearchModal';
import ColorNavbar from './Components/Navbar/ColorNavbar';
import Navbar from './Components/Navbar/Navbar';
import NextVisibleNavbar from './Components/Navbar/NextVisibleNavbar';
import TopSmallNavbar from './Components/Navbar/TopSmallNavbar';
import VisibleNavbar from './Components/Navbar/VisibleNavbar';
import Profile from './Components/Profile/Profile.jsx';
import ShippingAddress from './Components/ShippingAddress/ShippingAddress.jsx';
import UploadSingleImage from './Components/Uploads/UploadSingleImage.jsx';
import DevelopAllBrandView from './Components/pages/BrandView/DevelopAllBrandView';
import DevelopCategoryAllView from './Components/pages/BrandView/DevelopAllCategoryView';
import DevelopAllOfferView from './Components/pages/BrandView/DevelopAllOfferProductView.jsx';
import DevelopSingleBrandView from './Components/pages/BrandView/DevelopBrandView';
import DevelopBrowsingHistoryView from './Components/pages/BrandView/DevelopBrowsingHistoryView';
import DevelopCategoryView from './Components/pages/BrandView/DevelopCategoryView';
import DevelopCollectionView from './Components/pages/BrandView/DevelopCollectionView copy';
import { default as BrandView, default as DevelopSearchView } from './Components/pages/BrandView/DevelopSearchView.jsx';
import DevelopTopCategoryView from './Components/pages/BrandView/DevelopTopCategoryView';
import SingleOfferView from './Components/pages/BrandView/SingleOfferView';
import OrderManagement from './Components/pages/OrderManagement/OrderManagement.jsx';
import OrderPrintPage from './Components/pages/OrderManagement/OrderPrintPage.jsx';
import Optimize from './Components/pages/optimize/Optimize';
import ProductDetails from './Components/pages/productDetails/ProductDetails';
import AuthComponents from './Components/skleton/AuthComponents.jsx';
import YourCart from './Components/skleton/CartPage';
import Checkout from './Components/skleton/Checkout';
import Footer from './Components/skleton/Footer';
import HomePage from './Components/skleton/HomePage';
import WishlistKong from './Components/skleton/wishlist';
import SpecificationForm from './SpecificationForm';
import useLoginCheck from './hooks/loginCheck.jsx';
const AppComponents = () => {
  const location = useLocation();   
  const isUserLoggedIn = useLoginCheck();  

  useEffect(()=>{ 
    // card__modal__upper__container
    let navbar = document.querySelector('.application__navbar');
      if(navbar && navbar?.classList && navbar?.classList?.length > 0){  
        navbar.classList.forEach((info)=>{
          if(info === 'active'){
            navbar.classList.remove('active')
          }
        })
      }

      let cartSidebar = document.querySelector('.card__modal__upper__container');
      if(cartSidebar && cartSidebar?.classList && cartSidebar?.classList?.length > 0){  
        cartSidebar.classList.forEach((info)=>{
          if(info === 'active'){
            cartSidebar.classList.remove('active')
          }
        })
      }

      // mobile__view__container
      let homeSize = document.querySelector('.mobile__view__container');
      if(
        homeSize && 
        homeSize?.classList && 
        homeSize?.classList?.length > 0
        ){  
          homeSize.classList.forEach((info)=>{
          if(info === 'active'){
            homeSize.classList.remove('active')
          }
        })
      }
  },[location]); 

  useEffect(()=>{
    let userId = localStorage.getItem('user__id');
    if(userId){
      // do something here
    }else{
      localStorage.setItem('user__id', uid(12))
    }
  },[])

  return ( 

    <div className='upper__container'>
      <div className='mobile__view__container'> 
      
        {/* navbar start */}
      
        <Toaster/>
        <TopSmallNavbar/>   
        <VisibleNavbar/>
        <NextVisibleNavbar/>  
        <Navbar/>
        <SearchModal/>
        <CardSideBar/>
        {/* navbar end */}

        <Routes> 
          <Route
            path='/'
            element={
            <React.Fragment>
              <ColorNavbar/>
              <HomePage/>
            </React.Fragment>
            }
          />
          <Route
            path='/login'
            element={
            <React.Fragment>
              <ColorNavbar/>
              <LoginPage/>
            </React.Fragment>
            }
          />
          <Route
            path='/signup'
            element={
            <React.Fragment>
              <ColorNavbar/>
              <SignupPage/>
            </React.Fragment>
            }
          />
          <Route path='/profile' element={  
              isUserLoggedIn ? 
              <Box>
                  <ColorNavbar/>
                  <Profile/>
              </Box>  
              :
              <Navigate to='/login'/>
          }/>
          <Route path='/order-management/print/:user__id' element={  
              isUserLoggedIn ? 
              <Box>
                  <ColorNavbar/> 
                  <OrderPrintPage/>
              </Box>  
              :
              <Navigate to='/login'/>
          }/>
          <Route path='/order-management/:filter' element={  
              isUserLoggedIn ? 
              <Box>
                  <ColorNavbar/>
                  <OrderManagement/>
              </Box>  
              :
              <Navigate to='/login'/>
          }/>
          <Route path='/upload/profile-image' element={
            isUserLoggedIn ? 
            <React.Fragment>
              <ColorNavbar/>
              <UploadSingleImage/>
            </React.Fragment>  
            :
            <Navigate to='/login'/>
          }/>
          <Route path='/add/address/shipping-address' element={
            isUserLoggedIn ? 
            <React.Fragment>
              <ColorNavbar/>
              <ShippingAddress/>
            </React.Fragment> 
            :
            <Navigate to='/login'/>
          }/> 
          <Route path='/wishlist' element={  
            <React.Fragment>
            <ColorNavbar/>
            <WishlistKong/>
          </React.Fragment>
          }/>
          <Route path='/add/product' element={  
            <React.Fragment>
            <ColorNavbar/> 
            <AddProductForm/>
          </React.Fragment>
          }/>
          <Route path='/add/section' element={  
            <React.Fragment>
            <ColorNavbar/> 
            <AddSection/>
          </React.Fragment>
          }/>
          <Route path='/add/top-category' element={  
            <React.Fragment>
            <ColorNavbar/> 
            <AddTopCategory/>
          </React.Fragment>
          }/>
          <Route path='/add/category' element={  
            <React.Fragment>
            <ColorNavbar/> 
            <AddCategory/>
          </React.Fragment>
          }/>
          <Route path='/add/collection' element={  
            <React.Fragment>
            <ColorNavbar/> 
            <AddCollection/>
          </React.Fragment>
          }/>
          <Route path='/add/brand' element={  
            <React.Fragment>
            <ColorNavbar/> 
            <AddBrand/>
          </React.Fragment>
          }/>
          <Route path='/edit/section' element={  
            <React.Fragment>
            <ColorNavbar/>  
            <EditSection/>
          </React.Fragment>
          }/>
          <Route path='/edit/top-category' element={  
            <React.Fragment>
            <ColorNavbar/> 
            <EditTopCategory/>
          </React.Fragment>
          }/>
          <Route path='/edit/category' element={  
            <React.Fragment>
            <ColorNavbar/> 
            <EditCategory/>
          </React.Fragment>
          }/>
          <Route path='/edit/collection' element={  
            <React.Fragment>
            <ColorNavbar/> 
            <EditCollection/>
          </React.Fragment>
          }/>
          <Route path='/edit/brand' element={  
            <React.Fragment>
            <ColorNavbar/> 
            <EditBrand/>
          </React.Fragment>
          }/>
          <Route path='/delete/section' element={  
            <React.Fragment>
            <ColorNavbar/> 
            <DeleteSection/>
          </React.Fragment>
          }/>
          <Route path='/delete/top-category' element={  
            <React.Fragment>
            <ColorNavbar/> 
            <DeleteTopCategory/>
          </React.Fragment>
          }/>
          <Route path='/delete/category' element={  
            <React.Fragment>
            <ColorNavbar/> 
            <DeleteCategory/>
          </React.Fragment>
          }/>
          <Route path='/delete/collection' element={  
            <React.Fragment>
            <ColorNavbar/> 
            <DeleteCollection/>
          </React.Fragment>
          }/>
          <Route path='/delete/brand' element={  
            <React.Fragment>
            <ColorNavbar/> 
            <DeleteBrand/>
          </React.Fragment>
          }/>
          <Route path='/add/popular-category' element={  
            <React.Fragment>
            <ColorNavbar/> 
            <AddPopularCategory/>
          </React.Fragment>
          }/>
          <Route path='/add/by-category' element={  
            <React.Fragment>
            <ColorNavbar/> 
            <AddByCategory/>
          </React.Fragment>
          }/>
          <Route path='/add/by-brand' element={  
            <React.Fragment>
            <ColorNavbar/> 
            <AddByBrand/>
          </React.Fragment>
          }/>
          <Route path='/edit/popular-category' element={  
            <React.Fragment>
            <ColorNavbar/> 
            <EditPopularCategory/>
          </React.Fragment>
          }/>
          <Route path='/edit/by-category' element={  
            <React.Fragment>
            <ColorNavbar/> 
            <EditByCategory/>
          </React.Fragment>
          }/>
          <Route path='/Edit/by-brand' element={  
            <React.Fragment>
            <ColorNavbar/> 
            <EditByBrand/>
          </React.Fragment>
          }/>
          <Route path='/delete/popular-category' element={  
            <React.Fragment>
            <ColorNavbar/> 
            <DeletePopularCategory/>
          </React.Fragment>
          }/>
          <Route path='/add/banner' element={  
            <React.Fragment>
            <ColorNavbar/> 
            <AddBanner/>
          </React.Fragment>
          }/>
          <Route path='/delete/banner' element={  
            <React.Fragment>
            <ColorNavbar/> 
            <DeleteBanner/>
          </React.Fragment>
          }/>
          <Route path='/edit/banner' element={  
            <React.Fragment>
            <ColorNavbar/> 
            <EditBanner/>
          </React.Fragment>
          }/>
          <Route path='/delete/by-category' element={  
            <React.Fragment>
            <ColorNavbar/>  
            <DeleteByCategory/>
          </React.Fragment>
          }/>
          <Route path='/delete/by-brand' element={  
            <React.Fragment>
            <ColorNavbar/> 
            <DeleteByBrand/>
          </React.Fragment>
          }/>
          <Route path='/edit/product/:ID' element={  
            <React.Fragment>
              <ColorNavbar/> 
              <EditProductForm/>
            </React.Fragment>
          }/> 
          <Route path='/edit/filter/:topCategory/:category/:collection' element={  
            <React.Fragment>
              <ColorNavbar/> 
              <EditFilterNavbar/>
            </React.Fragment>
          }/>
          <Route path='/add-new-specification' element={  
            <React.Fragment>
            <ColorNavbar/> 
            <SpecificationForm/>
          </React.Fragment>
          }/>
          <Route path='/cart' element={  
            <React.Fragment>
            <ColorNavbar/>
            <YourCart/>     
          </React.Fragment>
          }/> 
          <Route path='/checkout' element={
            isUserLoggedIn ? 
            <React.Fragment>
              <ColorNavbar/>
              <AuthComponents>
                <Checkout/>
              </AuthComponents>
            </React.Fragment> 
            :
            <Navigate to='/login'/>
          }/>
          <Route path='/optimize' element={ 
              <Optimize/>
          }/>
          <Route path='/brands/:brandName' element={ 
            <React.Fragment>
              <ColorNavbar/> 
              <DevelopSingleBrandView/>
            </React.Fragment> 
          }/>
          <Route path='/brands' element={ 
            <React.Fragment>
              <ColorNavbar/> 
              <DevelopAllBrandView/>
            </React.Fragment> 
          }/>
          <Route path='/offers' element={ 
            <React.Fragment>
              <ColorNavbar/> 
              <DevelopAllOfferView/>
            </React.Fragment> 
          }/> 
          <Route path='/collection' element={ 
            <React.Fragment>
              <ColorNavbar/> 
              <BrandView/>
            </React.Fragment> 
          }/>
          <Route path='/p/:topCategory/:category/:collection' element={ 
            <React.Fragment>
              <ColorNavbar/> 
              <DevelopCollectionView/>
            </React.Fragment> 
          }/>
          <Route path='/p/:topCategory/:category' element={ 
            <React.Fragment>
              <ColorNavbar/> 
              <DevelopCategoryView/>
            </React.Fragment> 
          }/>
          <Route path='/p/:topCategory' element={ 
            <React.Fragment>
              <ColorNavbar/> 
              <DevelopTopCategoryView/>
            </React.Fragment> 
          }/>
          <Route path='/p/browsing-history' element={ 
            <React.Fragment>
              <ColorNavbar/> 
              <DevelopBrowsingHistoryView/>
            </React.Fragment> 
          }/>
          <Route path='/categories' element={ 
            <React.Fragment>
              <ColorNavbar/>  
              <DevelopCategoryAllView/>
            </React.Fragment> 
          }/>
          <Route path='/search/:searchText' element={ 
            <React.Fragment>
              <ColorNavbar/>  
              <DevelopSearchView/>
            </React.Fragment> 
          }/>
          
          <Route path='/offers/:offerName' element={ 
            <React.Fragment>
              <ColorNavbar/> 
              <SingleOfferView/>
            </React.Fragment> 
          }/>
          <Route path='/blog' element={<h1> /blog Hello world</h1>}/>
          <Route path='/contact-us' element={<h1> /contact Hello world</h1>}/>
          <Route path='/faq' element={<h1> /faq Hello world</h1>}/>
          <Route path='/about-us' element={<h1> /about Hello world</h1>}/>
          <Route path='/privacy-policy' element={<h1> /privacy Hello world</h1>}/>
          <Route path='/terms-and-condition' element={<h1> /terms Hello world</h1>}/>
          <Route path='/:visible__url/:product__id' element={  
            <React.Fragment>
                <ColorNavbar/> 
                <ProductDetails/>
            </React.Fragment>  
          }/>
        </Routes>
        <Footer/>
        </div>
        </div> 
  );
};

export default AppComponents;


