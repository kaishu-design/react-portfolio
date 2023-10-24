import React, { useState } from 'react';

const Gallery = () => {
  const [selectedGenre, setSelectedGenre] = useState('nature');

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <div class="container">
      {/* <div className='d-flex justify-content-center mt-5'>
        <h3>Gallery</h3>
      </div> */}
      <div className='gallery-box'>

      <nav class="nav nav-pills nav-fill d-flex justify-content-center">
        <button
          className={`border-0 genre-item ${
            selectedGenre === 'nature' ? 'is-active' : ''
          }`}
          onClick={() => handleGenreClick('nature')}
        >
          nature
        </button>

        <button
          className={`border-0 genre-item ${
            selectedGenre === 'landscape' ? 'is-active' : ''
          }`}
          onClick={() => handleGenreClick('landscape')}
          >
          Landscape
        </button>

          <button
            className={`border-0 genre-item ${
              selectedGenre === 'others' ? 'is-active' : ''
            }`}
            onClick={() => handleGenreClick('others')}
          >
            Others
          </button>
        </nav>

        <div className='d-flex justify-content-center'>
          <div className="photos-container d-flex justify-content-center">
            {selectedGenre === 'nature' && (
              <div className="nature-photos">
                Nature photos
              </div>
            )}

            {selectedGenre === 'landscape' && (
              <div className="landscape-photos">
                Landscape photos
              </div>
            )}

            {selectedGenre === 'others' && (
              <div className="others-photos">
                Other photos
              </div>
            )}

        </div>
      </div>
      </div>
    </div>
  )
}

export default Gallery
