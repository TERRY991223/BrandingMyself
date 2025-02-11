import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './component/Header.jsx'
import Footer from './component/Footer.jsx'
import Home from './pages/Home.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <Header/> 
    <Home/>
    <Footer/>
  </>
)
