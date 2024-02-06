import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import ShopContextPovider from "./context/ShopContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopContextPovider>
      <App />
    </ShopContextPovider>
  </React.StrictMode>
);
