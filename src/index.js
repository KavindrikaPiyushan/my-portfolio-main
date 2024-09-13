import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { toast, ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
  <React.StrictMode>
    <App />  <ToastContainer position="bottom-right"> </ToastContainer>
  </React.StrictMode>

);

reportWebVitals();
