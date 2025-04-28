import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HashRouter } from 'react-router-dom'
import { APIProvider } from '@vis.gl/react-google-maps'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <APIProvider apiKey={'AIzaSyBc7SDNLRG2LUovFmkb4oHydZORUOiwDNk'} onLoad={() => console.log('Maps API has loaded.')}>
        <App />
      </APIProvider>
    </HashRouter>
  </StrictMode>,
)
