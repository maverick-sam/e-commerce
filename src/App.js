import './index.css' // or wherever your Tailwind styles live
import Example from './Navbar/Navbar';
import Banner from './Herosection/Banner';
import Maincards from './Herosection/maincards';
import CardGrid from './Herosection/CardGrid';
import CarouselLayout from './Herosection/CarouselLayout';
import ImageStrip from './Herosection/ImageStrip';
import ThreeCardImageGrid from './Herosection/ThreeCardImageGrid';
// git 
function App() {
  return (
   <div>
    <Example/>
    <Banner/>
    <Maincards/>
    <CardGrid/> 
    <CarouselLayout/> 
    <ImageStrip/> 
    <ThreeCardImageGrid/> 
   

   </div>
  );
}

export default App;
