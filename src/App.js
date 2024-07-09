import React, { useEffect, useState } from "react";
import "./App.css";
import { Rate, Image } from "antd";

const titleLimit = (title, wordLimit) => {
  const words = title.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return title;
};

function App() {
  const [products, setProducts] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));

    const sampleImages = [
      "https://images.unsplash.com/photo-1487015307662-6ce6210680f1?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1673548917423-073963e7afc9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1670950411934-e21abf39191e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1678402545080-2353b489c0c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1486946255434-2466348c2166?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];
    setImages(sampleImages);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="flex-box-cards">
          {products.map((product, index) => (
            <div key={product.id} className="card">
              <div className="card__image-container">
                <Image
                  className="card__image"
                  src={images[index % images.length]}
                  alt={product.title}
                />
              </div>
              <span className="product-name">{titleLimit(product.title, 2)}</span>
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
