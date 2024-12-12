import Navbar from './components/Navbar/index.tsx';
import ProductCard from "./components/ProductCard/index.tsx";
import React from "react";
import "./index.css";
import "./components/Navbar/navbar.module.css";
import Carousel from './components/Carousel/index.tsx';
import Footer from './components/Footer/index.tsx';

const App: React.FC = () => { 
    return ( <>
      <Navbar />
      <Carousel/>
      <ProductCard />
      <Footer/>
    </>
    );
    };

export default App;
