import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Api from '../services/Api';
import PageHeading from '../components/PageHeading/PageHeading';

export default function BooksView() {
  //   const { url } = useRouteMatch();
  //   const [books, setBooks] = useState(null);

  //   useEffect(() => {
  //     bookShelfAPI.fetchBooks().then(setBooks);
  //   }, []);

  return (
    <>
      <PageHeading text="Movies" />
      {/* {books && ( */}
      <ul>
        <li>1</li>
        <li>2</li>
        {/* {books.map(book => (
            <li key={book.id}>
              <Link to={`${url}/${book.id}`}>{book.title}</Link>
            </li> */}
        {/* ))} */}
      </ul>
      {/* )} */}
    </>
  );
}
