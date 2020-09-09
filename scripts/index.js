let popup=document.querySelector('.popup');
let editButton=document.querySelector('.edit-button');
let exitButton=document.querySelector('.popup__exit-button');
let popupButton=document.querySelector('.popup__button');
let formElement = document.querySelector('.popup__conteiner');
let nameInput = document.querySelector('.popup__item-name');
let jobInput = document.querySelector('.popup__item-activity');
let profileName = document.querySelector('.profile__name');
let profileActivity = document.querySelector('.profile__activity');

function openPopupEdit(){
    popup.classList.toggle('popup_opened')
}

editButton.addEventListener('click',openPopupEdit);
exitButton.addEventListener('click',openPopupEdit);
popupButton.addEventListener('click',openPopupEdit);

function formSubmitHandler (evt) {
    evt.preventDefault(); 

    nameInput=nameInput.value;
    jobInput=jobInput.value;

    profileName.textContent = nameInput;
    profileActivity.textContent = jobInput;
}

formElement.addEventListener('submit', formSubmitHandler);

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
    const templateCards = document.querySelector('#elements').content;
    const elements = document.querySelector('.elements');
    
    const cloneCard = templateCards.cloneNode(true);
    
    cloneCard.querySelector('.element__image').src = link;
    cloneCard.querySelector('.element__title').textContent = name;
    
    elements.append(cloneCard);
}
initialCards.forEach((item) => {
    addCard(item.name,item.link)
})


