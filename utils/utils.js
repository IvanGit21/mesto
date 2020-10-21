import Card from '../components/Card.js';
import {sectionCard,nameInputEdit,jobInputEdit,profileName,profileActivity,nameInputAdd,linkInputAdd,buttonElement,param} from '../utils/constants.js'
// Рендер карточек на страницу
export const renderCard = (name,link, cardSelector) =>{
    const card = new Card(name,link, cardSelector);
    const cardElement = card.generateCard();
    sectionCard.prepend(cardElement)
}

// Закрытие попапа по клику на оверлей
export const clickOverlayClose =(evt)=>{
    const popupOpened = document.querySelector('.popup_opened');
    if(evt.target === evt.currentTarget){
        closePopup(popupOpened);
    }
}
// Закрытие попапа по ESC
export const closePopupEsc = (evt) =>{
    const popupOpened = document.querySelector('.popup_opened');
    if(evt.key === 'Escape'){
        closePopup(popupOpened);
    }
}

// Функция открытия попапа
export const openPopup = (popup) => {
    popup.classList.add('popup_opened')
    popup.addEventListener('click',clickOverlayClose);
    document.addEventListener('keydown',closePopupEsc);
}
// Функция закрытия попапа
export const closePopup = (popup) => {
    popup.classList.remove('popup_opened')
    popup.removeEventListener('click', clickOverlayClose);
    document.removeEventListener('keydown',closePopupEsc);
}
export function cleanInput(){
    nameInputAdd.value = '';
    linkInputAdd.value = '';
}
export function addProfileValue(){
    nameInputEdit.value = profileName.textContent; 
    jobInputEdit.value = profileActivity.textContent; 
}
export function disabledButton(){
    buttonElement.setAttribute('disabled',true);
    buttonElement.classList.add(param.inactiveButtonClass);
}