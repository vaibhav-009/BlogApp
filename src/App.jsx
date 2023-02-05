import React from "react";
import Navbar from "./components/Navbar.jsx";
import Featured from "./components/Featured.jsx"

const App = () => {
  return (
    <div>
      <Navbar />
      <Featured link ='https://rare-gallery.com/thumbs/4512305-lana-rhoades-model-women-brunette-trench-coat.jpg'/>
    </div>
  );
};

export default App;
