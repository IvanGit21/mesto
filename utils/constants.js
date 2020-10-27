export const editButton = document.querySelector('.edit-button');
export const formElementAdd = document.querySelector('.popup__form_add');
export const formElementEdit = document.querySelector('.popup__form_edit');
export const popupEdit = document.querySelector('.popup_edit');
export const addButton = document.querySelector('.add-button');
export const popupAdd = document.querySelector('.popup_add');
export const exitButtonAdd = document.querySelector('.popup__exit-button_add');
export const exitButtonEdit=document.querySelector('.popup__exit-button_edit');
export const formElement = document.querySelector('.popup__form');
export const popupImage = document.querySelector('.popup__image');
export const popupActiveImage = document.querySelector('.popup_activity-image');
export const popupExitButttonActivImage = document.querySelector('.popup__exit-button_activity-image');
export const popupHeaderActivityImage = document.querySelector('.popup__header_activity-image');
export const nameInputAdd = document.querySelector('.popup__input_type_card-name');
export const linkInputAdd = document.querySelector('.popup__input_type_url');
export const nameInputEdit = document.querySelector('.popup__input_type_name');
export const jobInputEdit = document.querySelector('.popup__input_type_description');
export const profileName = document.querySelector('.profile__name');
export const profileActivity = document.querySelector('.profile__activity');
export const buttonElement = document.querySelector('.popup__button_add');
export const submitButton = document.querySelector('.popup__button')
export const param = {
    form: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
}
export  const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];