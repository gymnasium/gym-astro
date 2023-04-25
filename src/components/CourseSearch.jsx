// via @https://danidiaztech.com/create-astro-search-component/

import Fuse from 'fuse.js';
import { useState } from 'react';

// Configs fuse.js
// https://fusejs.io/api/options.html
const options = {
  keys: ['title', 'description', 'slug'],
  includeMatches: true,
  minMatchCharLength: 2,
  threshold: 0.5,
};

function Search({ searchList, dataType }) {
  // User's input
  const [query, setQuery] = useState('');

  const fuse = new Fuse(searchList, options);

  // Set a limit to the posts: 5
  const items = fuse
    .search(query)
    .map((result) => result.item)
    .slice(0, 5);

  function handleOnSearch({ target = {} }) {
    const { value } = target;
    setQuery(value);
  }

  const placeholder = `Search for ${dataType}`

  return (
    <>
      <label>Search</label>
      <input type="text" value={query} onChange={handleOnSearch} placeholder={placeholder} />
      {query.length > 1 && (
        <p>
          Found {items.length} {items.length === 1 ? 'result' : 'results'} for '{query}'
        </p>
      )}
      <ul>
        {items &&
          items.map((item) => (
            <li>
              <a href={`/${dataType}/${item.title.toLowerCase().replaceAll(' ', '-')}`}>{item.title}</a> - {item.description}
            </li>
          ))}
      </ul>
    </>
  );
}

export default Search;
