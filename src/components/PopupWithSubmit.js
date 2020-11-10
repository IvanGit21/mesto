import Popup from './Popup.js';
export default class PopupWithSubmit extends Popup{
    constructor({handleDeleteCard},popupSelector,buttonSelector){
        super(popupSelector)
        this._handleDeleteCard = handleDeleteCard;
        this._confirmButton = document.querySelector(buttonSelector);
    }
    setEventListeners(id,callback){
        this._confirmButton.addEventListener('click',() => {
            this._handleDeleteCard(id)
            .finally(()=>{
                super.close()
            })
            callback();
        });
    }
}