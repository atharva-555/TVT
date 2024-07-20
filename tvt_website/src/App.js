// import './palette.css'
import './assets/fonts/Quicksand-VariableFont_wght.ttf';
import './App.css';
import './responsive.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Listing from './pages/Listing/index';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './pages/Home/index';
import About from './pages/About/index';
import NotFound from './pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailsPage from './pages/Details';
import { useState,useEffect ,createContext } from 'react';
import Data from './db.json';
import axios from 'axios';

const MyContext = createContext();
function App() {

  
  // FETCH DATA from Json
  const[ProductData,setProductData] =useState([]);

  useEffect(()=>{
    setProductData(Data.productData)
  },[])
  
   // FAKE API TO FETCH DATA
  // useEffect(()=>{
  //   getData('http://localhost:3000/db.json/productData');
  // },[]);

  // const getData = async (url) => {
  //   try {
  //     const response = await fetch(url);
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch data');
  //     }
  //     const data = await response.json();
  //     setProductData(data.productData); // Assuming productData is an array
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //     // Handle the error appropriately (e.g., display a message to the user)
  //   }
  // };
  const [isOpenFilters, setIsopenFilters] = useState(false);
  const openFilters=()=>{
    setIsopenFilters(!isOpenFilters)
  }

  const value = {
    // cartItems,
    // isLogin,
    // windowWidth,
    isOpenFilters
    // addToCart,
    // removeItemsFromCart,
    // emptyCart,
    // signOut,
    // signIn,
    // openFilters,
    // isopenNavigation,
    // setIsopenNavigation,
    // setCartTotalAmount,
    // cartTotalAmount,
    // getCartData,
    // setCartItems
  }
  return (

    ProductData.length !==0 &&
    <BrowserRouter>
      <MyContext.Provider value={value}>
        <Header data = {ProductData} />
        <Routes>
          <Route  exact={true} path='/' element={<Home data = {ProductData} /> }/>
          <Route exact={true} path='/about' element={<About/>}/>
          <Route exact={true} path='/cat/:id' element={<Listing data = {ProductData} single={true} />}/>
          <Route exact={true} path='/cat/:id/:id' element={<Listing data = {ProductData} single={false} />}/>
          <Route exact={true} path='/product/details' element={<DetailsPage data = {ProductData} single={true} />}/>
          <Route exact={true} path='*' element={<NotFound/>}/>
        </Routes>

        <Footer/>
      </MyContext.Provider>
    </BrowserRouter>

  
  );
}

export default App;
export { MyContext };
