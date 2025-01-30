import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './component/Header.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <App />
  </>
)
