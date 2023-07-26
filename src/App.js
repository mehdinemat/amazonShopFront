import logo from './logo.svg';
import './App.css';
import Homepage from './containers/Homepage';
import { Routes , BrowserRouter as Router , Route } from 'react-router-dom';
import ProductPageList from './containers/ProductPageList';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' extact element={<Homepage/>} />
        <Route path='/:slug' element={<ProductPageList/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
