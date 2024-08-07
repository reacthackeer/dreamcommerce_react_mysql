import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { store } from './app/store';
import './styles/cartwishlist.scss';
import './styles/home.scss';
import './styles/index.scss';
import './styles/modal.scss';
import './styles/navbar.scss';
import './styles/productDetails.scss';
import './styles/productview.scss';

import './styles/skeletonHome.scss';
import './styles/sleton.scss';
const container = document.getElementById('root');
const root = createRoot(container);
  
root.render( 
    <>
      <ChakraProvider>
        <Provider store={store}>
            {/* here theme color mode script */}
            <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
              <Router basename='/'>
                <App />
              </Router>
        </Provider>
      </ChakraProvider>
    </>
); 
