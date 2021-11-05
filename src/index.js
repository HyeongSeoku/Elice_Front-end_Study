import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    {/* store에 접근할수 있도록 해주는 컴포넌트*/}
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
