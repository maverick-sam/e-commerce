import './index.css' // or wherever your Tailwind styles live
import Example from './Navbar/Navbar';
import Banner from './Herosection/Banner';
// import Cards from './Herosection/cards';
import Maincards from './Herosection/maincards';
import Cardstwo from './Herosection/cardsTwo';
// git 
function App() {
  return (
   <div>
    <Example/>
    <Banner/>
    <Maincards/>
    <Cardstwo/> 
    {/* <Cards/> */}

   </div>
  );
}

export default App;
