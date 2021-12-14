import React, { useEffect } from 'react';
import Swiper from 'swiper';
import AOS from 'aos';
import HomeScreen from './screens/HomeScreen';

function App() {
  useEffect(() => {
    new Swiper();
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return <HomeScreen />;
}

export default App;
