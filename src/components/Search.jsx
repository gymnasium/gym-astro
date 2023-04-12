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

function Search({ searchList }) {
  // User's input
  const [query, setQuery] = useState('');

  const fuse = new Fuse(searchList, options);

  // Set a limit to the posts: 5
  const courses = fuse
    .search(query)
    .map((result) => result.item)
    .slice(0, 5);

  function handleOnSearch({ target = {} }) {
    const { value } = target;
    setQuery(value);
  }

  return (
    <>
      <label>Search</label>
      <input type="text" value={query} onChange={handleOnSearch} placeholder="Search courses" />
      {query.length > 1 && (
        <p>
          Found {courses.length} {courses.length === 1 ? 'result' : 'results'} for '{query}'
        </p>
      )}
      <ul>
        {courses &&
          courses.map((course) => (
            <li>
              <a href={`/courses/${course.title.toLowerCase().replaceAll(' ', '-')}`}>{course.title}</a>
              {course.description}
            </li>
          ))}
      </ul>
    </>
  );
}

export default Search;
