import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
    return (
        <>
            <div className="page">
                <Header />
                <Main />
                <Footer />

                <template id="element">
                    <article className="element">
                        <button type="button" className="element__button"><img className="element__image" /></button>
                        <button type="button" className="element__delete" aria-label="Удалить"></button>
                        <div className="element__info">
                            <h2 className="element__title"></h2>
                            <div className="element__like">
                                <button type="button" className="element__like_button" aria-label="Мне нравится"></button>
                                <p className="element__like_counter"></p>
                            </div>
                        </div>
                    </article>
                </template>

                <PopupWithForm />
                <ImagePopup />
            </div>
        </>
    );
}

export default App;
