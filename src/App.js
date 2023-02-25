import '../src/styles/App.css';
import '../src/styles/skills.css';
import '../src/styles/projects.css';
import '../src/styles/about.css';

import { MainRouter } from './routes/MainRouter';
import { Navbar } from './components/layout/Navbar';
import { Home } from './components/Home';

function App() {
  return (
    // 
    <><MainRouter/>
      {/* <Navbar />
      <Home /> */}
    </>
  );
}

export default App;
