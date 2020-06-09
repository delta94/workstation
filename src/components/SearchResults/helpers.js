import walkme from '@walkme/sdk';
import uniqWith from 'lodash/uniqWith';
import isEqual from 'lodash/isEqual';

function findInNode(node, searchTerm) {
  const description = node.description ?? '';
  const url = node.properties.url ?? '';
  const keywords = node.keywords?.join(' ') ?? '';

  return [node.title, description, url, keywords].some((string) =>
    string.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

function flattenUITree(uiTree) {
  const flattenedContent = [];

  uiTree
    .map((tab) => tab.childNodes)
    .flat(1)
    .forEach((node) => {
      node.type === 'category' ? flattenedContent.push(...node.childNodes) : flattenedContent.push(node);
    });

  return uniqWith(flattenedContent, isEqual);
}

export function findInUiTree(searchTerm, uiTree) {
  return (
    flattenUITree(uiTree)
      .filter((node) => ![walkme.content.TypeNames.Survey].includes(node.type))
      // get items that include the search term in their attributes
      .filter((node) => findInNode(node, searchTerm))
  );
}

export async function findInSearchApi(searchTerm, wmSearch) {
  try {
    const searchResults = await wmSearch.search(searchTerm);
    return searchResults.filter((item) => item.type === walkme.content.TypeNames.SearchResult);
  } catch (err) {
    console.error('Could not get search results from the API.', err);
  }
}
