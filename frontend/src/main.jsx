import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Createpage from "./pages/createpage.jsx";
import Productspage from "./pages/productspage.jsx";
import Signuppage from "./pages/signuppage.jsx";
import Loginpage from "./pages/loginpage.jsx";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();




createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create" element={<Createpage />} />
        <Route path="/products" element={<Productspage />} />
        <Route path="/signups" element={<Signuppage />} />
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
