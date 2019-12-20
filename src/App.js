import React, { useState, useEffect } from "react";
import "./App.css";
import Container from "./components/Container";

function App() {
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("data.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        // Work with JSON data here
        setProductData(data.productData);
      })

      .catch(err => {
        setError("Error While Getting Data");
      });
  }, []);

  return (
    <div className="App">
      {error ? (
        <div> Error White Getting Data</div>
      ) : (
        <Container productData={productData} />
      )}
    </div>
  );
}

export default App;
