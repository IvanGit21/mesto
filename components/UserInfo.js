export default class UserInfo{
    constructor({nameSelector, descriptionSelector}){
        this._nameSelector = document.querySelector(nameSelector);
        this._descriptionSelector = document.querySelector(descriptionSelector);
    }
    getUserInfo(){
        this._infoList = {};
        this._infoList['name'] = this._nameSelector.textContent;
        this._infoList['description'] = this._descriptionSelector.textContent;
        
        return this._infoList;
    }
    setUserInfo(name, description){
        this._nameSelector.textContent = name;
        this._descriptionSelector.textContent = description;
    }
}