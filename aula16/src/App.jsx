import "./App.css";
import Header from "./components/Header";
import CardHome from "./components/CardHome";

function App() {
  return (
    <div className="flex flex-col gap-4">
      <Header></Header>
      <CardHome></CardHome>
    </div>
  );
}

export default App;
