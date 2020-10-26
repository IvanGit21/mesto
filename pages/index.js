import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js'
import {profileName,profileActivity,
param,addButton,editButton,formElementAdd,formElementEdit,initialCards} from '../utils/constants.js';
import {addProfileValue,disabledButton} from '../utils/utils.js';

// Функция слушателей события
const hendleEventListeners = () =>{
addButton.addEventListener('click',() => {
    popupAdd.open();
    disabledButton();
})
editButton.addEventListener('click',() => popupEdit.open());
editButton.addEventListener('click',() => addProfileValue());
}

hendleEventListeners();

function addNameProfile(){
    profileName.textContent = 'Жак-Ив-Кусто';
    profileActivity.textContent = 'Исследователь океана';
}
addNameProfile();

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
const popupEdit = new Popup('.popup_edit');
const popupWithImage = new Popup('.popup_activity-image')
popupAdd.setEventListeners();
popupEdit.setEventListeners();
popupWithImage.setEventListeners();
// Создание форм сабмита добавления
const submitFormAdd = new PopupWithForm({
    popupSelector: '.popup_add',
    formSubmit:'.popup__form_add',
    handleFormSubmit:(formData)=>{
        const card = new Card({item:formData}, '#template-cards');
        const cardElement = card.generateCard();
        cardList.addItem(cardElement);
    }
})
submitFormAdd.setEventListeners();
// Создание форм сабмита редактирования
const submitFormEdit = new PopupWithForm({
    popupSelector: '.popup_edit',
    formSubmit:'.popup__form_edit',
    handleFormSubmit:(formData)=>{
        profileName.textContent = formData.name;
        profileActivity.textContent = formData.description;
    }
})
submitFormEdit.setEventListeners()