import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';


function Main(props) {
  const [info, setInfo] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialCards()])
      .then(([info, cards]) => {
        setInfo(info);
        setCards(cards);
      })
      .catch(err => {
        console.log(err);
      });
  }, [])

  const { avatar, name, about } = info;

  return (
    <main className="content page__content">
      <section className="profile content__section">
        <div className="profile__avatar">
          <img className="profile__image" src={avatar} alt="Аватар" />
          <button type="button" className="profile__redact" aria-label="редактирование аватара" onClick={props.onEditAvatar} />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{name}</h1>
          <button type="button" className="profile__edit" aria-label="редактирование профиля" onClick={props.onEditProfile} />
          <p className="profile__status">{about}</p>
        </div>
        <button type="button" className="profile__add" aria-label="добавление карточки" onClick={props.onAddPlace} />
      </section>
      <section className="elements content__section" aria-label="Карточки">
        {cards.map((card) => (
          <Card
            card={card}
            onCardClick={props.onImage}
            key={card._id}
          />
        ))}
      </section>
    </main>
  )
};

export default Main;