import React, { useState, useEffect } from 'react';
import '../../App.scss';

import CoverFlow from '../../components/coverflow/CoverFlow';
import { Ellipsis } from 'react-css-spinners';
import Description from '../Description';

function Home() {

  //hook for api calls loaded
  const [hasLoaded, setHasLoaded] = useState(false);
  //hook for current slide index
  const [currentSlide, setCurrentSlide] = useState(localStorage.getItem("activeSlide"));
  //hook for API data
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://apps.esgplc.com/inprint/api.php?limit=3")
    .then((response) => (response.json()))
    .then((data) => {
      setData(data);
      setHasLoaded(true);
    })
  },[])

  const slideUpdated = (index) => {
    setCurrentSlide(index);
    localStorage.setItem("activeSlide", index);
  }

  if(!hasLoaded) {
    return(
    <div class="react-loading-container">
      <Ellipsis />
      <h1>Loading Magazines...</h1>
    </div>
    )
  }

  return (
    <div class="react-root-element">
      <CoverFlow data={data} updateFunction={slideUpdated} />
      <Description data={data} currentSlide={currentSlide} />
    </div>
  );
}

export default Home;