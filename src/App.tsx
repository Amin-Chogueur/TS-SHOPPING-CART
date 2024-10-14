import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Store from "./pages/store/Store";
import NavBar from "./components/navBar/NavBar";
import { ShoppingCardContextProvider } from "./context/ShoppingCartContext";
function App() {
  return (
    <>
      <ShoppingCardContextProvider>
        <NavBar />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/store" element={<Store />} />
          </Routes>
        </main>
      </ShoppingCardContextProvider>
    </>
  );
}

export default App;
