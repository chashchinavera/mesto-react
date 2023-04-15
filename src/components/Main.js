import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';


function Main(props) {
    const [info, setInfo] = React.useState({});
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserData()
          .then(result => {
            setInfo(result);
          })
          .catch(err => {
            console.log(err);
          });
          api.getInitialCards()
            .then(result => {
              setCards(result);
            })
            .catch(err => {
              console.log(err);
            });
      }, [])
    

const userAvatar = info.avatar;
const userName = info.name;
const userDescription = info.about;

    return (
        <main className="content page__content">
            <section className="profile content__section">
                <div className="profile__avatar">
                    <img className="profile__image" src={userAvatar} alt="Аватар" />
                    <button type="button" className="profile__redact" aria-label="редактирование аватара" onClick={props.onEditAvatar} />
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button type="button" className="profile__edit" aria-label="редактирование профиля" onClick={props.onEditProfile} />
                    <p className="profile__status">{userDescription}</p>
                </div>
                <button type="button" className="profile__add" aria-label="добавление карточки" onClick={props.onAddPlace} />
            </section>
            <section className="elements content__section" aria-label="Карточки">
        {cards.map(card => (
          <Card card={card} onCardClick={props.onImage} key={card._id} />
        ))}
      </section>
        </main>
    )
};

export default Main;