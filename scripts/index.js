import {initialCards} from './arr.js'
import {Card} from './Card.js'
import {FormValidator} from './FormValidator.js'
import {openPopup,closePopup} from './utils.js'

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
const sectionCard = document.querySelector('.elements');
const formElement = document.querySelector('.popup__form');
const param = {
    form: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
}
// Рендер карточек на страницу
const renderCard = (name,link, cardSelector) =>{
    const card = new Card(name,link, cardSelector);
    const cardElement = card.generateCard();
    sectionCard.prepend(cardElement)
}
//Выгрузка корточек на страницу из массива
initialCards.forEach((item)=>{
    renderCard(item.name,item.link, '#template-cards')
})
// Функция слушателей события
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

    renderCard(nameInputAdd.value,linkInputAdd.value, '#template-cards');

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

// Включение полей валидации
const card = new FormValidator(param, formElement);
card.enableValidation();