import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'
import App from './App.tsx'
import { CustomCursor } from './Components/Common'
import { store } from './Store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <CustomCursor />
      <App />
    </Provider>
  </StrictMode>,
)
