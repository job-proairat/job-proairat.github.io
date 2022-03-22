function FuzzySearch(str, arr, SearchByProp) {
  const filtered = arr.filter((obj) => {
    const ModifiedStr = obj[SearchByProp].toLowerCase();
    const result = [...str].map((letter) => ((ModifiedStr.includes(letter)) ? letter : '')).join('');

    return str === result;
  });

  return filtered;
}

module.exports = {
  FuzzySearch,
};
