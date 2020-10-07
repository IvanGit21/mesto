import {initialCards} from './arr.js'
import {Card} from './Card.js'

const editButton = document.querySelector('.edit-button');
const formElementAdd = document.querySelector('.popup__form_add');
const formElementEdit = document.querySelector('.popup__form_edit');
const nameInputAdd = document.querySelector('.popup__input_type_card-name');
const linkInputAdd = document.querySelector('.popup__input_type_url');
const nameInputEdit = document.querySelector('.popup__input_type_name');
const jobInputEdit = document.querySelector('.popup__input_type_description');
const profileName = document.querySelector('.profile__name');
const profileActivity = document.querySelector('.profile__activity');
const popupEdit = document.querySelector('.popup_edit');
const addButton = document.querySelector('.add-button');
const popupAdd = document.querySelector('.popup_add');
const exitButtonAdd = document.querySelector('.popup__exit-button_add');
const exitButtonEdit=document.querySelector('.popup__exit-button_edit');


//Выгрузка корточек на страницу
initialCards.forEach((item)=>{
    const card = new Card(item, '#template-cards');
    const cardElement = card.generateCard();
    document.querySelector('.elements').prepend(cardElement)
})

const clickOverlayClose =(evt)=>{
    const popupOpened = document.querySelector('.popup_opened');
    if(evt.target === evt.currentTarget){
        closePopup(popupOpened);
    }
}

const closePopupEsc = (evt) =>{
    const popupOpened = document.querySelector('.popup_opened');
    if(evt.key === 'Escape'){
        closePopup(popupOpened);
    }
}


const openPopup = (popup) => {
    popup.classList.add('popup_opened')
    popup.addEventListener('click',clickOverlayClose);
    document.addEventListener('keydown',closePopupEsc);
}

const closePopup = (popup) => {
    popup.classList.remove('popup_opened')
    popup.removeEventListener('click', clickOverlayClose);
    document.removeEventListener('keydown',closePopupEsc);
}

const setEventListeners = () =>{
addButton.addEventListener('click',() => openPopup(popupAdd));
exitButtonAdd.addEventListener('click',() => closePopup(popupAdd));
editButton.addEventListener('click',() => openPopup(popupEdit));
exitButtonEdit.addEventListener('click',() => closePopup(popupEdit));
}

setEventListeners();

// Сабмит формы добавления
function formSubmitHandlerAdd (evt) {
    evt.preventDefault(); 

    renderCard(nameInputAdd.value,linkInputAdd.value);

    closePopup(popupAdd);
}

formElementAdd.addEventListener('submit', formSubmitHandlerAdd);

// Сабмит формы редактирования
function formSubmitHandlerEdit (evt) {
    evt.preventDefault(); 

    profileName.textContent = nameInputEdit.value;
    profileActivity.textContent = jobInputEdit.value;

    closePopup(popupEdit);
}

formElementEdit.addEventListener('submit', formSubmitHandlerEdit);

