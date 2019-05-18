import React from 'react';
import ReadButton from '../components/ReadButton';
import '../App.scss';

function Description({data, currentSlide}) {

  return (
    <React.Fragment>
      <h1>{data[currentSlide].name}</h1>
      <p>{data[currentSlide].description.replace("<br>", " ")}</p>
      <ReadButton goto={currentSlide} category={data[currentSlide].category}/>
    </React.Fragment>
  );
}

export default Description;