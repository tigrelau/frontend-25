import "tailwindcss";
import "./App.css";
import ThreeColumnHero from "./components/ThreeColumnHero";
import DecoratedText from "./components/DecoratedText";
import FloatedImageArticle from "./components/FloatedImageArticle";
import OverlaySVG from "./components/OverlaySVG";
import FlexExemplo from "./components/FlexExemplo";
import GridExemplo from "./components/GridExemplo";
import Tipografia from "./Tipografia";
import GalleryHybrid from "./components/GalleryHybrid";

function App() {
  return (
    <>
      <ThreeColumnHero />
      <DecoratedText />
      <FloatedImageArticle />
      <OverlaySVG />
      <FlexExemplo />
      <GridExemplo />
      <Tipografia />
      <GalleryHybrid />
    </>
  );
}

export default App;
