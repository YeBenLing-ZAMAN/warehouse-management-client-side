import logo from './logo.svg';
import './App.css';
import Header from './Components/HeaderAndFooter/Header/Header';
import Footer from './Components/HeaderAndFooter/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/MainPage/Home/Home';
import About from './Components/MainPage/About/About';
import NotFound from './Components/HeaderAndFooter/NotFound/NotFound';
import Service from './Components/Service/Service';
import Item from './Components/StoreItems/Item';
import ManageInventories from './Components/ManageInventories/ManageInventories';
import Blog from './Components/MainPage/Blog/Blog';
import AddItem from './Components/ManageInventories/AddItem';
import Login from './Components/UserLoginAndSignUp/Login';
import SignUp from './Components/UserLoginAndSignUp/SignUp';
import ResetPassword from './Components/UserLoginAndSignUp/ResetPassword';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='inventory/:itemId' element={<Item></Item>}></Route>
        <Route path="/Manageinventories" element={<ManageInventories />} />
        <Route path="/additem" element={<AddItem />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/resetPassword" element={<ResetPassword />} />


        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
