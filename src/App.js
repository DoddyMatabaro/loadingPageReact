import './App.css';
import bgr from "./assets/hero.jpg";
import img1 from  "./assets/img2.jpg";
import img2 from "./assets/img3.jpg";
import Hero from './components/Hero';
import Slider from "./components/slides";
function App() {
  return (
    <div className="App">
      <Hero imgSrc={bgr}/>
      <Slider imgSrc={img1} title={"La Famille"} subtitle={"Nous venons rendre les familles autonomes"} />
      <Slider imgSrc={img2} title={"La Famine"} subtitle={"Nous combattons la famille dans la communaute"} />
    </div>
  );
}

export default App;
