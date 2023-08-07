import React from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem';
import * as S from './ImageGallery.styled';

const ImageCallery = ({ images }) => {
  return (
    <S.ImageList>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          imgUrl={webformatURL}
          description={tags}
          largeImgUrl={largeImageURL}
        />
      ))}
    </S.ImageList>
  );
};

export { ImageCallery };
