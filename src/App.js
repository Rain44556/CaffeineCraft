import './App.css';
import Header from "./components/Header/Header.js";
import StarSection from './components/StarSection/StarSection.js';
import UniqueCatagory from './components/UniqueCatagory/UniqueCatagory.js';
import Items from './components/Items/Items.js';


function App() {
  return (
<div>
  <Header></Header>
  <StarSection></StarSection>
  <UniqueCatagory></UniqueCatagory>
  <Items></Items>
</div>
  );
}

export default App;
