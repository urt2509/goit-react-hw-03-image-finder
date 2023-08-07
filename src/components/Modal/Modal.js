import { Component } from 'react';
import { createPortal } from 'react-dom';

import * as S from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = evt => {
    console.log(this.props);
    if (evt.currentTarget === evt.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImgUrl, description } = this.props;

    return createPortal(
      <S.Overlay onClick={this.handleBackdropClick}>
        <S.Container>
          <S.Image src={largeImgUrl} alt={description} />
        </S.Container>
      </S.Overlay>,
      modalRoot
    );
  }
}

export { Modal };
