import Popup from './Popup.js';
import {popupImage, popupHeaderActivityImage} from '../utils/constants.js'
export default class PopupWithImage extends Popup{
    constructor( popupSelector){
        super(popupSelector);
    }
    // Функция закрытия попапа с картинкой
    open(item){
        super.open()
        popupImage.src = item.link;
        popupHeaderActivityImage.textContent = item.name;
    }
}