// import './palette.css'
import './assets/fonts/Quicksand-VariableFont_wght.ttf';
import './App.css';
import Header from './components/header/header';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './pages/Home/index';
import About from './pages/About/index';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route exact={true} path='/' element={<Home/>}/>
        <Route exact={true} path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
