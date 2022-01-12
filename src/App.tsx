import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import GoodsDetails from './page/GoodsDetails';
import Home from './page/Home';
import Header from './components/Header';
import Write from './page/Write';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/list/:id' element={<GoodsDetails />}></Route>
        <Route path='/write' element={<Write />}></Route>
      </Routes>
      <Nav></Nav>
    </BrowserRouter>
  );
}

export default App;
