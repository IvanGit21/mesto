let editButton = document.querySelector('.edit-button');
let popupButtonAdd = document.querySelector('.popup__button_add');
let popupButtonEdit = document.querySelector('.popup__button_edit');
let formElementAdd = document.querySelector('.popup__form_add');
let formElementEdit = document.querySelector('.popup__form_edit');
let nameInputAdd = document.querySelector('.popup__item-name_add');
let jobInputAdd = document.querySelector('.popup__item-activity_add');
let nameInputEdit = document.querySelector('.popup__item-name_edit');
let jobInputEdit = document.querySelector('.popup__item-activity_edit')
let profileName = document.querySelector('.profile__name');
let profileActivity = document.querySelector('.profile__activity');
let popupEdit = document.querySelector('.popup_edit');
let addButton = document.querySelector('.add-button');
let popupAdd = document.querySelector('.popup_add');
let exitButtonAdd = document.querySelector('.popup__exit-button_add');
let exitButtonEdit=document.querySelector('.popup__exit-button_edit');
const delButton = document.querySelector('.element__del-button');

function openPopupAdd(){
    popupAdd.classList.toggle('popup_opened')
}
function openPopupEdit(){
    popupEdit.classList.toggle('popup_opened')
}

addButton.addEventListener('click',openPopupAdd);
exitButtonAdd.addEventListener('click',openPopupAdd);
editButton.addEventListener('click',openPopupEdit);
exitButtonEdit.addEventListener('click',openPopupEdit);
popupButtonAdd.addEventListener('click',openPopupAdd);
popupButtonEdit.addEventListener('click',openPopupEdit);

function formSubmitHandlerEdit (evt) {
    evt.preventDefault(); 

    nameInputEdit = nameInputEdit.value;
    jobInputEdit = jobInputEdit.value;

    profileName.textContent = nameInputEdit;
    profileActivity.textContent = jobInputEdit;
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


addCard = (name,link) =>{  
    const templateCards = document.querySelector('#template-cards').content;
    const elements = document.querySelector('.elements');
    
    const cloneCard = templateCards.cloneNode(true);
    
    cloneCard.querySelector('.element__image').src = link;
    cloneCard.querySelector('.element__title').textContent = name;
    
    elements.prepend(cloneCard);
}

initialCards.forEach((item) => {
    addCard(item.name,item.link);
})


function formSubmitHandlerAdd (evt) {
    evt.preventDefault(); 

    nameInputAdd = nameInputAdd.value;
    jobInputAdd = jobInputAdd.value;

    addCard(nameInputAdd,jobInputAdd);
    
}

formElementAdd.addEventListener('submit', formSubmitHandlerAdd);


delCard = (evt) => {
    const buttonClick = evt.target;
    const element = buttonClick.closest('.element');
    element.remove();
}

document.querySelectorAll('.element__del-button').forEach((btn) => {
    btn.addEventListener("click", delCard)
})
