import './App.css';
import About from './Components/About/About';
import Broking from './Components/Broking/Broking';
import Clients from './Components/Clients/Clients';
import Contact from './Components/Contact/Contact';
import Courses from './Components/Courses/Courses';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Slider from './Components/Slider/Slider';
import { useState, useEffect } from 'react';
import YoutubeVideo from './Components/Youtube/YoutubeVideo';
import { Routes, Route } from 'react-router-dom';

function App() {

  const [isSticky, setSticky] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    if (scrollPosition > 300) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }, [scrollPosition])
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
  return (
    <>
      <div id="home">
        <Header />
      </div>
      <Slider />
      <div id="about">
        <About />
      </div>

      <Courses />


      {/* <YoutubeVideo /> */}
      <Clients />

      <div id="broking">
        <Broking />
      </div>

      <Contact />

      <Footer />
      {isSticky &&
        <a href='/#home' className="bi bi-chevron-up top_ico"></a>
      }
    </>
  );
}

export default App;
