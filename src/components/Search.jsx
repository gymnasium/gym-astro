// via @https://danidiaztech.com/create-astro-search-component/

import Fuse from 'fuse.js';
import { useState } from 'react';

function Search({ searchList, dataObj, dataKeys }) {
  let keyName = ['id', 'title', 'description', 'topic', 'slug']
  if (dataKeys !== undefined && dataKeys !== null) {
    keyName = dataKeys
  }
  
  // Configs fuse.js
  // https://fusejs.io/api/options.html
  let options = {
    keys: keyName,
    includeMatches: true,
    minMatchCharLength: 5,
    threshold: 0.5,
  };


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

  const placeholder = `Search for ${dataObj}`

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
            <li key={item.id}>
              <a href={`/${dataObj}/${item.title.toLowerCase().replaceAll(' ', '-')}`}>{item.title}</a> - {item.description}
            </li>
          ))}
      </ul>
    </>
  );
}

export default Search;
