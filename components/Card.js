export default class Card {
    constructor({item,handleOpenPopup}, cardSelector){
        this._name = item.name;
        this._link = item.link;
        this._handleOpenPopup = handleOpenPopup;
        this._cardSelector = cardSelector;
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
        this._element.querySelector('.element__image').src = this._link;

        return this._element;
    }
    // Функция добавления обработчика событий
    _setEventListeners(){
        this._element.querySelector('.grope-button').addEventListener('click', ()=> this._handleLikeIcon());
        this._element.querySelector('.element__image').addEventListener('click', ()=> this._handleOpenPopup());
        this._element.querySelector('.element__del-button').addEventListener('click', ()=>{this._handleDeleteCard()});
    }
    // Функция переключения кнопки лайка
    _handleLikeIcon(){
    this._element.querySelector('.grope-button').classList.toggle('grope-button_active');
    }
    // Функция удаления карточки
    _handleDeleteCard(){
        this._element.remove();
        delete this._element;
    }
}