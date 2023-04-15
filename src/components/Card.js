import React from 'react';

function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <article className="element">
            <button type="button" className="element__button">
                <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleClick} />
            </button>
            <button type="button" className="element__delete" aria-label="Удалить"></button>
            <div className="element__info">
                <h2 className="element__title">{props.card.name}</h2>
                <div className="element__like">
                    <button type="button" className="element__like_button" aria-label="Мне нравится"></button>
                    <p className="element__like_counter">{props.card.likes.length}</p>
                </div>
            </div>
        </article>
    )
};

export default Card;