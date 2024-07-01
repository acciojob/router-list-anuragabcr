import React from "react";
import './../styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemList from './ItemList.js';
import ItemDetail from './ItemDetail.js';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/item/:itemId" element={<ItemDetail />} />
        </Routes>
      </BrowserRouter>
      {/* Do not remove the main div */}
    </div>
  )
}
export default App