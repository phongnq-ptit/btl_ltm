import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './container/HomePage';
import Saleoff from './container/SaleoffPage';
import Menu from './container/MenuPage';
import BookingTable from './container/BookingPage';
import Order from './container/OrderPage';
import BillPage from './container/BillPage';
import Login from './container/LoginPage';
import Signup from './container/SignupPage';
import UserPage from './container/UserPage'
import HistoryPage from './container/HistoryPage';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/history' element={<HistoryPage />} />
        <Route path='/saleoff' element={<Saleoff />}>
          <Route path=':id' element={<Saleoff />} />
        </Route>
        <Route path='/menu' element={<Menu />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/book' element={<BookingTable />} />
        <Route path='/bill'
          element={sessionStorage.length > 0 ?
            <BillPage /> :
            <Navigate to={'/order'} replace />} />
        <Route path='/userinfo'
          element={sessionStorage.length > 0 ?
            <UserPage /> : <Navigate to={'/login'} replace />} />
        <Route path='/order' element={<Order/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
