import React from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem';

const ImageCallery = images => (
  <ul class="gallery">
    {images.map(image => (
      <li key={image.id}>
        <ImageGalleryItem />
      </li>
    ))}
  </ul>
);
export { ImageCallery };
