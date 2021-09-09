import React from "react";
import ReactDOM from "react-dom";
import { Provider as AlertProvider } from "react-alert";
import "./index.css";
import App from "./App";

const AlertTemplate = ({ message, options }) => (
  <div className={options.type === "error" ? "alert error" : "alert success"}>
    {message}
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate}>
      <App />
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
