export default class UserInfo{
    constructor({nameSelector, descriptionSelector, imageSelector}){
        this._nameSelector = document.querySelector(nameSelector);
        this._imageSelector = document.querySelector(imageSelector);
        this._descriptionSelector = document.querySelector(descriptionSelector);
    }
    getUserInfo(){
        this._infoList = {};
        this._infoList['name'] = this._nameSelector.textContent;
        this._infoList['description'] = this._descriptionSelector.textContent;
        this._infoList['avatar'] = this._imageSelector.src;
        
        return this._infoList;
    }
    setUserInfo(name, description, avatar){
        this._nameSelector.textContent = name;
        this._descriptionSelector.textContent = description;
        this._imageSelector.src = avatar;
    }
}