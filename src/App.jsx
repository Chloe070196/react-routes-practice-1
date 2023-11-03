import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { appsData, productsData } from './data.js';
import Home from './pages/Home';
import Products from './pages/Products';
import AppsPage from './pages/Apps/index.jsx';
import ViewProducts from './pages/Viewproducts/index.jsx';
import './App.css';

export default function App() {
  const [products, setProducts] = useState(productsData);
  const [apps, setApps] = useState(appsData);

  console.log({ products, apps });

  return (
    <div className="App">
      <header>
        <h1>Apple Shop</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/apps">Apps</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route 
          path="/" 
          element={<Home />} 
        />
        <Route
          path="/products"
          element={<Products products={products} />}
        />
        <Route
          path='/apps'
          element={<AppsPage apps={apps}/>}
        />
        <Route
          path='/products/:product_id'
          element={<ViewProducts/>}
        />
        
      </Routes>
    </div>
  );
}
