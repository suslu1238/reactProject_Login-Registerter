import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Navbara from './components/Navbar';
import Logina from './components/login';
import Registrationa from './components/Registration';
function Appa() {
  return (
    <BrowserRouter>
    <Navbara/>
      <Routes>
        <Route path='/logi' element={<Logina/>}/>
        <Route path='/regis' element={<Registrationa/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Appa;
