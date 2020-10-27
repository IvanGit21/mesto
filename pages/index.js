import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {param,addButton,editButton,formElementAdd,formElementEdit,initialCards,nameInputEdit,jobInputEdit} from '../utils/constants.js';
import {disabledButton} from '../utils/utils.js';

// Функция слушателей события
const hendleEventListeners = () =>{
    addButton.addEventListener('click',() => {
        popupAdd.open();
        disabledButton();
})
    editButton.addEventListener('click',() =>{
        popupEdit.open();
        disabledButton();
        nameInputEdit.value = user.getUserInfo().name;
        jobInputEdit.value = user.getUserInfo().description;
    })
}

hendleEventListeners();

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
        const cardImage = new PopupWithImage(formData,'.popup_activity-image');
        const card = new Card({item:formData,handleOpenPopup:cardImage.open.bind(cardImage)}, '#template-cards');
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
        user.setUserInfo(formData.name,formData.description);
    }
})
submitFormEdit.setEventListeners()

// Создание UserInfo
const user = new UserInfo({nameSelector:'.profile__name', descriptionSelector:'.profile__activity'});
user.setUserInfo('Жак-Ив-Кусто','Исследователь океана');