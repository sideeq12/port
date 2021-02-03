import Header from "./components/Header/header";
import Section from "./components/section/section"
import Buttons from "./components/buttons/buttons"
import './App.css';
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
     <Header />
     <Section />
    <Buttons />
    <Projects />
    </div>
  );
}

export default App;
