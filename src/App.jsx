import { useState } from "react";
import ButtonComponent from "./myComponents/ButtonComponent";
import Header from "./myComponents/Header";
import Footer from "./myComponents/Footer";
import ProductGrid from "./myComponents/ProductGrid";
import SecondHeader from "./myComponents/SecondHeader";
import "./App.css";
import ProductComponent from "./myComponents/ProductComponent";

function App() {
  return (
    <>
      <div>
        <SecondHeader></SecondHeader>
        <Header></Header>

        <h3>Sizes</h3>
        <ButtonComponent></ButtonComponent>
      </div>
      <ProductComponent></ProductComponent>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
