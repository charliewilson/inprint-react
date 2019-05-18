import React from 'react';
import ReadButton from '../components/ReadButton';
import '../App.scss';

function Description({data, currentSlide}) {

  return (
    <div class="react-description-container">
      <h1>{data[currentSlide].name}</h1>
      <p>{data[currentSlide].description.replace("<br>", " ")}</p>
      <ReadButton path={data[currentSlide].path} category={data[currentSlide].category}/>
    </div>
  );
}

export default Description;