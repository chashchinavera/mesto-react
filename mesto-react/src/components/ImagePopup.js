function ImagePopup() {
    <div className="popup popup_type_picture">
        <div className="popup__box">
            <button type="button" className="popup__close" aria-label="закрыть окно просмотра изображения"></button>
            <img className="popup__image" />
            <p className="popup__caption"></p>
        </div>
    </div>
};

export default ImagePopup;