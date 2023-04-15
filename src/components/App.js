import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import ImagePopup from './ImagePopup.js';
import PopupWithForm from './PopupWithForm.js';

function App() {

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleCardClick(card) {
        setIsImagePopupOpen(!isImagePopupOpen);
        setSelectedCard(card);
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsImagePopupOpen(false);
        setSelectedCard({});
    }

    return (
        <>
            <div className="page">
                <Header />
                <Main
                    onEditAvatar={handleEditAvatarClick}
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onImage={handleCardClick}
                />
                <Footer />
                <PopupWithForm
                    name="card-add"
                    title="Новое место"
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                    children={
                        <>
                            <label className="form" id="create" name="newCard" noValidate>
                                <input type="text" id="place" name="place" className="popup__input popup__input_info_place"
                                    placeholder="Название" required minLength="2" maxLength="40" />
                                <span className="popup__error" id="place-error" />
                                <input type="url" id="image" name="image" className="popup__input popup__input_info_image"
                                    placeholder="Ссылка на картинку" required />
                                <span className="popup__error" id="image-error" />
                                <button type="submit" id="add" className="popup__button popup__create popup__button_invalid"
                                    disabled>Создать</button>
                            </label>
                        </>
                    }
                />
                <PopupWithForm
                    name="avatar"
                    title="Обновить аватар"
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                    children={
                        <>
                            <label className="form" id="avatarForm" name="userAvatar" noValidate>
                                <input type="url" id="avatar" name="avatarUrl" className="popup__input popup__input_avatar"
                                    placeholder="Cсылка на аватар" required />
                                <span className="popup__error" id="avatar-error" />
                                <button type="submit" className="popup__button popup__submit popup__button_invalid"
                                    aria-label="Сохранить">Сохранить</button>
                            </label>
                        </>
                    }
                />
                <PopupWithForm
                    name="profile"
                    title="Редактировать профиль"
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    children={
                        <>
                            <label className="form" id="submit" name="user" noValidate>
                                <input type="text" id="info" name="name" className="popup__input popup__input_info_name" placeholder="Имя"
                                    required minLength="2" maxLength="40" />
                                <span className="popup__error" id="info-error" />
                                <input type="text" id="status" name="status" className="popup__input popup__input_info_status"
                                    placeholder="О себе" required minLength="2" maxLength="200" />
                                <span className="popup__error" id="status-error" />
                                <button type="submit" className="popup__button popup__submit">Сохранить</button>
                            </label>
                        </>
                    }
                />
                <ImagePopup
                    card={selectedCard}
                    isOpen={isImagePopupOpen}
                    onClose={closeAllPopups}
                />
            </div>
        </>
    );
}

export default App;