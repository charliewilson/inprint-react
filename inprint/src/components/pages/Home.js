import React, { useState, useEffect } from 'react';
import '../../App.scss';

import CoverFlow from '../../components/coverflow/CoverFlow';
import { Ellipsis } from 'react-css-spinners';
import Description from '../Description';

function Home() {

  //hook for api calls
  const [hasLoaded, setHasLoaded] = useState(false);
  //hook for current slide index
  const [currentSlide, setCurrentSlide] = useState(localStorage.getItem("activeSlide"));
  //hook for API data
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://apps.esgplc.com/inprint/api.php")
    .then((response) => (response.json()))
    .then((data) => {
      setData(data);
      setHasLoaded(true);
      console.log(data);
    })
  },[])

  const slideUpdated = (index) => {
    setCurrentSlide(index);
    localStorage.setItem("activeSlide", index);
  }

  if(!hasLoaded) {
    return <Ellipsis />;
  }

  return (
    <React.Fragment>
      <CoverFlow data={data} updateFunction={slideUpdated} />
      <Description data={data} currentSlide={currentSlide} />
    </React.Fragment>
  );
}

export default Home;