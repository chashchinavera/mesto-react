import React from 'react';

function PopupWithForm({ name, isOpen, onClose, title, children, buttonText }) {
    return (
        <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''
            }`}>
            <div className="popup__container">
                <button type="button" className="popup__close" onClick={onClose} aria-label="закрыть окно редактирования" />
                <h2 className="popup__title">{title}</h2>
                <form className="form" name={name}>
                    {children}
                </form>
                <button type="submit" className="popup__button popup__submit"
                    aria-label="Сохранить">{buttonText}</button>
            </div>
        </div>
    )
};

export default PopupWithForm;