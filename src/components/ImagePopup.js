import React from 'react';

function ImagePopup(props) {
    <div className={`popup popup_type_picture ${props.isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__box">
            <button type="button" className="popup__close" onClick={props.onClose} aria-label="закрыть окно просмотра изображения"></button>
            <img className="popup__image" src={props.card.link} alt={props.card.name} />
            <p className="popup__caption">{props.card.name}</p>
        </div>
    </div>
};

export default ImagePopup;