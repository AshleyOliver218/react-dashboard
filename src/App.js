import './App.css';
import "./index.css"
import Sidebar from "./components/Sidebar"
import Reviews from "./components/Reviews"
import Rating from "./components/Rating"
import Analysis from "./components/Analysis"
import Webvisitors from "./components/Webvisitors"
function App() {
  return (
    <div className="App">
     <Sidebar />
     <Reviews />
     <Rating />
     <Analysis />
     <Webvisitors />
    </div>
  );
}

export default App;
