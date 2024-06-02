import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { uid } from 'uid';
import EditFilterNavbar from './Components/EditFilterNavbar/EditFilterNavbar.jsx';
import ColorNavbar from './Components/Navbar/ColorNavbar';
import DevelopAllBrandView from './Components/pages/BrandView/DevelopAllBrandView';
import DevelopCategoryAllView from './Components/pages/BrandView/DevelopAllCategoryView';
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
import AddProductForm from './FinalComponents/pages/Products/AddSingleCustomProduct/AddFrom.jsx';

import AdminHomePages from './FinalComponents/pages/AdminPageDesign/AdminHomePages.jsx';
import AddBanner from './FinalComponents/pages/BannerPage/AddBanner/AddBanner.jsx';
import HomePage from './FinalComponents/pages/LandingPage/HomePage.jsx';
import AddPopularCategory from './FinalComponents/pages/PopularCategoryPage/AddPopularCategory/AddPopularCategory.jsx';

import { Toaster } from 'react-hot-toast';
import Footer from './FinalComponents/PagesComponents/Footer.jsx';
import RootPageUpMaterial from './FinalComponents/RootPageUpMaterial/RootPageUpMaterial.jsx';
import DeleteBanner from './FinalComponents/pages/BannerPage/DeleteBanner/DeleteBanner.jsx';
import EditBanner from './FinalComponents/pages/BannerPage/EditBanner/EditBanner.jsx';
import AddBrand from './FinalComponents/pages/BrandPage/AddBrand/AddBrand.jsx';
import DeleteBrand from './FinalComponents/pages/BrandPage/DeleteBrand/DeleteBrand.jsx';
import EditBrand from './FinalComponents/pages/BrandPage/EditBrand/EditBrand.jsx';
import CartPage from './FinalComponents/pages/CartPage/CartPage.jsx';
import AddCategory from './FinalComponents/pages/CategoryPage/Add/AddCategory.jsx';
import DeleteCategory from './FinalComponents/pages/CategoryPage/Delete/DeleteCategory.jsx';
import EditCategory from './FinalComponents/pages/CategoryPage/Edit/EditCategory.jsx';
import Checkout from './FinalComponents/pages/Checkout/Checkout.jsx';
import AddCollection from './FinalComponents/pages/CollectionPage/Add/AddCollection.jsx';
import DeleteCollection from './FinalComponents/pages/CollectionPage/Delete/DeleteCollection.jsx';
import EditCollection from './FinalComponents/pages/CollectionPage/Edit/EditCollection.jsx';
import LoginPage from './FinalComponents/pages/LoginPage/LoginPage.jsx';
import EditOfferPage from './FinalComponents/pages/Offer/EditOfferProduct/EditOfferPage.jsx';
import DeletePopularCategory from './FinalComponents/pages/PopularCategoryPage/DeletePopularCategory/DeletePopularCategory.jsx';
import EditPopularCategory from './FinalComponents/pages/PopularCategoryPage/EditPopularCategory/EditPopularCategory.jsx';
import AddMultipleProduct from './FinalComponents/pages/Products/AddMultipleProduct/Add/AddMultipleProduct.jsx';
import AddSimilarProduct from './FinalComponents/pages/Products/AddSimilarProduct/AddSimilarProduct.jsx';
import AddSingleObjectProduct from './FinalComponents/pages/Products/AddSingleProduct/Add/AddSingleProduct.jsx';
import EditProductForm from './FinalComponents/pages/Products/EditProduct/EditProduct.jsx';
import Profile from './FinalComponents/pages/Profile/Profile.jsx';
import AddSection from './FinalComponents/pages/SectionPage/Add/AddSection.jsx';
import DeleteSection from './FinalComponents/pages/SectionPage/Delete/DeleteSection.jsx';
import EditSection from './FinalComponents/pages/SectionPage/Edit/EditSection.jsx';
import ShippingAddress from './FinalComponents/pages/ShippingAddress/ShippingAddress.jsx';
import EditShippingAndPayment from './FinalComponents/pages/ShippingAndPayment/EditShippingAndPayment.jsx';
import AddShopByBrand from './FinalComponents/pages/ShopByBrandPage/Add/AddShopByBrand.jsx';
import DeleteShopByBrand from './FinalComponents/pages/ShopByBrandPage/Delete/DeleteByBrand.jsx';
import EditShopByBrand from './FinalComponents/pages/ShopByBrandPage/Edit/EditShopByBrand.jsx';
import AddShopByCategory from './FinalComponents/pages/ShopByCategory/Add/AddShopByCategory.jsx';
import DeleteShopByCategory from './FinalComponents/pages/ShopByCategory/Delete/DeleteByCategory.jsx';
import EditShopByCategory from './FinalComponents/pages/ShopByCategory/Edit/EditShopByCategory.jsx';
import SignupPage from './FinalComponents/pages/SignUpPage/SignupPage.jsx';
import AddTopCategory from './FinalComponents/pages/TopCategoryPage/Add/AddTopCategory.jsx';
import DeleteTopCategory from './FinalComponents/pages/TopCategoryPage/Delete/DeleteTopCategory.jsx';
import EditTopCategory from './FinalComponents/pages/TopCategoryPage/Edit/EditTopCategory.jsx';
import UploadSingleImage from './FinalComponents/pages/Uploads/UploadSingleImage.jsx';
import MyWishlistPage from './FinalComponents/pages/WishlistPage/WishlistPage.jsx';
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
        <Routes> 
          <Route
            path='/'
            element={
            <React.Fragment> 
              <RootPageUpMaterial/>
              <HomePage/>
              <Footer/>
            </React.Fragment>  
            }
          />
          <Route
            path='/admin/admin/admin/admin'
            element={ 
            <AdminHomePages/>
            }
          />
          <Route path='/admin/add/banner' element={  
            <React.Fragment> 
              <AddBanner/>
          </React.Fragment>
          }/>
          <Route path='/admin/add/popular-category' element={  
            <React.Fragment> 
              <AddPopularCategory/>
          </React.Fragment>
          }/>
          <Route path='/admin/add/brand' element={  
            <React.Fragment> 
            <AddBrand/>
          </React.Fragment>
          }/>
          <Route path='/admin/add/shop-by-brand' element={  
            <React.Fragment>  
              <AddShopByBrand/>
            </React.Fragment>
          }/>
          <Route path='/admin/add/shop-by-category' element={  
            <React.Fragment>  
              <AddShopByCategory/>
            </React.Fragment>
          }/>
          <Route path='/admin/add/collection' element={  
            <React.Fragment> 
              <AddCollection/>
          </React.Fragment>
          }/>
          <Route path='/admin/add/category' element={  
            <React.Fragment>   
              <AddCategory/>
            </React.Fragment>
          }/>
          <Route path='/admin/add/top-category' element={  
            <React.Fragment>  
              <AddTopCategory/>
          </React.Fragment>
          }/> 
          <Route path='/admin/add/section' element={  
            <React.Fragment>  
              <AddSection/>
            </React.Fragment>
          }/>
          <Route path='/admin/edit/banner' element={  
            <React.Fragment> 
              <EditBanner/>
            </React.Fragment>
          }/> 
          <Route path='/admin/edit/popular-category' element={  
            <React.Fragment>  
              <EditPopularCategory/>
            </React.Fragment>
          }/>
          <Route path='/admin/edit/brand' element={  
            <React.Fragment>  
              <EditBrand/>
            </React.Fragment>
          }/>
          <Route path='/admin/edit/shop-by-brand' element={  
            <React.Fragment>   
              <EditShopByBrand/>
            </React.Fragment>
          }/>
          <Route path='/admin/edit/shop-by-category' element={  
            <React.Fragment> 
              <EditShopByCategory/>
            </React.Fragment>
          }/>
          <Route path='/admin/edit/collection' element={  
            <React.Fragment> 
              <EditCollection/>
            </React.Fragment>
          }/>
          <Route path='/admin/edit/category' element={  
            <React.Fragment>  
              <EditCategory/>
            </React.Fragment>
          }/>
          <Route path='/admin/edit/top-category' element={  
            <React.Fragment> 
              <EditTopCategory/>
            </React.Fragment>
          }/>
          <Route path='/admin/edit/section' element={  
            <React.Fragment>  
              <EditSection/>
            </React.Fragment>
          }/>
          <Route path='/admin/edit/shipping-and-payment' element={  
            <React.Fragment>  
            <Toaster/>
            <EditShippingAndPayment/>
          </React.Fragment>
          }/>
          <Route path='/admin/edit/shipping-address' element={
            isUserLoggedIn ? 
              <ShippingAddress/>
            :
            <Navigate to='/login'/>
          }/>
          <Route path='/admin/delete/banner' element={  
            <React.Fragment>  
              <DeleteBanner/>
            </React.Fragment>
          }/>
          <Route path='/admin/delete/popular-category' element={  
            <React.Fragment>  
              <DeletePopularCategory/>
          </React.Fragment>
          }/>
          <Route path='/admin/delete/brand' element={  
            <React.Fragment>  
              <DeleteBrand/>
            </React.Fragment>
          }/>
          <Route path='/admin/delete/shop-by-brand' element={  
            <React.Fragment> 
              <DeleteShopByBrand/>
            </React.Fragment>
          }/>
          <Route path='/admin/delete/shop-by-category' element={  
            <React.Fragment>  
              <DeleteShopByCategory/>
            </React.Fragment>
          }/>
          <Route path='/admin/delete/collection' element={  
            <React.Fragment>  
              <DeleteCollection/>
            </React.Fragment>
          }/>
          <Route path='/admin/delete/category' element={  
            <React.Fragment>  
              <DeleteCategory/>
            </React.Fragment>
          }/>
          <Route path='/admin/delete/top-category' element={  
            <React.Fragment>  
              <DeleteTopCategory/>
            </React.Fragment>
          }/>
          <Route path='/admin/delete/section' element={  
            <React.Fragment>  
              <DeleteSection/>
            </React.Fragment>
          }/>
          <Route path='/admin/edit/profile-image' element={
            isUserLoggedIn ?  
                <UploadSingleImage/>
            :
            <Navigate to='/login'/>
          }/> 
          <Route
            path='/login'
            element={ 
              <LoginPage/>
            }
          /> 
          <Route
            path='/signup'
            element={  
              <SignupPage/>
            }
          />
          <Route path='/profile' element={  
              isUserLoggedIn ? 
              <Box> 
                  <RootPageUpMaterial/> 
                    <Profile/>
                  <Footer/>
              </Box>  
              :
              <Navigate to='/login'/>
          }/>
          <Route path='/checkout' element={
            isUserLoggedIn ? 
            <React.Fragment> 
            <RootPageUpMaterial/>
              <AuthComponents> 
                <Checkout/>
              </AuthComponents>
            </React.Fragment> 
            :
            <Navigate to='/login'/>
          }/>
          <Route path='/cart' element={  
            <React.Fragment> 
              <RootPageUpMaterial/> 
              <CartPage/>
          </React.Fragment>
          }/>
          <Route path='/wishlist' element={  
            <React.Fragment> 
            <RootPageUpMaterial/>  
            <MyWishlistPage/>
          </React.Fragment>
          }/> 
          <Route path='/admin/add/product' element={  
            <React.Fragment> 
            <Toaster/>
            <AddProductForm/>
          </React.Fragment>
          }/>
          <Route path='/admin/add/similar-product/:ID' element={  
            <React.Fragment> 
            
            <Toaster/>
            <AddSimilarProduct/>
          </React.Fragment>
          }/>
          <Route path='/admin/edit/product/:ID' element={  
            <React.Fragment> 
              <Toaster/>
              <EditProductForm/>
            </React.Fragment>
          }/>   
          <Route path='/admin/add/array-product' element={  
            <React.Fragment>  
              <Toaster/>
              <AddMultipleProduct/>
          </React.Fragment>
          }/>
          <Route path='/admin/add/object-product' element={  
            <React.Fragment>  
              <Toaster/>
              <AddSingleObjectProduct/>
          </React.Fragment>
          }/>  
          <Route path='/admin/edit/offer/:ID' element={ 
            <React.Fragment> 
                <EditOfferPage/>
            </React.Fragment> 
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
          <Route path='/edit/filter/:topCategory/:category/:collection' element={  
            <React.Fragment>
              <ColorNavbar/> 
              <EditFilterNavbar/>
            </React.Fragment>
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
        {/*<Footer/>*/}
        </div>
        </div> 
  );
};

export default AppComponents;


