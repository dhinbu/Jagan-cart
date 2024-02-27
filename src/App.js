import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";
// import CartItems from "./components/CartItems";

const App = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filteredCartItems, setFilteredCartItems] = React.useState([]);
  const [data, setData] = useState([]);

  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const newFilteredItems = data.filter((item) =>
      item?.title
        ?.toString()
        ?.toLowerCase()
        ?.includes(searchQuery.toLowerCase())
    );
    setFilteredCartItems(newFilteredItems);
  }, [searchQuery]);

  return (
    <Router>
      <NavBar
        movies={data}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Routes>
        <Route
          path="/"
          element={
            <ProductListing items={searchQuery ? filteredCartItems : data} />
          }
        />
        <Route path="/item/:id" element={<ProductDetail items={data} />} />
      </Routes>
      {/* <CartItems /> */}
    </Router>
  );
};

export default App;
