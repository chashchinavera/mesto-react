function PopupWithForm(props) {
    return (
    <div className={`popup popup_type_${props.name}`}>
        <div className="popup__container">
            <button type="button" className="popup__close" aria-label="закрыть окно редактирования" />
            <h2 className="popup__title">{props.title}</h2>
            <form className="form" id="submit" name={props.name} novalidate>
                {props.children}
                <button type="submit" className="popup__button popup__submit">Сохранить</button>
            </form>
        </div>
    </div>
)
};

export default PopupWithForm;