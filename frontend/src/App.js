
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import ShopNow from "./pages/ShopNow";
import Cart from './pages/Cart';
import Checkout from "./pages/Checkout";
import LoginSignup from './pages/LoginSignup';
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kid_banner from './components/Assets/banner_kids.png'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner}category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner}category="kid"/>}/>
        <Route path='product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>} />
     <Route path='/login' element={<LoginSignup/>}/>
     <Route path="/shopnow" element={<ShopNow />} />

      </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
