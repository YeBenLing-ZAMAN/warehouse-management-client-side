import './App.css';
import Header from './Components/HeaderAndFooter/Header/Header';
import Footer from './Components/HeaderAndFooter/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/MainPage/Home/Home';
import About from './Components/MainPage/About/About';
import NotFound from './Components/HeaderAndFooter/NotFound/NotFound';
import Item from './Components/StoreItems/Item';
import ManageInventories from './Components/ManageInventories/ManageInventories';
import Blog from './Components/MainPage/Blog/Blog';
import AddItem from './Components/ManageInventories/AddItem';
import Login from './Components/UserLoginAndSignUp/Login';
import SignUp from './Components/UserLoginAndSignUp/SignUp';
import ResetPassword from './Components/UserLoginAndSignUp/ResetPassword';
import { ToastContainer } from 'react-toastify';
import RequireAuth from "./Components/UserLoginAndSignUp/RequirAuth";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='inventory/:itemId' element={
          <RequireAuth>
            <Item></Item>
          </RequireAuth>}></Route>
        <Route path="/Manageinventories" element={
          <RequireAuth>
            <ManageInventories />
          </RequireAuth>} />
        <Route path="/additem" element={
          <RequireAuth>
            <AddItem />
          </RequireAuth>} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/resetPassword" element={<ResetPassword />} />


        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
