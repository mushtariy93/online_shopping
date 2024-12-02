import { useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="app">
      <Header></Header>
      <Products />
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
