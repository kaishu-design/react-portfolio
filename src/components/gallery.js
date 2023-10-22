import React, { useState } from 'react';

const Gallery = () => {
  const [selectedGenre, setSelectedGenre] = useState('nature');

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <div class="container">
      <div className='d-flex justify-content-center'>
        <h4>Gallery</h4>
      </div>
      <div className='gallery-box'>

      <nav class="nav nav-pills nav-fill d-flex justify-content-center">
        <button
          className={`btn btn-outline-secondary mx-2 genre-item ${
            selectedGenre === 'nature' ? 'is-active' : ''
          }`}
          onClick={() => handleGenreClick('nature')}
        >
          nature
        </button>

        <button
          className={`btn btn-outline-secondary mx-2 genre-item ${
            selectedGenre === 'landscape' ? 'is-active' : ''
          }`}
          onClick={() => handleGenreClick('landscape')}
          >
          Landscape
        </button>

          <button
            className={`btn btn-outline-secondary mx-2 genre-item ${
              selectedGenre === 'others' ? 'is-active' : ''
            }`}
            onClick={() => handleGenreClick('other')}
          >
            Others
          </button>
        </nav>

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

          {selectedGenre === 'other' && (
            <div className="other-photos">
              Other photos
            </div>
          )}

      </div>
      </div>
    </div>
  )
}

export default Gallery
