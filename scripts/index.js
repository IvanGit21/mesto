const editButton = document.querySelector('.edit-button');
const popupButtonAdd = document.querySelector('.popup__button_add');
const popupButtonEdit = document.querySelector('.popup__button_edit');
const formElementAdd = document.querySelector('.popup__form_add');
const formElementEdit = document.querySelector('.popup__form_edit');
let nameInputAdd = document.querySelector('.popup__input_type_card-name');
let linkInputAdd = document.querySelector('.popup__type_input_url');
let nameInputEdit = document.querySelector('.popup__input_type_name');
let jobInputEdit = document.querySelector('.popup__input_type_description');
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

function openPopupAdd(){
    if(popupAdd.classList.contains('popup_opened')){
        popupAdd.classList.remove('popup_opened')
    } else{
        popupAdd.classList.add('popup_opened')
    }
}
function openPopupEdit(){
    if(popupEdit.classList.contains('popup_opened')){
        popupEdit.classList.remove('popup_opened')
    } else{
        popupEdit.classList.add('popup_opened')
    }
}

addButton.addEventListener('click',openPopupAdd);
exitButtonAdd.addEventListener('click',openPopupAdd);
editButton.addEventListener('click',openPopupEdit);
exitButtonEdit.addEventListener('click',openPopupEdit);

function formSubmitHandlerEdit (evt) {
    evt.preventDefault(); 

    nameInputEdit = nameInputEdit.value;
    jobInputEdit = jobInputEdit.value;

    profileName.textContent = nameInputEdit;
    profileActivity.textContent = jobInputEdit;
    openPopupEdit();
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
    if(evt.target.classList.contains('grope-button_active')){
        evt.target.classList.remove('grope-button_active')
    } else{
        evt.target.classList.add('grope-button_active')
    }
}

const handlePreviewPicture = (evt) =>{
    popupActiveImage.classList.toggle('popup_opened');
    const src = evt.target.getAttribute('src');
    popupImage.setAttribute('src',src);
    const name = evt.target.getAttribute('alt');
    popupHeaderActivityImage.textContent = name;
}

const getCardElement = (name,link) =>{
    const templateCards = document.querySelector('#template-cards').content;
    const templateElement = document.querySelector('.elements');
    const cloneCard = templateCards.cloneNode(true);
    cloneCard.querySelector('.element__image').src = link;
    cloneCard.querySelector('.element__image').alt = name;
    cloneCard.querySelector('.element__title').textContent = name;
    cloneCard.querySelector('.element__image').addEventListener('click', handlePreviewPicture);
    cloneCard.querySelector('.grope-button').addEventListener('click',handleLikeIcon);
    cloneCard.querySelector('.element__del-button').addEventListener('click',handleDeleteCard);
    
    templateElement.prepend(cloneCard);
    
}

const renderCard = () =>{
initialCards.forEach((item) => {
    getCardElement(item.name,item.link)
    })
}

renderCard();

function formSubmitHandlerAdd (evt) {
    evt.preventDefault(); 

    nameInputAdd = nameInputAdd.value;
    linkInputAdd = linkInputAdd.value;

    getCardElement(nameInputAdd,linkInputAdd);
    openPopupAdd();
}

formElementAdd.addEventListener('submit', formSubmitHandlerAdd);

popupExitButttonActivImage.addEventListener('click',function(evt){
        popupActiveImage.classList.toggle('popup_opened');
    })