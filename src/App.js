import React from "react";
import "./Style.css";
import Contents from "./Components/Contents";
import Fakefooter from "./Components/Fakefooter";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="body" id="body">
      <Contents/>
      <Fakefooter/>
      <Footer/>
    </div>
  );
}

export default App;