export default class Api{
    constructor(options){
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
        this._body = options.body;
    }
    getInitialCards(){
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers,
            body: this._body
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

}