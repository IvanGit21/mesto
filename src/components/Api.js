export default class Api{
    constructor(options){
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
        this._body = options.body;
    }
    getInitialCards(){
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          })
          .then((res) => res)
    }
    getProfileInfo(){
        return fetch(`${this._baseUrl}/users/me`,{
            headers: this._headers
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          })
          .then((res) => res)
    }
    dispatchProfileInfo(){
        return fetch(`${this._baseUrl}/users/me`,{
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(this._body)
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          })
          .then((res) => res)
    }
    createNewCard(){
      return fetch(`${this._baseUrl}/cards`,{
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify(this._body)
      })
      .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((res) => res)
    }
    deleteCard(cardId){
      return fetch(`${this._baseUrl}/cards/${cardId}`,{
        method: 'DELETE',
        headers: this._headers,
    })
    .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((res) => res)
    }

    setLike(cardId){
      return fetch(`${this._baseUrl}/cards/likes/${cardId}`,{
        method: 'PUT',
        headers: this._headers,
    })
    .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((res) => res)
    }

    removeLike(cardId){
      return fetch(`${this._baseUrl}/cards/likes/${cardId}`,{
        method: 'DELETE',
        headers: this._headers,
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((res) => res)
    }
    updateAvatar(){
      return fetch(`${this._baseUrl}/users/me/avatar`, {
          method:'PATCH',
          headers: this._headers,
          body: JSON.stringify(this._body)
      })
      .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((res) => res)
  }
}