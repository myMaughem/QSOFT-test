export default class Card {
  constructor(image) {
    this._image = image;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector('.horizontal-card')
      .content
      .querySelector('.content__product')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector('.partners__name').src = this._image;

    return this._element;
  }
}