import React from 'react';
import './App.css';
import Header from "./components/Header/Header.js";
import StarSection from './components/StarSection/StarSection.js';
import UniqueCategory from './components/UniqueCategory/UniqueCategory.js';
import Items from './components/Items/Items.js';
import Place from './components/Place/Place.js';
import Footer from './components/Footer/Footer.js';


function App() {
  return (
<div>
  <Header></Header>
  <StarSection></StarSection>
  <UniqueCategory></UniqueCategory>
  <Items></Items>
  {/* <Place></Place> */}
  {/* <Footer></Footer> */}
</div>
  );
}

export default App;
