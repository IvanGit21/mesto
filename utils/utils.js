export const nameInputAdd = document.querySelector('.popup__input_type_card-name');
export const linkInputAdd = document.querySelector('.popup__input_type_url');
export const nameInputEdit = document.querySelector('.popup__input_type_name');
export const jobInputEdit = document.querySelector('.popup__input_type_description');
export const profileName = document.querySelector('.profile__name');
export const profileActivity = document.querySelector('.profile__activity');
const buttonElement = document.querySelector('.popup__button_add');
export const param = {
    form: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
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