interface ICard {
    [key: string | number]: string
}

interface IStarship {
    [key: string | number]: string | Array<string>,
}

export {
  ICard,
  IStarship,
};
