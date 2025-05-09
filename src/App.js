import './index.css' // or wherever your Tailwind styles live
import Example from './Navbar/Navbar';
import Banner from './Herosection/Banner';
import Cards from './Herosection/cards';
// git 
function App() {
  return (
   <div>
    <Example />
    <Banner/>
    <Cards/>

   </div>
  );
}

export default App;
