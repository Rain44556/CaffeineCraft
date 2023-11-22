import './App.css';
import Header from "./components/Header/Header.js";
import StarSection from './components/StarSection/StarSection.js';
import UniqueCatagory from './components/UniqueCatagory/UniqueCatagory.js';
import Items from './components/Items/Items.js';
import Place from './components/Place/Place.js';



function App() {
  return (
<div>
  <Header></Header>
  <StarSection></StarSection>
  <UniqueCatagory></UniqueCatagory>
  <Items></Items>
  <Place></Place>
</div>
  );
}

export default App;
