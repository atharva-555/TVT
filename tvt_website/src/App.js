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


function App() {
  return (
    <BrowserRouter>
      <Header/>

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
