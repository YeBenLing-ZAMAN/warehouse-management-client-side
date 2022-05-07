import logo from './logo.svg';
import './App.css';
import Header from './Components/HeaderAndFooter/Header/Header';
import Footer from './Components/HeaderAndFooter/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/MainPage/Home/Home';
import About from './Components/MainPage/About/About';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
