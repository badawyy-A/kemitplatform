import React from 'react';
import SginUp from "../compents/SginUp"
import NavBar from "../compents/NavBar"
import LandingPage from "../compents/LandingPage"
import MovieContaien from "../compents/MovieContainer"
import PopluerSec from "../compents/PopluerSec"
import FeatureSec from "../compents/FeatureSec"
import Slider from "../compents/Slider"
import Info from "../compents/Info"
import Footer from "../compents/Footer"

function HomePage() {
  return (
    <>
        <NavBar/>
        <SginUp/>
        <LandingPage/>
        <MovieContaien />
        <PopluerSec/>
        <FeatureSec/>
        <Slider head={"Movie"} api={`https://api.themoviedb.org/3/trending/movie/day`} type={"Movie"} />
        <Slider head={"Series"} api={`https://api.themoviedb.org/3/trending/tv/day`} type={"TV Show"}  />
        <Info/>
        <Footer/>
    </>
  );
}

export default HomePage;
