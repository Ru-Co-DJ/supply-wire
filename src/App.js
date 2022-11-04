import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Auth from "./pages/Auth/Auth";
import BestSales from "./pages/BestSales/BestSales";
import CustomerService from "./pages/CustomerService/CustomerService";
import Categories from "./pages/Categories/Categories";
import Products from "./pages/Products/Products";
import Missing from "./pages/Missing/Missing";
import Account from "./pages/Account/Account";
import Theme from "./utils/Theme/Theme";
import AddProduct from "./pages/AddProduct/AddProduct";
import { ContextProvider } from "./utils/context/ContextProvider";



function App() {
  return (
    <>
    <Theme>
      <ContextProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/account" element={<Account/>}/>
            <Route path="/auth/*" element={<Auth/>}/>
            <Route path="/best-sales" element={<BestSales/>}/>
            <Route path="/customer-service" element={<CustomerService/>}/>
            <Route path="/categories" element={<Categories/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/add-product" element={<AddProduct/>}/>
            <Route path="*" element={<Missing/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </ContextProvider>
      </Theme>
    </>
  );
}

export default App;
