import React from 'react';

import Loader from './Loader';

const LOADERS_COUNT = 5;

function Loaders() {
  return (
    <div className="tickets_form_main">
      {Array(LOADERS_COUNT)
        .fill(0)
        .map((_, index) => (
          <Loader key={index} />
        ))}
    </div>
  );
}

export default Loaders;
