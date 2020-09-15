const editButton = document.querySelector('.edit-button');
const popupButtonAdd = document.querySelector('.popup__button_add');
const popupButtonEdit = document.querySelector('.popup__button_edit');
const formElementAdd = document.querySelector('.popup__form_add');
const formElementEdit = document.querySelector('.popup__form_edit');
const nameInputAdd = document.querySelector('.popup__input_type_card-name');
const linkInputAdd = document.querySelector('.popup__type_input_url');
const nameInputEdit = document.querySelector('.popup__input_type_name');
const jobInputEdit = document.querySelector('.popup__input_type_description');
const profileName = document.querySelector('.profile__name');
const profileActivity = document.querySelector('.profile__activity');
const popupEdit = document.querySelector('.popup_edit');
const addButton = document.querySelector('.add-button');
const popupAdd = document.querySelector('.popup_add');
const exitButtonAdd = document.querySelector('.popup__exit-button_add');
const exitButtonEdit=document.querySelector('.popup__exit-button_edit');
const delButton = document.querySelector('.element__del-button');
const popupActiveImage = document.querySelector('.popup_activity-image');
const popupImage = document.querySelector('.popup__image');
const popupHeaderActivityImage = document.querySelector('.popup__header_activity-image')
const popupExitButttonActivImage = document.querySelector('.popup__exit-button_activity-image');
const templateCards = document.querySelector('#template-cards').content;
const sectionCard = document.querySelector('.elements');

const openPopup = (popup) => {
    popup.classList.add('popup_opened')
}

const closePopup = (popup) => {
    popup.classList.remove('popup_opened')
}

addButton.addEventListener('click',() => openPopup(popupAdd));
exitButtonAdd.addEventListener('click',() => closePopup(popupAdd));
editButton.addEventListener('click',() => openPopup(popupEdit));
exitButtonEdit.addEventListener('click',() => closePopup(popupEdit));


function formSubmitHandlerEdit (evt) {
    evt.preventDefault(); 

    profileName.textContent = nameInputEdit.value;
    profileActivity.textContent = jobInputEdit.value;

    closePopup(popupEdit);
}

formElementEdit.addEventListener('submit', formSubmitHandlerEdit);

const initialCards = [
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

const handleDeleteCard = (evt) => {
    const element = evt.target.closest('.element');
    element.remove();
}

const handleLikeIcon = (evt) => {
    evt.target.classList.toggle('grope-button_active')
}

const handlePreviewPicture = (evt) =>{
    openPopup(popupActiveImage);
    const src = evt.target.getAttribute('src');
    popupImage.setAttribute('src',src);
    const name = evt.target.getAttribute('alt');
    popupHeaderActivityImage.textContent = name;
}

const getCardElement = (name,link) =>{

    const cloneCard = templateCards.cloneNode(true);
    cloneCard.querySelector('.element__image').src = link;
    cloneCard.querySelector('.element__image').alt = name;
    cloneCard.querySelector('.element__title').textContent = name;
    cloneCard.querySelector('.element__image').addEventListener('click', handlePreviewPicture);
    cloneCard.querySelector('.grope-button').addEventListener('click',handleLikeIcon);
    cloneCard.querySelector('.element__del-button').addEventListener('click',handleDeleteCard);
    
    return cloneCard;
}
const renderCard = (name,link) => {
    sectionCard.prepend(getCardElement(name,link))
}

initialCards.forEach((item) => {
    renderCard(item.name,item.link)
})

function formSubmitHandlerAdd (evt) {
    evt.preventDefault(); 

    renderCard(nameInputAdd.value,linkInputAdd.value);
    
    closePopup(popupAdd);
}

formElementAdd.addEventListener('submit', formSubmitHandlerAdd);

popupExitButttonActivImage.addEventListener('click', () => closePopup(popupActiveImage));