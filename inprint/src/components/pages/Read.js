import React from 'react';
import '../../App.scss';

function Read({history, match}) {

  return (
    <h1>{match.params.id}</h1>
  );
}

export default Read;