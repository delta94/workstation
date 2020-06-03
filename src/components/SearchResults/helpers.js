import walkme from '@walkme/sdk';

function matchWords(matchedAgainst, matchWord) {
  try {
    return matchedAgainst.toLowerCase().includes(matchWord.toLowerCase());
  } catch (err) {
    console.error(`An error has occurred while matching ${matchWord} against ${matchedAgainst}.`, err);
  }
}

function matchAgainstArray(array, matchWord) {
  try {
    return array.reduce(
      (keep, str) => (typeof str === 'string' ? (keep ? true : matchWords(str, matchWord)) : false),
      false
    );
  } catch (err) {
    console.error(`An error has occurred while matching ${matchWord} against an array (supposedly) ${array}.`, err);
  }
}

function matchMethod(node, searchTerm) {
  switch (node.type) {
    case walkme.content.TypeNames.Shuttle:
      return (
        matchAgainstArray([node.title, node.properties.url], searchTerm) ||
        (node.keywords && matchAgainstArray(node.keywords, searchTerm))
      );

    case walkme.content.TypeNames.Task:
      return matchWords(node.title, searchTerm) || (node.keywords && matchAgainstArray(node.keywords, searchTerm));

    default:
      return (
        matchAgainstArray([node.title, node.description], searchTerm) ||
        (node.keywords && matchAgainstArray(node.keywords, searchTerm))
      );
  }
}

function flattenUITree(uiTree) {
  const flattenedContent = [];

  uiTree
    .map((tab) => tab.childNodes)
    .flat(1)
    .forEach((node) => {
      node.type === 'category' ? flattenedContent.push(...node.childNodes) : flattenedContent.push(node);
    });

  return flattenedContent;
}

function occurrences(item, array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) if (array[i].type === item.type && array[i].id === item.id) ++count;
  return count;
}

export function findInUiTree(searchTerm, uiTree) {
  try {
    return (
      flattenUITree(uiTree)
        .filter((node) => ![walkme.content.TypeNames.Survey].includes(node.type))
        // get items that include the search term in their attributes
        .filter((node) => matchMethod(node, searchTerm))
        .filter((node, _, self) => occurrences(node, self) === 1)
    );
  } catch (err) {
    console.error('An error has occurred while filtering the uiTree for search results.', err);
  }
}

export async function findInSearchApi(searchTerm, wmSearch) {
  try {
    const searchResults = await wmSearch.search(searchTerm);
    return searchResults.filter((item) => item.type === walkme.content.TypeNames.SearchResult);
  } catch (err) {
    console.error('Could not get search results from the API.', err);
  }
}
