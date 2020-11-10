import Popup from './Popup.js'
export default class PopupWithForm extends Popup{
    constructor({popupSelector,formSubmit,handleFormSubmit}){
        super(popupSelector)
        this._formSubmit = document.querySelector(formSubmit)
        this._handleFormSubmit = handleFormSubmit;
    }
    // Получение значения полей
    _getInputValues(){
        this._inputList = this._formSubmit.querySelectorAll('.popup__input');
        this._formValues = {};
        this._inputList.forEach((input)=>{
            this._formValues[input.name] = input.value;
        })
        return this._formValues;
    }
    close(){
        super.close()
        this._formSubmit.reset();
    }
    // Слушатель сабмита формы
    setEventListeners() {
        this._formSubmit.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues())
            this._formSubmit.reset();
        })
        this._popupSelector.addEventListener('click',(evt)=>{
            if((evt.target.classList.contains('popup__exit-button')) || (evt.target === evt.currentTarget)){
                this.close();
                this._formSubmit.reset();
            }
        })
    }
    
}