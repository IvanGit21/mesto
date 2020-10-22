import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import {linkInputAdd,nameInputAdd,nameInputEdit,jobInputEdit,profileName,profileActivity,popupAdd,popupEdit,
param,addButton,exitButtonAdd,editButton,exitButtonEdit,formElementAdd,formElementEdit,initialCards} from '../utils/constants.js'
import {openPopup,closePopup,addProfileValue,disabledButton,cleanInput} from '../utils/utils.js';

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
    const cardItem = new Section({items: [{name:nameInputAdd.value, link:linkInputAdd.value}], renderer:(item)=>{
        const card = new Card(item, '#template-cards');
        const cardElement = card.generateCard();
        cardItem.addItem(cardElement);
}}, '.elements');
    cardItem.renderItems()
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

// Создание карточек
const cardList = new Section({items: initialCards, renderer:(item)=>{
        const card = new Card(item, '#template-cards');
        const cardElement = card.generateCard();
        cardList.addItem(cardElement);
}}, '.elements');

cardList.renderItems();
