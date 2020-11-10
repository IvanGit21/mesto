export default class Card {
    constructor({item, handleOpenPopup, hendleOpenPopupDel, setListener, setLike, removeLike}, cardSelector){
        this._name = item.name;
        this._link = item.link;
        this._like = item.likes;
        this._owner = item.owner._id;
        this._cardId = item._id;
        this._item = item;
        this._handleOpenPopup = handleOpenPopup;
        this._handleOpenPopupDel = hendleOpenPopupDel;
        this._cardSelector = cardSelector;
        this._setListener = setListener;
        this._setLike = setLike;
        this._removeLike = removeLike;
    }
    // Сортировка состояния иконки удаления
    _iconState(){
        return this._owner === 'bea70c3bd52a4fe09217cba6'? 'block': 'none';
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
        this._element.querySelector('.grope-button').addEventListener('click', ()=> {
            this._handleLikeIcon(this._like)
        });
        this._element.querySelector('.element__image').addEventListener('click', ()=> this._handleOpenPopup());
        this._element.querySelector('.element__del-button').style.display = this._iconState();
        this._element.querySelector('.element__del-button').addEventListener('click', ()=> {
            this._handleOpenPopupDel();
            this._setListener(this._cardId,this._deleteCard.bind(this))
        });
        this._handleLikeOnServer(this._like)
    }
    // Отрисовка лайка
    _handleLikeIcon(list){
        if(this._checkLikeMe(list)){
            this._removeLike(this._cardId)
            .then((res)=>{
                this._element.querySelector('.grope-counter').textContent = res.likes.length;
                this._element.querySelector('.grope-button').classList.remove('grope-button_active');
                this._like = res.likes;
            })
        }else{
            this._setLike(this._cardId)
            .then((res)=>{
                this._element.querySelector('.grope-counter').textContent = res.likes.length;
                this._element.querySelector('.grope-button').classList.add('grope-button_active');
                this._like = res.likes;
            })
        }
    }
    // Отрисовка лайка с сервера
    _handleLikeOnServer(list){
        if(this._checkLikeMe(list)){
            this._element.querySelector('.grope-button').classList.add('grope-button_active');
        }
    }
    // Проверка наличия собственного лайка
    _checkLikeMe(list){
        const newList = list.some((el)=>{
            return el._id === 'bea70c3bd52a4fe09217cba6'
        })
        return newList;
    }
    // Функция удаления карточки
    _deleteCard(){
        this._element.remove();
        delete this._element;
    }
}