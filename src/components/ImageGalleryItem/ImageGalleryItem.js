import React, { Component } from 'react';
import * as S from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { imgUrl, description, largeImgUrl } = this.props;
    const { showModal } = this.state;
    return (
      <S.Item>
        <S.Image src={imgUrl} alt={description} onClick={this.toggleModal} />
        {showModal && (
          <Modal
            src={largeImgUrl}
            alt={description}
            onClose={this.toggleModal}
          />
        )}
      </S.Item>
    );
  }
}
export { ImageGalleryItem };
