import React from 'react';

function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <button type="button" className="popup__close" onClick={props.onClose} aria-label="закрыть окно редактирования" />
                <h2 className="popup__title">{props.title}</h2>
                <form className="form" name={props.name} noValidate>
                    {props.children}
                </form>
                <button type="submit" className="popup__button popup__submit"
                            aria-label="Сохранить">{props.buttonText}</button>
            </div>
        </div>
    )
};

export default PopupWithForm;