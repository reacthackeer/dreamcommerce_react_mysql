import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { uid } from 'uid';
import AuthComponents from './FinalComponents/PagesComponents/AuthComponents.jsx';
import CheckSubModeratorLoggedIn from './FinalComponents/PagesComponents/CheckSubModeratorLoggedIn.jsx';
import Footer from './FinalComponents/PagesComponents/Footer.jsx';
import RootPageUpMaterial from './FinalComponents/RootPageUpMaterial/RootPageUpMaterial.jsx';
import AdminAddAdmin from './FinalComponents/pages/AdminAdminPage/Add/AddAdmin.jsx';
import DeleteAdmin from './FinalComponents/pages/AdminAdminPage/Delete/DeleteAdmin.jsx';
import EditAdminPage from './FinalComponents/pages/AdminAdminPage/Edit/EditAdmin.jsx';
import AddBanner from './FinalComponents/pages/BannerPage/AddBanner/AddBanner.jsx';
import DeleteBanner from './FinalComponents/pages/BannerPage/DeleteBanner/DeleteBanner.jsx';
import EditBanner from './FinalComponents/pages/BannerPage/EditBanner/EditBanner.jsx';
import AddBrand from './FinalComponents/pages/BrandPage/AddBrand/AddBrand.jsx';
import DeleteBrand from './FinalComponents/pages/BrandPage/DeleteBrand/DeleteBrand.jsx';
import EditBrand from './FinalComponents/pages/BrandPage/EditBrand/EditBrand.jsx';
import CartPage from './FinalComponents/pages/CartPage/CartPage.jsx';
import AddCategory from './FinalComponents/pages/CategoryPage/Add/AddCategory.jsx';
import DeleteCategory from './FinalComponents/pages/CategoryPage/Delete/DeleteCategory.jsx';
import EditCategory from './FinalComponents/pages/CategoryPage/Edit/EditCategory.jsx';
import EditChangePassword from './FinalComponents/pages/ChangePassword/Edit/EditChangePassword.jsx';
import Checkout from './FinalComponents/pages/Checkout/Checkout.jsx';
import AddCollection from './FinalComponents/pages/CollectionPage/Add/AddCollection.jsx';
import DeleteCollection from './FinalComponents/pages/CollectionPage/Delete/DeleteCollection.jsx';
import EditCollection from './FinalComponents/pages/CollectionPage/Edit/EditCollection.jsx';
import EditContactUs from './FinalComponents/pages/ContactUs/Edit/EditContactUs.jsx';
import AddCourier from './FinalComponents/pages/Courier/Add/AddCourier.jsx';
import DeleteCourier from './FinalComponents/pages/Courier/Delete/DeleteCourier.jsx';
import EditCourier from './FinalComponents/pages/Courier/Edit/EditCourier.jsx';
import AddDeliveryMan from './FinalComponents/pages/DeliveryMan/Add/AddDeliveryMan.jsx';
import DeleteDeliveryMan from './FinalComponents/pages/DeliveryMan/Delete/DeleteCourier.jsx';
import EditDeliveryMan from './FinalComponents/pages/DeliveryMan/Edit/EditDeliveryMan.jsx';
import EditFilterNavbar from './FinalComponents/pages/EditFilterNavbar/EditFilterNavbar.jsx';
import HomePage from './FinalComponents/pages/LandingPage/HomePage.jsx';
import LoginPage from './FinalComponents/pages/LoginPage/LoginPage.jsx';
import AddModerator from './FinalComponents/pages/Moderator/Add/AddModerator.jsx';
import DeleteModerator from './FinalComponents/pages/Moderator/Delete/DeleteSubSeller.jsx';
import EditModerator from './FinalComponents/pages/Moderator/Edit/EditModerator.jsx';
import EditOfferPage from './FinalComponents/pages/Offer/EditOfferProduct/EditOfferPage.jsx';
import OrderManagement from './FinalComponents/pages/OrderManagement/OrderManagement.jsx';
import OrderPrintPage from './FinalComponents/pages/OrderPrintPage/OrderPrintPage.jsx';
import AddPopularCategory from './FinalComponents/pages/PopularCategoryPage/AddPopularCategory/AddPopularCategory.jsx';
import DeletePopularCategory from './FinalComponents/pages/PopularCategoryPage/DeletePopularCategory/DeletePopularCategory.jsx';
import EditPopularCategory from './FinalComponents/pages/PopularCategoryPage/EditPopularCategory/EditPopularCategory.jsx';
import AddMultipleProduct from './FinalComponents/pages/Products/AddMultipleProduct/Add/AddMultipleProduct.jsx';
import AddSimilarProduct from './FinalComponents/pages/Products/AddSimilarProduct/AddSimilarProduct.jsx';
import AddProductForm from './FinalComponents/pages/Products/AddSingleCustomProduct/AddFrom.jsx';
import AddSingleObjectProduct from './FinalComponents/pages/Products/AddSingleProduct/Add/AddSingleProduct.jsx';
import EditProductForm from './FinalComponents/pages/Products/EditProduct/EditProduct.jsx';
import Profile from './FinalComponents/pages/Profile/Profile.jsx';
import AddSection from './FinalComponents/pages/SectionPage/Add/AddSection.jsx';
import DeleteSection from './FinalComponents/pages/SectionPage/Delete/DeleteSection.jsx';
import EditSection from './FinalComponents/pages/SectionPage/Edit/EditSection.jsx';
import AddSeller from './FinalComponents/pages/SellerPage/Add/AddSeller.jsx';
import DeleteSeller from './FinalComponents/pages/SellerPage/Delete/DeleteSeller.jsx';
import EditSeller from './FinalComponents/pages/SellerPage/Edit/EditSeller.jsx';
import ShippingAddress from './FinalComponents/pages/ShippingAddress/ShippingAddress.jsx';
import EditShippingAndPayment from './FinalComponents/pages/ShippingAndPayment/EditShippingAndPayment.jsx';
import AddShopByBrand from './FinalComponents/pages/ShopByBrandPage/Add/AddShopByBrand.jsx';
import DeleteShopByBrand from './FinalComponents/pages/ShopByBrandPage/Delete/DeleteByBrand.jsx';
import EditShopByBrand from './FinalComponents/pages/ShopByBrandPage/Edit/EditShopByBrand.jsx';
import AddShopByCategory from './FinalComponents/pages/ShopByCategory/Add/AddShopByCategory.jsx';
import DeleteShopByCategory from './FinalComponents/pages/ShopByCategory/Delete/DeleteByCategory.jsx';
import EditShopByCategory from './FinalComponents/pages/ShopByCategory/Edit/EditShopByCategory.jsx';
import SignupPage from './FinalComponents/pages/SignUpPage/SignupPage.jsx';
import EditStoreInformation from './FinalComponents/pages/StoreInformation/Edit/EditStoreInformation.jsx';
import AddSubAdmin from './FinalComponents/pages/SubAdminPage/Add/AddSubAdmin.jsx';
import DeleteSubAdmin from './FinalComponents/pages/SubAdminPage/Delete/DeleteSubAdmin.jsx';
import EditSubAdmin from './FinalComponents/pages/SubAdminPage/Edit/EditSubAdmin.jsx';
import AddSubModerator from './FinalComponents/pages/SubModerator/Add/AddSubModerator.jsx';
import DeleteSubModerator from './FinalComponents/pages/SubModerator/Delete/DeleteSubModerator.jsx';
import EditSubModerator from './FinalComponents/pages/SubModerator/Edit/EditSubModerator.jsx';
import AddSubSeller from './FinalComponents/pages/SubSellerPage/Add/AddSubSeller.jsx';
import DeleteSubSeller from './FinalComponents/pages/SubSellerPage/Delete/DeleteSubSeller.jsx';
import EditSubSeller from './FinalComponents/pages/SubSellerPage/Edit/EditSubSeller.jsx';
import AddTopCategory from './FinalComponents/pages/TopCategoryPage/Add/AddTopCategory.jsx';
import DeleteTopCategory from './FinalComponents/pages/TopCategoryPage/Delete/DeleteTopCategory.jsx';
import EditTopCategory from './FinalComponents/pages/TopCategoryPage/Edit/EditTopCategory.jsx';
import UploadSingleImage from './FinalComponents/pages/Uploads/UploadSingleImage.jsx';
import AddUser from './FinalComponents/pages/User/Add/AddUser.jsx';
import DeleteUser from './FinalComponents/pages/User/Delete/DeleteUser.jsx';
import EditUser from './FinalComponents/pages/User/Edit/EditUser.jsx';
import MyWishlistPage from './FinalComponents/pages/WishlistPage/WishlistPage.jsx';
import AllCategoryView from './FinalComponents/pages/views/AllCategoryView/AllCategoryView.jsx';
import SingleBrowsingHistoryView from './FinalComponents/pages/views/BrowsingHistoryView/SingleBrowsingHistoryView.jsx';
import SingleOfferView from './FinalComponents/pages/views/OfferProductView/SingleOfferView.jsx';
import ProductDetailsView from './FinalComponents/pages/views/ProductDetailsView/ProductDetailsView.jsx';
import SearchProductView from './FinalComponents/pages/views/SearchProductView/SearchProductView.jsx';
import SingleBrandProductViews from './FinalComponents/pages/views/SingleBrandProductsViews/SingleBrandProductsViews.jsx';
import SingleCategoryView from './FinalComponents/pages/views/SingleCategoryView/SingleCategoryView.jsx';
import SingleCollectionView from './FinalComponents/pages/views/SingleCollectionView/SingleCollectionView.jsx';
import TopCategoryView from './FinalComponents/pages/views/TopCategoryView/TopCategoryView.jsx';
import ViewAllBrandItems from './FinalComponents/pages/views/ViewAllBrand/ViewAllBrandItems.jsx';
import useModeratorCheck from './hooks/moderatorCheck.jsx';

const AppComponents = () => { 

  // todo do auth components work
  const location = useLocation(); 
  const isAdminLoggedIn = useModeratorCheck({graterThanRole: 2});
  const isSubAdminLoggedIn = useModeratorCheck({graterThanRole: 3});
  const isSellerLoggedIn = useModeratorCheck({graterThanRole: 4});
  const isSubSellerLoggedIn = useModeratorCheck({graterThanRole: 5}); 
  const isSubModeratorLoggedIn = useModeratorCheck({graterThanRole: 7}); 
  const isUserLoggedIn = useModeratorCheck({graterThanRole: 10});
  
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
          <Route path='/admin/add/banner' element={  
            <CheckSubModeratorLoggedIn> 
              <Toaster/>
              <AddBanner/>
          </CheckSubModeratorLoggedIn>
          }/> 
          <Route path='/admin/add/popular-category' element={  
            <CheckSubModeratorLoggedIn> 
              <Toaster/>
              <AddPopularCategory/>
          </CheckSubModeratorLoggedIn>
          }/>
          <Route path='/admin/add/brand' element={  
            <CheckSubModeratorLoggedIn> 
              <Toaster/>
            <AddBrand/>
          </CheckSubModeratorLoggedIn>
          }/>
          <Route path='/admin/add/shop-by-brand' element={  
            <CheckSubModeratorLoggedIn> 
              <Toaster/> 
              <AddShopByBrand/>
            </CheckSubModeratorLoggedIn>
          }/>
          <Route path='/admin/add/shop-by-category' element={  
            <CheckSubModeratorLoggedIn>  
              <Toaster/>
              <AddShopByCategory/>
            </CheckSubModeratorLoggedIn>
          }/>
          <Route path='/admin/add/collection' element={  
            <CheckSubModeratorLoggedIn> 
              <Toaster/>
              <AddCollection/>
          </CheckSubModeratorLoggedIn>
          }/>
          <Route path='/admin/add/category' element={  
            <CheckSubModeratorLoggedIn>  
              <Toaster/> 
              <AddCategory/>
            </CheckSubModeratorLoggedIn>
          }/>
          <Route path='/admin/add/top-category' element={  
            <CheckSubModeratorLoggedIn>  
              <Toaster/>
              <AddTopCategory/>
          </CheckSubModeratorLoggedIn>
          }/> 
          <Route path='/admin/add/section' element={  
            <CheckSubModeratorLoggedIn>  
              <Toaster/>
              <AddSection/>
            </CheckSubModeratorLoggedIn>
          }/>
          <Route path='/admin/edit/banner' element={  
            <CheckSubModeratorLoggedIn> 
              <Toaster/>
              <EditBanner/>
            </CheckSubModeratorLoggedIn>
          }/> 
          <Route path='/admin/edit/popular-category' element={  
            <CheckSubModeratorLoggedIn>  
              <Toaster/>
              <EditPopularCategory/>
            </CheckSubModeratorLoggedIn>
          }/>
          <Route path='/admin/edit/brand' element={  
            <CheckSubModeratorLoggedIn>  
              <Toaster/>
              <EditBrand/>
            </CheckSubModeratorLoggedIn>
          }/>
          <Route path='/admin/edit/shop-by-brand' element={  
            <CheckSubModeratorLoggedIn>   
              <Toaster/>
              <EditShopByBrand/>
            </CheckSubModeratorLoggedIn>
          }/>
          <Route path='/admin/edit/shop-by-category' element={  
            <CheckSubModeratorLoggedIn> 
              <Toaster/>
              <EditShopByCategory/>
            </CheckSubModeratorLoggedIn>
          }/>
          <Route path='/admin/edit/collection' element={  
            <CheckSubModeratorLoggedIn> 
              <Toaster/>
              <EditCollection/>
            </CheckSubModeratorLoggedIn>
          }/>
          <Route path='/admin/edit/category' element={  
            <CheckSubModeratorLoggedIn>  
              <Toaster/>
              <EditCategory/>
            </CheckSubModeratorLoggedIn>
          }/>
          <Route path='/admin/edit/top-category' element={  
            <CheckSubModeratorLoggedIn> 
              <Toaster/>
              <EditTopCategory/>
            </CheckSubModeratorLoggedIn>
          }/>
          <Route path='/admin/edit/section' element={  
            <CheckSubModeratorLoggedIn>  
              <Toaster/>
              <EditSection/>
            </CheckSubModeratorLoggedIn>
          }/> 
          <Route path='/admin/delete/banner' element={  
            <CheckSubModeratorLoggedIn>  
              <Toaster/>
              <DeleteBanner/>
            </CheckSubModeratorLoggedIn>
          }/>
          <Route path='/admin/delete/popular-category' element={  
            <CheckSubModeratorLoggedIn>  
              <Toaster/>
              <DeletePopularCategory/>
          </CheckSubModeratorLoggedIn>
          }/>
          <Route path='/admin/delete/brand' element={  
            <CheckSubModeratorLoggedIn>  
              <Toaster/>
              <DeleteBrand/>
            </CheckSubModeratorLoggedIn>
          }/>
          <Route path='/admin/delete/shop-by-brand' element={  
            <CheckSubModeratorLoggedIn> 
              <Toaster/>
              <DeleteShopByBrand/>
            </CheckSubModeratorLoggedIn>
          }/>
          <Route path='/admin/delete/shop-by-category' element={  
            <CheckSubModeratorLoggedIn>  
              <Toaster/>
              <DeleteShopByCategory/>
            </CheckSubModeratorLoggedIn>
          }/>
          <Route path='/admin/delete/collection' element={  
            <CheckSubModeratorLoggedIn>  
              <Toaster/>
              <DeleteCollection/>
            </CheckSubModeratorLoggedIn>
          }/>
          <Route path='/admin/delete/category' element={  
            <CheckSubModeratorLoggedIn>  
              <Toaster/>
              <DeleteCategory/>
            </CheckSubModeratorLoggedIn>
          }/>
          <Route path='/admin/delete/top-category' element={  
            <CheckSubModeratorLoggedIn>  
              <Toaster/>
              <DeleteTopCategory/>
            </CheckSubModeratorLoggedIn>
          }/>
          <Route path='/admin/delete/section' element={  
            <CheckSubModeratorLoggedIn>  
              <Toaster/>
              <DeleteSection/>
            </CheckSubModeratorLoggedIn>
          }/>
          <Route path='/admin/add/product' element={  
            <CheckSubModeratorLoggedIn> 
            <Toaster/>
            <AddProductForm/>
          </CheckSubModeratorLoggedIn>
          }/>
          <Route path='/admin/add/similar-product/:ID' element={  
            <CheckSubModeratorLoggedIn>  
            <Toaster/>
            <AddSimilarProduct/>
          </CheckSubModeratorLoggedIn>
          }/>
          <Route path='/admin/edit/product/:ID' element={  
            <CheckSubModeratorLoggedIn> 
              <Toaster/>
              <EditProductForm/>
            </CheckSubModeratorLoggedIn>
          }/>   
          <Route path='/admin/add/array-product' element={  
            <CheckSubModeratorLoggedIn>  
              <Toaster/>
              <AddMultipleProduct/>
          </CheckSubModeratorLoggedIn>
          }/>
          <Route path='/admin/add/object-product' element={  
            <CheckSubModeratorLoggedIn>  
              <Toaster/>
              <AddSingleObjectProduct/>
          </CheckSubModeratorLoggedIn>
          }/>  
          <Route path='/admin/edit/offer/:ID' element={ 
            <CheckSubModeratorLoggedIn> 
                <Toaster/>
                <EditOfferPage/>
            </CheckSubModeratorLoggedIn> 
          }/>  
          <Route path='/admin/edit/shipping-and-payment' element={  
            isSubSellerLoggedIn ? 
              <React.Fragment>  
                <Toaster/>
                <EditShippingAndPayment/>
              </React.Fragment>
            : 
              <Navigate to='/profile'/>
          }/>
          <Route path='/admin/edit/shipping-address' element={
            isUserLoggedIn ? 
            <React.Fragment>
              <Toaster/>
              <ShippingAddress/>
            </React.Fragment>
            :
            <Navigate to='/login'/>
          }/>
          <Route path='/admin/edit/profile-image' element={
            isUserLoggedIn ?  
              <React.Fragment>
                <Toaster/>
                <UploadSingleImage/>
              </React.Fragment>
            :
            <Navigate to='/login'/>
          }/>  
          <Route path='/login'
            element={ 
                <React.Fragment>
                  <Toaster/>
                  <LoginPage/>
                </React.Fragment>
              }
          /> 
          <Route path='/signup' element={  
            <React.Fragment>
              <Toaster/>
              <SignupPage/>
            </React.Fragment>
            }
          />
          <Route path='/profile' element={  
              isUserLoggedIn ? 
              <AuthComponents> 
                  <RootPageUpMaterial/> 
                    <Profile/>
                  <Footer/>
              </AuthComponents>  
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
          <Route path='/admin/edit/store-information' element={
            isAdminLoggedIn ?
            <React.Fragment> 
                <Toaster/>
                <EditStoreInformation/>
            </React.Fragment> 
            : <Navigate to='/profile'/>
          }/> 
          <Route path='/admin/edit/contact-us' element={ 
            isAdminLoggedIn ?
            <React.Fragment> 
                <Toaster/> 
                <EditContactUs/>
            </React.Fragment> 
            :
            <Navigate to='/profile'/>
          }/> 
          <Route path='/admin/edit/change-password' element={ 
            isUserLoggedIn ?
            <React.Fragment> 
                <Toaster/> 
                <EditChangePassword/>
            </React.Fragment> 
            :
            <Navigate to='/login'/>
          }/> 
          <Route path='/admin/add/admin' element={ 
            isAdminLoggedIn ?
            <React.Fragment> 
                <Toaster/>  
                <AdminAddAdmin/>
            </React.Fragment> 
              :
            <Navigate to='/profile'/>
          }/> 
          <Route path='/admin/edit/admin' element={ 
            isAdminLoggedIn ?
            <React.Fragment> 
                <Toaster/>  
                <EditAdminPage/>
            </React.Fragment> 
              :
            <Navigate to='/profile'/> 
          }/> 
          <Route path='/admin/delete/admin' element={ 
            isAdminLoggedIn ?
            <React.Fragment> 
                <Toaster/>  
                <DeleteAdmin/>
            </React.Fragment> 
              :
            <Navigate to='/profile'/> 
          }/> 
          <Route path='/admin/add/sub-admin' element={ 
            isSubAdminLoggedIn ?
            <React.Fragment> 
                <Toaster/>  
                <AddSubAdmin/>
            </React.Fragment> 
              :
            <Navigate to='/profile'/>  
          }/> 
          <Route path='/admin/edit/sub-admin' element={ 
            isSubAdminLoggedIn ?
            <React.Fragment> 
                <Toaster/>  
                <EditSubAdmin/>
            </React.Fragment> 
              :
            <Navigate to='/profile'/>  
          }/> 
          <Route path='/admin/delete/sub-admin' element={ 
            isSubAdminLoggedIn ?
            <React.Fragment> 
                <Toaster/>  
                <DeleteSubAdmin/>
            </React.Fragment> 
              :
            <Navigate to='/profile'/>  
          }/>  
          <Route path='/admin/delete/seller' element={ 
            isSubAdminLoggedIn ?
            <React.Fragment> 
                <Toaster/>  
                <DeleteSeller/>
            </React.Fragment> 
              :
            <Navigate to='/profile'/>  
          }/>
          <Route path='/admin/edit/seller' element={ 
            isSubAdminLoggedIn ?
            <React.Fragment> 
                <Toaster/>   
                <EditSeller/>
            </React.Fragment> 
              :
            <Navigate to='/profile'/>  
          }/>
          <Route path='/admin/add/seller' element={ 
            isSubAdminLoggedIn ?
            <React.Fragment> 
                <Toaster/>   
                <AddSeller/>
            </React.Fragment> 
              :
            <Navigate to='/profile'/>   
          }/>
          <Route path='/admin/add/sub-seller' element={ 
            isSellerLoggedIn ?
            <React.Fragment> 
                <Toaster/>   
                <AddSubSeller/>
            </React.Fragment> 
              :
            <Navigate to='/profile'/>  
          }/>
          <Route path='/admin/edit/sub-seller' element={ 
            isSellerLoggedIn ?
            <React.Fragment> 
                <Toaster/>   
                <EditSubSeller/>
            </React.Fragment> 
              :
            <Navigate to='/profile'/>  
          }/>
          <Route path='/admin/delete/sub-seller' element={ 
            isSellerLoggedIn ?
            <React.Fragment> 
                <Toaster/>   
                <DeleteSubSeller/>
            </React.Fragment> 
              :
            <Navigate to='/profile'/>  
          }/>
          <Route path='/admin/add/moderator' element={ 
            isSellerLoggedIn ?
            <React.Fragment> 
                <Toaster/>   
                <AddModerator/>
            </React.Fragment> 
              :
            <Navigate to='/profile'/>  
          }/>
          <Route path='/admin/delete/moderator' element={ 
            isSellerLoggedIn ?
            <React.Fragment> 
                <Toaster/>   
                <DeleteModerator/>
            </React.Fragment> 
              :
            <Navigate to='/profile'/>  
          }/>
          <Route path='/admin/edit/moderator' element={ 
            isSellerLoggedIn ?
            <React.Fragment> 
                <Toaster/>   
                <EditModerator/>
            </React.Fragment> 
              :
            <Navigate to='/profile'/>  
          }/>
          <Route path='/admin/add/sub-moderator' element={ 
            isSubSellerLoggedIn ?
            <React.Fragment> 
                <Toaster/>   
                <AddSubModerator/>
            </React.Fragment> 
              :
            <Navigate to='/profile'/>  
          }/>
          <Route path='/admin/edit/sub-moderator' element={ 
            isSubSellerLoggedIn ?
            <React.Fragment> 
                <Toaster/>   
                <EditSubModerator/>
            </React.Fragment> 
              :
            <Navigate to='/profile'/>  
          }/>
          <Route path='/admin/delete/sub-moderator' element={ 
            isSubSellerLoggedIn ?
            <React.Fragment> 
                <Toaster/>   
                <DeleteSubModerator/>
            </React.Fragment> 
              :
            <Navigate to='/profile'/>  
          }/>
          <Route path='/admin/add/courier' element={ 
            isSubModeratorLoggedIn ?
            <React.Fragment> 
                <Toaster/>   
                <AddCourier/>
            </React.Fragment> 
              :
            <Navigate to='/profile'/>  
          }/>
          <Route path='/admin/edit/courier' element={ 
            isSubModeratorLoggedIn ?
            <React.Fragment> 
                <Toaster/>   
                <EditCourier/>
            </React.Fragment> 
              :
            <Navigate to='/profile'/>  
          }/>
          <Route path='/admin/delete/courier' element={ 
            isSubModeratorLoggedIn ?
            <React.Fragment> 
                <Toaster/>   
                <DeleteCourier/>
            </React.Fragment> 
              :
            <Navigate to='/profile'/>  
          }/>
          <Route path='/admin/delete/delivery-man' element={ 
            isSubModeratorLoggedIn ?
            <React.Fragment> 
                <Toaster/>   
                <DeleteDeliveryMan/>
            </React.Fragment> 
              :
            <Navigate to='/profile'/>  
          }/>
          <Route path='/admin/edit/delivery-man' element={ 
            isSubModeratorLoggedIn ?
            <React.Fragment> 
                <Toaster/>   
                <EditDeliveryMan/>
            </React.Fragment> 
              :
            <Navigate to='/profile'/>  
          }/>
          <Route path='/admin/add/delivery-man' element={ 
            isSubModeratorLoggedIn ?
            <React.Fragment> 
                <Toaster/>   
                <AddDeliveryMan/>
            </React.Fragment> 
              :
            <Navigate to='/profile'/>  
          }/>
          <Route path='/admin/add/users' element={ 
            isSubModeratorLoggedIn ?
            <React.Fragment> 
                <Toaster/>   
                <AddUser/>
            </React.Fragment> 
              :
            <Navigate to='/profile'/>  
          }/> 
          <Route path='/admin/edit/users' element={ 
            isSubModeratorLoggedIn ?
            <React.Fragment> 
                <Toaster/>   
                <EditUser/>
            </React.Fragment> 
              :
            <Navigate to='/profile'/>  
          }/>
          <Route path='/admin/delete/users' element={ 
            isSubModeratorLoggedIn ?
            <React.Fragment> 
                <Toaster/>   
                <DeleteUser/>
            </React.Fragment> 
              :
            <Navigate to='/profile'/>  
          }/>
          <Route path='/order-management/print/:user__id' element={  
              isSubModeratorLoggedIn ? 
              <Box> 
                  <RootPageUpMaterial/>
                  <OrderPrintPage/>
              </Box>  
              :
              <Navigate to='/login'/>
          }/>  
          <Route path='/order-management/:filter' element={  
              isSubModeratorLoggedIn ? 
              <Box>
                  <RootPageUpMaterial/> 
                  <OrderManagement/>
              </Box>  
              :
              <Navigate to='/login'/>
          }/>  
          <Route path='/edit/filter/:topCategory/:category/:collection' element={  
            isSubModeratorLoggedIn ? 
            <React.Fragment> 
              <RootPageUpMaterial/> 
              <EditFilterNavbar/>
            </React.Fragment>
            :
            <Navigate to='/'/>
          }/> 
          <Route path='/brands/:brandName' element={ 
            <React.Fragment> 
              <RootPageUpMaterial/>
              <SingleBrandProductViews/>
            </React.Fragment> 
          }/> 
          <Route path='/brands' element={ 
            <React.Fragment>
              <RootPageUpMaterial/> 
              <ViewAllBrandItems/>
            </React.Fragment> 
          }/>  
          <Route path='/p/:topCategory/:category/:collection' element={ 
            <React.Fragment>
              <RootPageUpMaterial/>  
              <SingleCollectionView/>
            </React.Fragment> 
          }/>
          <Route path='/p/:topCategory/:category' element={ 
            <React.Fragment>
              <RootPageUpMaterial/>  
              <SingleCategoryView/>
            </React.Fragment> 
          }/>
          <Route path='/p/:topCategory' element={ 
            <React.Fragment>
              <RootPageUpMaterial/> 
              <TopCategoryView/>
            </React.Fragment> 
          }/> 
          <Route path='/p/browsing-history' element={ 
            <React.Fragment>
              <RootPageUpMaterial/>
              <SingleBrowsingHistoryView/>  
            </React.Fragment> 
          }/>
          <Route path='/categories' element={ 
            <React.Fragment>
              <RootPageUpMaterial/>   
              <AllCategoryView/>
            </React.Fragment> 
          }/> 
          <Route path='/search/:searchText' element={ 
            <React.Fragment>
              <RootPageUpMaterial/>   
              <SearchProductView/>
            </React.Fragment> 
          }/> 
          <Route path='/offers/:offerName' element={ 
            <React.Fragment>
              <RootPageUpMaterial/>  
              <SingleOfferView/>
            </React.Fragment> 
          }/>
          <Route path='/contact-us' element={<h1> /contact Hello world</h1>}/>
          <Route path='/faq' element={<h1> /faq Hello world</h1>}/>
          <Route path='/about-us' element={<h1> /about Hello world</h1>}/>
          <Route path='/privacy-policy' element={<h1> /privacy Hello world</h1>}/>
          <Route path='/terms-and-condition' element={<h1> /terms Hello world</h1>}/>
          <Route path='/refund-policy' element={<h1> Hello refund policy</h1>}/>
          <Route path='/:visible__url/:product__id' element={  
            <React.Fragment> 
                <RootPageUpMaterial/> 
                <ProductDetailsView/>
            </React.Fragment>  
          }/>
        </Routes>
        {/*<Footer/>*/}
        </div>
        </div> 
  );
};

export default AppComponents;


