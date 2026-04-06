import { useContext } from 'react';
import BookContext from '../Contexts/BookContext';

const useBooksData = () => {
  return useContext(BookContext);
};

export default useBooksData;
