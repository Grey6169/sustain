import './App.css';
import NavBar from './components/navBar';
import SRoutes from './sroutes';
import "@fontsource/dancing-script";
import "@fontsource/poppins";
import ReactGA from 'react-ga';

function App() {
  const TRACKING_ID = "G-WRSVCG04XK"; 
  ReactGA.initialize(TRACKING_ID);
  
  return (
    <div>
      <NavBar />
      <SRoutes />
    </div>
  );
}

export default App;
