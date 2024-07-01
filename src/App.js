import "./App.css";
// import colorPicker from "./Ant-Design/AntDesign.jsx";
import { Button } from "antd";
import { Rate } from "antd";
import { Image } from "antd";

function App() {
  return (
    <div className="App">
      {/* <colorPicker /> */}
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
            <Rate allowHalf defaultValue={2.5} />
          </div>
        </div>
      </div>

      {/* <Button type="primary">Only Clickable Button</Button> */}
    </div>
  );
}

export default App;
