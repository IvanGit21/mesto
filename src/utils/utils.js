import {buttonAdd, param, popupButton} from '../utils/constants.js';

export function disabledButton(){
    buttonAdd.setAttribute('disabled',true);
    buttonAdd.classList.add(param.inactiveButtonClass);
}
export function renderLoading(isLoad){
    if(isLoad){
        popupButton.textContent = 'Сохранение...';
    }else{
        popupButton.textContent = 'Сохранить';
    }
}
export function handleOriginalResponse(res){
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}