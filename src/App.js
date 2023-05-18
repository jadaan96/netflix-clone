import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route , Routes } from 'react-router-dom';
import Home from './componant/Home';
import FavList from './componant/FavList '
import Navbars from './componant/Navbars';

function App() {
  return (
    <div>
      <Navbars />
      
      
      <Routes>
        <Route  path='/' element={<Home />}></Route >
        <Route  path='/addMovie' element={<FavList />}></Route >
      </Routes>
      
    </div>
  );
}

export default App;
