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

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='inventory/:itemId' element={<Item></Item>}></Route>
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
