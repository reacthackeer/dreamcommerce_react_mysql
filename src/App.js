import React from 'react';
import { useSelector } from 'react-redux';
import AppComponents from './AppComponents';
import { LoadingPage } from './FinalComponents/pages/LandingPage/Components/Loading';
import useAuthCheck from './hooks/authCheck';

const App = () => {
  const authCheck = useAuthCheck();
  const {authChecked} = useSelector((state)=> state.auth);
  
  // decide what to render;
  let content = null;
  if(!authCheck){
    content = (
      <div className='upper__container'>
        <div className='mobile__view__container'> 
          <LoadingPage/>
        </div>
      </div>
    )
  }

  if(authCheck && authChecked){
    content = <AppComponents/>
  }
  
  return content;
};

export default App;