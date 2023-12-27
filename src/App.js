import React from 'react';
import AppComponents from './AppComponents';
import { CheckAuth } from './Components/skleton/Loading';
import useAuthCheck from './hooks/authCheck';

const App = () => {
  const authCheck = useAuthCheck();
  
  // decide what to render;
  let content = null;
  if(!authCheck){
    content = (
      <div className='upper__container'>
        <div className='mobile__view__container'> 
          <CheckAuth/>
        </div>
      </div>
    )
  }

  if(authCheck){
    content = <AppComponents/>
  }
  
  return content;
};

export default App;