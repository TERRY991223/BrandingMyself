import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'  // BrowserRouter 사용
import Header from './component/Header.jsx'
import Footer from './component/Footer.jsx'
import Home from './pages/Home.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header/> 
    <Home/>
    <Footer/>
  </BrowserRouter>
)
