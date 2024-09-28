import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Basket from './pages/Basket';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/basket" element={<Basket/>} />
      </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
