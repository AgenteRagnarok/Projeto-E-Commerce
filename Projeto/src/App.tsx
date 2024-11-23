import Navbar from './components/Navbar/index.tsx';
import { Home } from "./pages/homePage/index.tsx";
import React from "react";
import "./index.css";
import "./components/Navbar/navbar.module.css";
import Carousel from './components/Carousel/index.tsx';

const App: React.FC = () => {
  return (
      <div className="bg-gray-100 min-h-screen">
    <><header>
      <Navbar />
      </header>
      <Home />
      <main>
      <Carousel/>
      </main>
    </>
    </div>
  );
}

export default App;
