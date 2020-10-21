import {initialCards} from '../utils/arr'
import {Card} from './Card.js'
import {FormValidator} from './FormValidator.js'
import {openPopup,closePopup} from './utils.js'
import {linkInputAdd,nameInputAdd,nameInputEdit,jobInputEdit,profileName,profileActivity,cleanInput,addProfileValue,disabledButton} from './utils.js';
import {param} from './utils.js'

const editButton = document.querySelector('.edit-button');
const formElementAdd = document.querySelector('.popup__form_add');
const formElementEdit = document.querySelector('.popup__form_edit');
const popupEdit = document.querySelector('.popup_edit');
const addButton = document.querySelector('.add-button');
const popupAdd = document.querySelector('.popup_add');
const exitButtonAdd = document.querySelector('.popup__exit-button_add');
const exitButtonEdit=document.querySelector('.popup__exit-button_edit');
const sectionCard = document.querySelector('.elements');
const formElement = document.querySelector('.popup__form');

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
addButton.addEventListener('click',() => cleanInput());
exitButtonAdd.addEventListener('click',() => closePopup(popupAdd));
editButton.addEventListener('click',() => openPopup(popupEdit));
addButton.addEventListener('click',() => disabledButton())
editButton.addEventListener('click',() => addProfileValue());
exitButtonEdit.addEventListener('click',() => closePopup(popupEdit));
}

setEventListeners();

function addNameProfile(){
    profileName.textContent = 'Жак-Ив-Кусто';
    profileActivity.textContent = 'Исследователь океана';
}
addNameProfile();

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
const formAdd = new FormValidator(param, formElementAdd);
formAdd.enableValidation();

const formEdit = new FormValidator(param, formElementEdit);
formEdit.enableValidation();