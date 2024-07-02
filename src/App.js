import "./App.css";
import { Rate } from "antd";
import { Image } from "antd";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="flex-box-cards">
          <div className="card">
            <div className="card__image-container">
              <Image
                className="card__image"
                src="https://images.unsplash.com/photo-1487015307662-6ce6210680f1?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="img"
              />
            </div>
            <span className="product-name">Square Clear Glass Box</span>
            <Rate allowHalf defaultValue={2.5} />
            <span className="product-price">$258</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
