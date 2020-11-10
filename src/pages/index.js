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
import {param,addButton,editButton,formElementAdd,formElementEditAvatar,formElementEdit,nameInputEdit,jobInputEdit,profileOvarlay} from '../utils/constants.js';
import {disabledButton, renderLoading} from '../utils/utils.js';

// Создание форм сабмита редактирования
const popupEdit = new PopupWithForm({
    popupSelector: '.popup_edit',
    formSubmit:'.popup__form_edit',
    handleFormSubmit:(formData)=>{
        renderLoading(true)
        api.dispatchProfileInfo(formData)
        .then((res)=>{
            user.setUserInfo(res.name, res.about, res.avatar)

        })
        .catch((err) => {
            console.log(err)
        })
        .finally(()=>{
            renderLoading(false);
            popupEdit.close()
        })
    }
})
popupEdit.setEventListeners();

// Создание форм сабмита добавления
const popupAdd = new PopupWithForm({
    popupSelector: '.popup_add',
    formSubmit:'.popup__form_add',
    handleFormSubmit:(formData)=>{
        renderLoading(true)
        api.createNewCard(formData)
        .then((res)=>{
            const card = new Card({
                item:res,
                handleOpenPopup:popupWithImage.open.bind(popupWithImage),
                hendleOpenPopupDel:popupDelete.open.bind(popupDelete),
                setListener: confirmPopup.setEventListeners.bind(confirmPopup),
                setLike:api.setLike.bind(api),
                removeLike:api.removeLike.bind(api),
            }, '#template-cards');
            const cardElement = card.generateCard();
            cardList.addItem(cardElement);
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(()=>{
            renderLoading(false)
            popupAdd.close()
        })
    }
})
popupAdd.setEventListeners();

//Создание форм сабмита обновления аватара
const popupEditAvatr = new PopupWithForm({
    popupSelector: '.popup_edit-avatar',
    formSubmit:'.popup__form_edit-avatar',
    handleFormSubmit:(url)=>{
        renderLoading(true)
        api.updateAvatar(url)
        .then((res)=>{
            user.setUserInfo(res.name, res.about, res.avatar)
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(()=>{
            renderLoading(false)
            popupEditAvatar.close()
        })
    }
})
popupEditAvatr.setEventListeners();

// Функция слушателей события
const hendleEventListeners = () =>{
    addButton.addEventListener('click',() => {
        popupAdd.open()
        disabledButton();
})
    editButton.addEventListener('click',() =>{
        popupEdit.open();
        nameInputEdit.value = user.getUserInfo().name;
        jobInputEdit.value = user.getUserInfo().about;
    })
    profileOvarlay.addEventListener('click',()=>{
        popupEditAvatar.open();
    })
}

hendleEventListeners();

// Включение полей валидации
const formAdd = new FormValidator(param, formElementAdd);
formAdd.enableValidation();

const formEdit = new FormValidator(param, formElementEdit);
formEdit.enableValidation();

const formEditAvatar = new FormValidator(param, formElementEditAvatar);
formEditAvatar.enableValidation();

// Создание попапов
const popupWithImage = new PopupWithImage('.popup_activity-image');
const popupDelete = new Popup('.popup_type_delete');
const popupEditAvatar = new Popup('.popup_edit-avatar');

popupWithImage.setEventListeners();
popupDelete.setEventListeners();
popupEditAvatar.setEventListeners();

// Создание UserInfo
const  user = new UserInfo({nameSelector:'.profile__name', descriptionSelector:'.profile__activity', imageSelector:'.profile__avatar'});

// Создание экземпляра Api
const api = new Api({
    baseUrl:'https://mesto.nomoreparties.co/v1/cohort-17', 
        headers: {
            authorization: '4e6363ac-1195-46c5-9360-6be88656e9c8',
            'Content-Type': 'application/json'
        }
})
// Загрузка данный с сервера
const cards = api.getInitialCards();
const userInfo = api.getProfileInfo();

const arrPromise = [cards, userInfo];

Promise.all(arrPromise)
.then((res)=>{
    cardList.renderItems(res[0]);
    user.setUserInfo(res[1].name, res[1].about, res[1].avatar);
})
.catch((err)=>{
    console.log(err)
})

const cardList =  new Section({items: cards, renderer:(item)=>{
        // const cardImage = new PopupWithImage('.popup_activity-image');
        const card = new Card({
            item:item,
            handleOpenPopup:popupWithImage.open.bind(popupWithImage),
            hendleOpenPopupDel:popupDelete.open.bind(popupDelete),
            setListener: confirmPopup.setEventListeners.bind(confirmPopup),
            setLike:api.setLike.bind(api),
            removeLike:api.removeLike.bind(api),
        }, '#template-cards');
        const cardElement = card.generateCard();
        cardList.addItem(cardElement);
}}, '.elements');

// Создание экземпляра подтверждения
const confirmPopup = new PopupWithSubmit({
    handleDeleteCard: api.deleteCard.bind(api)
},
    '.popup_type_delete',
    '.popup__button_type_delete'
);

api.getProfileInfo()
.then((res)=>{
    console.log(res)
})