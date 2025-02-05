import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom'
import router from './router/routes.tsx'

import { Toaster } from 'sonner';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.ts';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
       <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
    <HelmetProvider>
        {/* <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> */}
          <div className=''>
          <Toaster />
    <RouterProvider router={router}/>
    
          </div>
    {/* </ThemeProvider> */}
    </HelmetProvider>
    </PersistGate>
    </Provider>
  </StrictMode>,
)
