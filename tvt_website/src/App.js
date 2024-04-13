// import './palette.css'
import './assets/fonts/Quicksand-VariableFont_wght.ttf';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Listing from './pages/Listing/index';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './pages/Home/index';
import About from './pages/About/index';
import NotFound from './pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailsPage from './pages/Details';
import { useState,useEffect } from 'react';
import axios from 'axios';


function App() {

  // FAKE API TO FETCH DATA
  const[ProductData,setProductData] =useState([]);
  useEffect(()=>{
    getData('http://localhost:3000/productData');
  },[]);

  const getData=async(url)=>{
    try {
        await axios.get(url).then((response)=>{
          // console.log(response.data);
          setProductData(response.data)
        })
    } catch (error) {
      console.log(error);
    }
  }

  return (

    ProductData.length !==0 &&
    <BrowserRouter>
      <Header data = {ProductData} />
      <Routes>
        <Route exact={true} path='/' element={<Home/>}/>
        <Route exact={true} path='/about' element={<About/>}/>
        <Route exact={true} path='/listing' element={<Listing/>}/>
        <Route exact={true} path='/product/details' element={<DetailsPage/>}/>
        <Route exact={true} path='*' element={<NotFound/>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>

  
  );
}

export default App;
