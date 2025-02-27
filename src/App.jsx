import React, { useEffect, useState } from "react";
import Card from "./components/card";
import "./styles/App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  const [search, setSearch] = useState("");

  // Fetch the data
  const fetchData = async () => {
    try {
      setLoader(true);
      const response = await fetch("https://api.sampleapis.com/beers/ale");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log("Error in fetching", error);
    }
    setLoader(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Searching logic
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1 className="title">Welcome To Premium BeerBar 🍻</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for a product..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loader ? (
        <h2 className="loading-text">Loading...</h2>
      ) : (
        <div className="product-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => <Card key={product.id} product={product} />)
          ) : (
            <h3 className="no-results">No products found</h3>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
