export default class Section{
    constructor({ items, renderer } , containerSelector){
        this._renderedItems = items;
        this._renderer = renderer;
        this._containerSelector = document.querySelector(containerSelector);
    }
    // Добавление элемента в ДОМ
    addItem(element){
        this._containerSelector.prepend(element);
    }
    // Перебор элементов и добавление
    renderItems(){
        this._renderedItems.forEach(item =>{
            this._renderer(item)
        })
    }
}
