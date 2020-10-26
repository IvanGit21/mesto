import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import {linkInputAdd,nameInputAdd,nameInputEdit,jobInputEdit,profileName,profileActivity,
param,addButton,editButton,formElementAdd,formElementEdit,initialCards} from '../utils/constants.js';
import {addProfileValue,disabledButton,cleanInput} from '../utils/utils.js';

// Функция слушателей события
const hendleEventListeners = () =>{
addButton.addEventListener('click',() => popupAdd.open())
addButton.addEventListener('click',() => cleanInput());
editButton.addEventListener('click',() => popupEdit.open());
addButton.addEventListener('click',() => disabledButton())
editButton.addEventListener('click',() => addProfileValue());
}

hendleEventListeners();

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
    popupAdd.close();
}

formElementAdd.addEventListener('submit', formSubmitHandlerAdd);

// Сабмит формы редактирования
function formSubmitHandlerEdit (evt) {
    evt.preventDefault(); 

    profileName.textContent = nameInputEdit.value;
    profileActivity.textContent = jobInputEdit.value;

    popupEdit.close();
}

formElementEdit.addEventListener('submit', formSubmitHandlerEdit);

// Включение полей валидации
const formAdd = new FormValidator(param, formElementAdd);
formAdd.enableValidation();

const formEdit = new FormValidator(param, formElementEdit);
formEdit.enableValidation();

// Создание карточек из массива
const cardList = new Section({items: initialCards, renderer:(item)=>{
    const cardImage = new PopupWithImage(item,'.popup_activity-image');
    const card = new Card({item:item,handleOpenPopup:cardImage.open.bind(cardImage)}, '#template-cards');
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
}}, '.elements');

cardList.renderItems();
// Создание попапов
const popupAdd = new Popup('.popup_add');
const popupEdit = new Popup('.popup_add');
const popupWithImage = new Popup('.popup_activity-image')
popupAdd.setEventListeners();
popupEdit.setEventListeners();
popupWithImage.setEventListeners();