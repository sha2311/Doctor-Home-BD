import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {NextUIProvider} from "@nextui-org/react";
import AppContextProvider from './context/AppContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <NextUIProvider>
        <AppContextProvider>
              <App />
        </AppContextProvider>
      
      </NextUIProvider>
  </BrowserRouter>
)
