import Popup from './Popup.js';
import {popupImage, popupHeaderActivityImage, popupEdit} from '../utils/constants.js'
export default class PopupWithImage extends Popup{
    constructor({name,link}, popupSelector){
        super(popupSelector);
        this._popupSelector = popupSelector;
        this._name = name;
        this._link = link;
    }
    open(){
        // super.open()
        // popupImage.src = this._link;
        // popupHeaderActivityImage.textContent = this._name;
        console.log(this._popupSelector )
    }
}