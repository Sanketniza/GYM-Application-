import React from "react";
import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "./Components/Footer";
import Pricing from "./Components/Pricing";
import WorkoutSessions from "./Components/WorkoutSessions";
import BMICalculator from "./Components/BMICalculator";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact"; // Correct import for a named export
import Navbar from "./Components/Navbar";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Hero/> */}
        <WorkoutSessions />
        {/* <Gallery/> */}
        <Pricing />
        <Contact />
        <BMICalculator />
        <Footer />

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
          theme="colored"
        />
      </Router>
    </>
  );
}

export default App;
