import Navbar from './components/Navbar/index.tsx';
import { Home } from "./pages/homePage/index.tsx";
import "./index.css";
import "./components/Navbar/navbar.module.css";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen"></div>
      <Home />
    </>
  );
}

export default App;
