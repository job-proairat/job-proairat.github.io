import { ICard } from '@/TSTypes';

function FuzzySearch(
  str: string,
  arr: Array<ICard>,
  searchByProp: string | number,
) {
  const filtered = arr.filter((obj:ICard) => {
    const propToLowerCase = obj[searchByProp].toLowerCase();
    const strToLowerCase = str.toLowerCase();
    const result = [...strToLowerCase].map((letter) => ((propToLowerCase.includes(letter)) ? letter : '')).join('');

    return strToLowerCase === result;
  });

  return filtered;
}

async function FulfillRequests(url: string) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Один из запросов завершился с ошибкой. Статус ${response.status}`);
    } else {
      return await response.json();
    }
  } catch (e) {
    console.log('Что-то пошло не так...', e);
  }
}

function getURLParamValue(url: string, param: string) {
  return url ? new URL(url).searchParams.get(param) : url;
}

function getURLPathNameDigit(url: string): string | null {
  const result = new URL(url).pathname.match(/[0-9]+/);

  return (Array.isArray(result)) ? result[0] : null;
}

export {
  FuzzySearch,
  FulfillRequests,
  getURLParamValue,
  getURLPathNameDigit,
};
