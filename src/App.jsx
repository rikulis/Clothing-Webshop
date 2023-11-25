import { useState } from "react";
import ButtonComponent from "./myComponents/ButtonComponent";
import Header from "./myComponents/Header";
import Footer from "./myComponents/Footer";
import LogoHeader from "./myComponents/LogoHeader";
import "./App.css";
import ProductComponent from "./myComponents/ProductComponent";
import Account from "./myComponents/Account";
function App() {
  return (
    <>
      <div>
        <LogoHeader></LogoHeader>
        <Header></Header>
      </div>
      <ProductComponent></ProductComponent>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
