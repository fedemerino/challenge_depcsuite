import { BrowserRouter } from "react-router-dom";
import backgroundTech from "./assets/__pantallas_2.webp"
import Router from "./components/Router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomProvider from "./components/CustomProvider";
function App() {
  return (
    <CustomProvider>
      <div className="background">
        <img className="backgroundTech" src={backgroundTech}/>
      </div>
      <div className="appContainer">
        <BrowserRouter>
          <Navbar />
          <Router />
          <Footer />
        </BrowserRouter>
      </div>
    </CustomProvider>
  );
}

export default App;
