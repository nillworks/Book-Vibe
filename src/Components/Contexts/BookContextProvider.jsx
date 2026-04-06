import { useEffect, useState } from 'react';
import BookContext from './BookContext';
import { toast } from 'react-toastify';

const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [redBookData, setRedBookData] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);

  useEffect(() => {
    fetch('booksData.json')
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  // Handle Read Books Data
  const handleRedBookData = id => {
    const exists = redBookData.find(item => item.bookId === id);
    if (exists) {
      toast.error(`${exists.bookName} already added to Read Books!`);
      return;
    }

    const selected = books.find(item => item.bookId === id);
    setRedBookData(prev => [...prev, selected]);
    toast.success(`${selected.bookName} added to Read Books!`);
  };

  // Handle Wishlist Books Data
  const handleWishlistBooks = id => {
    const existsWishListBook = wishlistBooks.find(item => item.bookId === id);
    if (existsWishListBook) {
      toast.error(
        `${existsWishListBook.bookName} already added to Wishlist Books !`,
      );
      return;
    }

    const selectedWishListBooks = books.find(item => item.bookId === id);
    setWishlistBooks(prev => [...prev, selectedWishListBooks]);
    toast.success(`${selectedWishListBooks.bookName} added to Wishlist Books!`);
  };

  // console.log(redBookData);
  // console.log(wishlistBooks);

  return (
    <BookContext.Provider
      value={{
        books,
        setBooks,
        handleRedBookData,
        handleWishlistBooks,
        redBookData,
        wishlistBooks,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
