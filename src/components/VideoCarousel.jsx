import React from 'react';
import { highlightsSlides } from '../constants'; 

const VideoCarousel = () => {
  return (
    <div className='flex items-center'>
      {highlightsSlides.map((list) => (
        <div key={list.id} id="slider">
          <div className='video-carousel_container'>
            Ankit
          </div>
        </div>
      ))}
    </div>
  );
}

export default VideoCarousel
