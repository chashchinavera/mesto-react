function Main() {
    return (
        <main className="content page__content">
            <section className="profile content__section">
                <div className="profile__avatar">
                    <img className="profile__image" src="#" alt="Аватар" />
                    <button type="button" className="profile__redact" aria-label="редактирование аватара" onClick={handleEditAvatarClick} />
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <button type="button" className="profile__edit" aria-label="редактирование профиля" onClick={handleEditProfileClick} />
                    <p className="profile__status">Исследователь океана</p>
                </div>
                <button type="button" className="profile__add" aria-label="добавление карточки" onClick={handleAddPlaceClick} />
            </section>
            <section className="elements content__section">
            </section>
        </main>
    )
};

function handleEditAvatarClick () {
    document.querySelector('.popup_type_avatar').classList.add('popup_opened');
}

function handleEditProfileClick() {
    document.querySelector('.popup_type_profile').classList.add('popup_opened');
}

function handleAddPlaceClick() {
    document.querySelector('.popup_type_card-add').classList.add('popup_opened');
}

export default Main;