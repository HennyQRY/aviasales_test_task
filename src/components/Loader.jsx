import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = () => (
  <ContentLoader
    speed={2}
    width={502}
    height={204}
    viewBox='0 0 502 204'
    backgroundColor='#ffffff'
    foregroundColor='#67a8fe'
  >
    <rect x='219' y='436' rx='0' ry='0' width='6' height='0' />
    <rect x='0' y='10' rx='5' ry='5' width='502' height='184' />
  </ContentLoader>
);

export default Loader;
