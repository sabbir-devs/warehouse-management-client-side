import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Home/Login/Login';
import Signup from './Pages/Home/Signup/Signup';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import ProtectedPage from './Pages/Home/ProtectedPage/ProtectedPage'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<ProtectedPage><Home/></ProtectedPage>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
