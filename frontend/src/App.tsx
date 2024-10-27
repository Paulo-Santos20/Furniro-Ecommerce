import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./hooks/CartContext"; 
import Shop from "./pages/Shop/Shop";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";

const App: React.FC = () => {
  return (
    <CartProvider> 
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<SingleProductPage />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;