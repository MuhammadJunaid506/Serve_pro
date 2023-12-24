import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.module.css';
import App from './App';
import { extendTheme, ChakraProvider } from '@chakra-ui/react'

const colors = {
  brand: {
    900: '#008080',
    800: '#0F0E09',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
  <App />
</ChakraProvider>
);

