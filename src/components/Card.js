export default class Card {
    constructor({item, handleOpenPopup, hendleOpenPopupDel, setListener}, cardSelector){
        this._name = item.name;
        this._link = item.link;
        this._like = item.likes;
        this._owner = item.owner._id;
        this._cardId = item._id;
        this._handleOpenPopup = handleOpenPopup;
        this._handleOpenPopupDel = hendleOpenPopupDel;
        this._cardSelector = cardSelector;
        this._setListener = setListener;
    }
    // Сортировка состояния иконки удаления
    _iconState(){
        if(this._owner === 'bea70c3bd52a4fe09217cba6'){
            return 'block'
        }else{
            return 'none'
        }
    }
    // Получение шаблона карточки
    _getTemplate(){
        const cardElement = document.querySelector(this._cardSelector).content
        .querySelector('.element')
        .cloneNode(true);

        return cardElement;
    }
    // Заполнение шаблона корточки данными
    generateCard(){
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.element__title').textContent = this._name;
        this._element.querySelector('.grope-counter').textContent = this._like.length;
        this._element.querySelector('.element__image').src = this._link;

        return this._element;
    }
    // Функция добавления обработчика событий
    _setEventListeners(){
        this._element.querySelector('.grope-button').addEventListener('click', ()=> this._handleLikeIcon());
        this._element.querySelector('.element__image').addEventListener('click', ()=> this._handleOpenPopup());
        this._element.querySelector('.element__del-button').style.display = this._iconState();
        this._element.querySelector('.element__del-button').addEventListener('click', ()=> {
            this._handleOpenPopupDel();
            this._setListener(this._cardId,this._deleteCard.bind(this))
        });
    }
    // Функция переключения кнопки лайка
    _handleLikeIcon(){
    this._element.querySelector('.grope-button').classList.toggle('grope-button_active');
    }
    // Функция удаления карточки
    _deleteCard(){
        this._element.remove();
        delete this._element;
    }
}