import './App.css';
import Footer from './components/bigComp/Footer';
import Header from './components/bigComp/Header';
import { backVideo } from './data';
import HomePage from './pages/HomePage';

import { useRef, useEffect, userEvent } from 'react'
import Fluid from 'webgl-fluid'



function App() {


  const canvas = useRef(null)
  const cantaintRef = useRef(null)

  useEffect(function () {
    let c = canvas.current
    Fluid(c)
  }, [])


  let cantaintDiv = cantaintRef?.current


  const handleMouseMove = (event) => {

    canvas?.current?.dispatchEvent(new MouseEvent('mousemove', event));
    
  };

  useEffect(() => {

    cantaintDiv?.addEventListener('mousemove', handleMouseMove);

    return () => {
      cantaintDiv?.removeEventListener('mousemove', handleMouseMove);
    };

  }, [cantaintDiv])


  return (
    <>
    <div className='blackLayer bg-transparent'></div>
      <div ref={cantaintRef} className="backImg bg-transparent w-full max-w-[1440px] h-auto flex flex-col justify-center items-center" 
      >
        <Header />
        <HomePage />
        <Footer />
      </div>
    <canvas ref={canvas} className="videosize"></canvas>

    </>
  );
}

export default App;
