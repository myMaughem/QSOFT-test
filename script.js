import Card from "./Card.js";

const items = [
  {
    image: 'https://cdn.stocksnap.io/img-thumbs/960w/office-supplies_NHFG4FDXGH.jpg',
  },
  {
    image: 'https://cdn.stocksnap.io/img-thumbs/960w/colored-markers_BLQRE2TAWD.jpg',
  },
  {
    image: 'https://cdn.stocksnap.io/img-thumbs/960w/office-supplies_SN8RTXD2LL.jpg',
  },
  {
    image: 'https://cdn.stocksnap.io/img-thumbs/960w/office-supplies_6NF8A6ZOQK.jpg',
  },
  {
    image: 'https://cdn.stocksnap.io/img-thumbs/960w/office-supplies_971CF5BA76.jpg',
  },
  {
    image: 'https://cdn.stocksnap.io/img-thumbs/960w/office-supplies_ILDGSIYA6R.jpg',
  },
  {
    image: 'https://cdn.stocksnap.io/img-thumbs/960w/office-supplies_SN8RTXD2LL.jpg',
  },
  {
    image: 'https://cdn.stocksnap.io/img-thumbs/960w/office-supplies_NHFG4FDXGH.jpg',
  },
  {
    image: 'https://cdn.stocksnap.io/img-thumbs/960w/office-supplies_SN8RTXD2LL.jpg',
  }
];

items.forEach((item) => {
  const card = new Card(item.image);
  const cardElement = card.generateCard();

  document.querySelector('.partners__list').append(cardElement);
});