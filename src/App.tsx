import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import GoodsDetails from './page/GoodsDetails';
import Home from './page/Home';
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle></GlobalStyle>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/list/:id' element={<GoodsDetails />}></Route>
      </Routes>
      <Nav></Nav>
    </BrowserRouter>
  );
}

export default App;
