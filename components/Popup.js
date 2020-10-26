export default class Popup{
    constructor(popupSelector){
        this._popupSelector = document.querySelector(popupSelector)
    }
    // Функция открытия попапа
    open(){
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown',(evt)=>{this._handleEscClose(evt)});
    }
    // Функция закрытия попапа
    close(){
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown',(evt)=>{this._handleEscClose(evt)});
    }
    // Слушатель закрытия по Esc
    _handleEscClose(evt){
        if(evt.key === 'Escape'){
        this.close()
        }
    }
    // Слушатель закрытия попапа по иконке
    setEventListeners(){
        this._popupSelector.addEventListener('click',(evt)=>{
            if(evt.target.classList.contains('popup__exit-button')){
                this.close()
            }else if(evt.target === evt.currentTarget){
                this.close()
            }
        })
    }
}