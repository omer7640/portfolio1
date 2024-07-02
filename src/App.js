import React, { useEffect, useRef } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
// import AllRoutes from "./routes/AllRoutes";
import AllRoutes from "./routes/AllRoutes";
import { useLocation } from "react-router-dom";
function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <section className="overall">
        <NavBar />
        <AllRoutes />
        <hr></hr>
        <Footer />
      </section>
    </div>
  );
}
export default App;
