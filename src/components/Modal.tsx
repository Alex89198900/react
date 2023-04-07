import React from 'react';

import { CardType } from '../model';

interface ModalType {
  elem1: Array<CardType>;
}
function Modal(props: ModalType) {
  const price = props.elem1[0] ? 'Prise:' + props.elem1[0]?.price : '';
  return (
    <div className="modal">
      <img src={props.elem1[0]?.thumbnail} className="img-modal"></img>
      <h3 className="title-modal">{props.elem1[0]?.title}</h3>
      <div className="container-info-modal">
        <div>{props.elem1[0]?.brand}</div>
        <div>{props.elem1[0]?.category}</div>
      </div>
      <div className="desc-modal">{props.elem1[0]?.description}</div>
      <div className="price-modal">{price}</div>
    </div>
  );
}

export default Modal;
