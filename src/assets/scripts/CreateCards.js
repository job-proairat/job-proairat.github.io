function CreateCards() {
  class Card {
    constructor(title, src, alt, text, footer) {
      this.title = title;
      this.src = src;
      this.alt = alt;
      this.text = text;
      this.footer = footer;
    }
  }

  const cards = [
    new Card(
      'заголовок 1',
      'https://picsum.photos/id/238/200/300',
      'Title 1',
      `But I must explain to you how all this mistaken idea of denouncing pleasure
       the master - builder of human happiness.`,
      'футер заголовка 1',
    ),
    new Card(
      'title 2',
      'https://picsum.photos/id/239/200/300',
      'Title 2',
      `No one rejects, dislikes, or avoids pleasure itself, because it is pleasure,
       consequences that are extremely painful.`,
      'footer title 2',
    ),
    new Card(
      'заголовок 3',
      'https://picsum.photos/id/240/200/300',
      'Title 3',
      `Nor again is there anyone who loves or pursues or desires to obtain pain of itself,
       can procure him some great pleasure.`,
      'футер заголовка 3',
    ),
    new Card(
      'title 4',
      'https://picsum.photos/id/241/200/300',
      'Title 4',
      `To take a trivial example, which of us ever undertakes laborious physical exercise,
       except to obtain some`,
      'footer title 4',
    ),
    new Card(
      'title 5',
      'https://picsum.photos/id/242/200/300',
      'Title 5',
      `Advantage from it? a pain that produces no
       resultant pleasure?`,
      'footer title 5',
    ),
  ];

  return cards;
}

module.exports = CreateCards;
