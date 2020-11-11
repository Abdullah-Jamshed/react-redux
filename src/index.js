import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App.jsx";
import store from "./storage";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
