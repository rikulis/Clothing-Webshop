import Header from "./myComponents/Header";
import Footer from "./myComponents/Footer";
import LogoHeader from "./myComponents/LogoHeader";
import "./App.css";
import ProductComponent from "./myComponents/ProductComponent";
import { CartProvider } from "./myComponents/CartContext";
function App() {
  return (
    <>
      <CartProvider>
        <div>
          <LogoHeader></LogoHeader>
          <Header></Header>
        </div>
        <ProductComponent></ProductComponent>
        <div>
          <Footer></Footer>
        </div>
      </CartProvider>
    </>
  );
}

export default App;
