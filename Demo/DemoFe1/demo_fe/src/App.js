import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import { axiosClient } from './components/AxiosClient';
import Footer from './components/Footer';
import Product from './components/Product';
import { useState } from 'react';

function App() {
  axiosClient();
  // const [userName, setUserName] = useState();
  // const getUserName = (user) => {
  //   setUserName()
  // }
  return (

    <> 
    <Header />
      
    <Routes>
        <Route path="*" element={<Home />} />
      <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product' element={ <Product/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
