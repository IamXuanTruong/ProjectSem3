import logo from './logo.svg';
import './App.css';
import MasterLayout from './template/layout/MasterLayout';
import { Route, Routes } from 'react-router-dom';
import Home from './template/page/home/Home';
import Login from './template/page/login/Login';
import New from './template/page/news/New';
import Register from './template/page/register/Register';
import Office from './template/page/office/Office';
import Order from './template/page/order/Order';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MasterLayout Page={<Home />} />} />
        <Route path='/order' element={<MasterLayout Page={<Order />} />} />
        <Route path='/office' element={<MasterLayout Page={<Office />} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>

    </div>
  );
}

export default App;