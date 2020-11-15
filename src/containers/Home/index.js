import React from 'react';
import MainBox from '../../components/MainContentBox/index';
 
const Home = () => (
  <div>
    <h1>Home</h1>
    <MainBox
      score= "70"
      qrCode= "http://facebook.github.io/react/"
      materials="20.3"
      manufacturing="37.8"
      use="9.8"
      transport="1.4"
      endOfLife="0.7"
    ></MainBox>
  </div>
);
 
export default Home;