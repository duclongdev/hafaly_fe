import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { store } from "./redux/reducers/index";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./auth/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <App />
        </Router>
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
