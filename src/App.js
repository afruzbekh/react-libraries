import React, { useEffect, useState } from "react";
import "./App.css";
import { Rate } from "antd";
import { Image } from "antd";

const titleLimit = (title, wordLimit) => {
  const words = title.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return title;
};

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="flex-box-cards">
          {products.map((product) => (
            <div key={product.id} className="card">
              <div className="card__image-container">
                <Image
                  className="card__image"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <span className="product-name">{titleLimit(product.title, 5)}</span>
              <Rate allowHalf defaultValue={product.rating.rate} />
              <span className="product-price">${product.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
