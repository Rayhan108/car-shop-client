import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom'
import router from './router/routes.tsx'
import { ThemeProvider } from './providers/theme-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <div className=''>

    <RouterProvider router={router}/>
          </div>
    </ThemeProvider>
    </HelmetProvider>

  </StrictMode>,
)
