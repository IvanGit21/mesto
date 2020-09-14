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
    cloneCard.querySelectorAll('.element__image').forEach((evt) =>{
        evt.addEventListener('click', function (){
            popupActiveImage.classList.toggle('popup_opened');
            popupImage.setAttribute('src',link);
            popupHeaderActivityImage.textContent = name;
        })})
    cloneCard.querySelector('.grope-button').addEventListener('click',function(evt){
        evt.target.classList.toggle('grope-button_active')
    })
    cloneCard.querySelector('.element__del-button').addEventListener('click',function(evt){
        const buttonClick = evt.target;
        const element = buttonClick.closest('.element');
        element.remove();
    })
    elements.prepend(cloneCard);
}

initialCards.forEach((item) => {
    addCard(item.name,item.link);
})


function formSubmitHandlerAdd (evt) {
    evt.preventDefault(); 

    nameInputAdd = nameInputAdd.value;
    linkInputAdd = linkInputAdd.value;

    addCard(nameInputAdd,linkInputAdd);
    
}

formElementAdd.addEventListener('submit', formSubmitHandlerAdd);

document.querySelectorAll('.popup__exit-button_activity-image').forEach((evt) =>{
    evt.addEventListener('click',function(){
        popupActiveImage.classList.toggle('popup_opened');
    })
})
