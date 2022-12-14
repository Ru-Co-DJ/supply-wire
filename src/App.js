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
import { ContextProvider } from "./utils/context/ContextProvider";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import FAQ from "./pages/FAQ/FAQ"
import Store from "./pages/Store/Store";
import Stores from "./pages/Stores/Stores";
import Cart from "./pages/Cart/Cart";


function App() {
  return (
    <>
    <Theme>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/account" element={<Account/>}/>
            <Route path="/auth/*" element={<Auth/>}/>
            <Route path="/best-sales" element={<BestSales/>}/>
            <Route path="/customer-service" element={<CustomerService/>}/>
            <Route path="/categories" element={<Categories/>}/>
            <Route path="/products/:d" element={<Products/>}/>
            <Route path="/product/:id" element={<SingleProduct/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/faq" element={<FAQ/>}/>
            <Route path="*" element={<Missing/>}/>
            <Route path="/store/:id" element={<Store/>}/>
            <Route path="/stores" element={<Stores/>}/>
            <Route path="/cart" element={<Cart/>}/>

          </Routes>
          <Footer/>
        </BrowserRouter>
      </Theme>
    </>
  );
}

export default App;
