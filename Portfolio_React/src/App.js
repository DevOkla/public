import './App.css'
import './index.css';

import {
  Home,
  Projects,
  Techs,
  SetUp,
  Footer
} from './sections/index.js'
const App = () => {
  return (
    <div className="App">
      <Home />
      <Projects />
      <Techs />
      <SetUp />
      <Footer />
    </div>
  );
}

export default App;
