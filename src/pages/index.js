import './index.css'
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupWithSubmit from '../components/PopupWithSubmit.js';
import {param,addButton,editButton,formElementAdd,formElementEdit,nameInputEdit,jobInputEdit} from '../utils/constants.js';
import {disabledButton} from '../utils/utils.js';
// Функция слушателей события
const hendleEventListeners = () =>{
    addButton.addEventListener('click',() => {
        popupAdd.open();
        disabledButton();
})
    editButton.addEventListener('click',() =>{
        popupEdit.open();
        nameInputEdit.value = user.getUserInfo().name;
        jobInputEdit.value = user.getUserInfo().about;
    })
}

hendleEventListeners();

// Включение полей валидации
const formAdd = new FormValidator(param, formElementAdd);
formAdd.enableValidation();

const formEdit = new FormValidator(param, formElementEdit);
formEdit.enableValidation();

// Создание попапов
const popupAdd = new Popup('.popup_add');
const popupEdit = new Popup('.popup_edit');
const popupWithImage = new Popup('.popup_activity-image');
const popupDelete = new Popup('.popup_type_delete')
popupAdd.setEventListeners();
popupEdit.setEventListeners();
popupWithImage.setEventListeners();
popupDelete.setEventListeners();

// Создание UserInfo
const user = new UserInfo({nameSelector:'.profile__name', descriptionSelector:'.profile__activity', imageSelector:'.profile__avatar'});

// Создание экземпляра Api
const api = new Api({
    baseUrl:'https://mesto.nomoreparties.co/v1/cohort-17', 
        headers: {
            authorization: '4e6363ac-1195-46c5-9360-6be88656e9c8'
        }
});
// Создание карточек с сервера
const cards = api.getInitialCards()
.then((res)=>{
    cardList.renderItems(res);
})
.catch((err)=>{
    console.log(err)
})
const cardList =  new Section({items: cards, renderer:(item)=>{
        const cardImage = new PopupWithImage(item,'.popup_activity-image');
        const card = new Card({item:item,
            handleOpenPopup:cardImage.open.bind(cardImage),
            hendleOpenPopupDel:popupDelete.open.bind(popupDelete),
            setListener: confirmPopup.setEventListeners.bind(confirmPopup),
        }, '#template-cards');
        const cardElement = card.generateCard();
        cardList.addItem(cardElement);
}}, '.elements');
// Создание экземпляра подтверждения
const confirmPopup = new PopupWithSubmit({handleDeleteCard: api.deleteCard.bind(api)}, '.popup_type_delete', '.popup__button_type_delete');
// Запрос информации о пользователе
api.getProfileInfo()
.then((res)=>{
    user.setUserInfo(res.name, res.about, res.avatar);
})
.catch((err)=>{
    console.log(err)
})

// Создание форм сабмита редактирования
const submitFormEdit = new PopupWithForm({
    popupSelector: '.popup_edit',
    formSubmit:'.popup__form_edit',
    handleFormSubmit:(formData)=>{
        const newApi = new Api({
            baseUrl:'https://mesto.nomoreparties.co/v1/cohort-17', 
                headers: {
                    authorization: '4e6363ac-1195-46c5-9360-6be88656e9c8',
                    'Content-Type': 'application/json'
                },
                body:formData
        })
        newApi.dispatchProfileInfo()
        .then((res)=>{
            user.setUserInfo(res.name, res.about, res.avatar)
        })
    }
})
submitFormEdit.setEventListeners();

// Создание форм сабмита добавления
const submitFormAdd = new PopupWithForm({
    popupSelector: '.popup_add',
    formSubmit:'.popup__form_add',
    handleFormSubmit:(formData)=>{
        const newApi = new Api({
            baseUrl:'https://mesto.nomoreparties.co/v1/cohort-17', 
                headers: {
                    authorization: '4e6363ac-1195-46c5-9360-6be88656e9c8',
                    'Content-Type': 'application/json'
                },
                body:formData
        })
        newApi.createNewCard()
        .then((res)=>{
            const cardImage = new PopupWithImage(res,'.popup_activity-image');
            const card = new Card({
                item:res,handleOpenPopup:cardImage.open.bind(cardImage),
                hendleOpenPopupDel:popupDelete.open.bind(popupDelete),
                setListener: confirmPopup.setEventListeners.bind(confirmPopup),
            },'#template-cards');
            const cardElement = card.generateCard();
            cardList.addItem(cardElement);
        })
    }
})
submitFormAdd.setEventListeners();