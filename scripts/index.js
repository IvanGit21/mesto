let popup=document.querySelector('.popup');
let editButton=document.querySelector('.edit-button');
let exitButton=document.querySelector('.popup__exit-button');

editButton.addEventListener('click',opened);
exitButton.addEventListener('click',opened);

function opened(){
    popup.classList.toggle('popup_opened');
}
