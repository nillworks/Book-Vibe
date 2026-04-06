import useBooksData from '../../../Hooks/useBooksData';
import BookList from './BookList';

const Books = () => {
  const { books } = useBooksData();

  return (
    <section className="container px-3 py-10 space-y-5">
      {/* Title Subtitle */}
      <div className="text-center">
        <h2 className="text-2xl text-center md:text-3xl lg:text-4xl font-bold">
          Books
        </h2>
      </div>

      <div className="grid items-stretch justify-center gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {books.map(item => (
          <BookList key={item.bookId} books={item} />
        ))}
      </div>
    </section>
  );
};

export default Books;
