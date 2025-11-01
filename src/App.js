import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Products from "./components/Products/products";
import Contact from "./components/Contact/Contact";
import { LanguageProvider } from "./LanguageContext";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}

function MainContent() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Products />
      <Contact />
    </div>
  );
}

export default App;
