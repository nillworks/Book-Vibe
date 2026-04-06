import { Link } from 'react-router';

const BookList = ({ books }) => {
  const { bookId, author, bookName, category, image, rating, tags } = books;

  // Tags Render Ui
  const tag = tags.map((item, i) => (
    <div key={i} className="">
      <h4 className="py-1.5 px-5 rounded-full text-buttonPrimary bg-buttonPrimary/5 font-medium">
        {item}
      </h4>
    </div>
  ));

  return (
    <Link
      to={`/bookDetails/${bookId}`}
      className="border border-[#131313]/15 rounded-lg duration-300 transition cursor-pointer hover:translate-y-2"
    >
      <div className="px-4 py-3 space-y-4">
        {/* Image */}
        <div className="bg-PrimaryBg py-5 rounded-lg">
          <img
            src={image}
            alt="img"
            className="w-[134px] h-[136px] mx-auto max-w-full"
          />
        </div>

        {/* Books Details */}
        <div className="space-y-4 h-45">
          {/* 2 Button */}
          <div className="flex items-center gap-5">{tag}</div>

          {/* Book Tile And Subtile */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-SrcFont truncate">
              {bookName}
            </h2>
            <p className="font-medium text-[131313]/80">{author}</p>
          </div>

          <p className=" border-t border-dashed border-[#131313]/15"></p>

          {/* Fiction And Rating */}
          <div className="flex items-center  justify-between">
            <p className="font-medium text-[131313]/80">{category}</p>
            <p className="font-medium text-[131313]/80">{rating}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookList;
