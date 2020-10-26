import {nameInputEdit,jobInputEdit,profileName,profileActivity,buttonElement,param} from '../utils/constants.js';

export function addProfileValue(){
    nameInputEdit.value = profileName.textContent; 
    jobInputEdit.value = profileActivity.textContent; 
}
export function disabledButton(){
    buttonElement.setAttribute('disabled',true);
    buttonElement.classList.add(param.inactiveButtonClass);
}
