
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";



const rootElement = document.getElementById("root"); // Ensure this matches index.html

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found!"); // Debugging message
}

