import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './Pages/Login/Register';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import NotFound from './Pages/Shared/NotFound';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import AllUsers from './Pages/Dashboard/AllUsers';
import RequireAdmin from './Pages/Shared/RequireAdmin';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Payment from './Pages/Dashboard/Payment';

function App() {
  return (
    <div className=''>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myOrders' element={<MyOrders></MyOrders>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='allUser' element={
            <RequireAdmin>
              <AllUsers></AllUsers>
            </RequireAdmin>
          }></Route>
          <Route path='addProduct' element={
            <RequireAdmin>
              <AddProduct></AddProduct>
            </RequireAdmin>
          }></Route>
          <Route path='manageProduct' element={
            <RequireAdmin>
              <ManageProduct></ManageProduct>
            </RequireAdmin>
          }></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
