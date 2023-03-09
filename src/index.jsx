import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const root = ReactDOM.createRoot(document.getElementById("root"));
const Client = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
});
root.render(
  <QueryClientProvider client={Client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>
);
