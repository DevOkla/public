import './App.css'
import './index.css';
import Projects from './sections/Projects';
import Home from "./sections/Home";
import Techs from './sections/Techs'
import SetUp from './sections/SetUp';
const App = () => {
  return (
    <div className="App">
      <Home />
      <Projects />
      <Techs />
      <SetUp />
    </div>
  );
}

export default App;
