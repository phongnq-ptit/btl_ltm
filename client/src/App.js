import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './container/HomePage';
import Saleoff from './container/SaleoffPage';
import Menu from './container/MenuPage';
import BookingTable from './container/BookingPage';
import Order from './container/OrderPage';
import { useDispatch } from 'react-redux';
import Bill from './component/Bill';
import BillPage from './container/BillPage';
function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/saleoff' element={<Saleoff />}>
          <Route path=':id' element={<Saleoff />} />
        </Route>
        <Route path='/menu' element={<Menu />} />
        <Route path='/book' element={<BookingTable />} />
        <Route path='/bill' element={<BillPage />} />
        <Route path='/order' element={<Order dispatch={dispatch} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
