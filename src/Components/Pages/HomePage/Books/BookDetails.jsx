import { useParams } from 'react-router';
import useBooksData from './../../../Hooks/useBooksData';

const BookDetails = () => {
  const { id } = useParams();
  const { books, handleRedBookData } = useBooksData();
  const extractedBookData = books.find(item => item.bookId == id);

  if (!extractedBookData)
    return <p className="text-center mt-10">Book not found</p>;

  const {
    author,
    bookName,
    image,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing,
  } = extractedBookData;

  const renderStars = rating =>
    Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}
      >
        ★
      </span>
    ));

  return (
    <div className="containers flex items-center justify-center p-6 font-sans">
      <div className="bg-white max-w-5xl w-full flex overflow-hidden rounded-sm border border-[#e8e0d6] shadow-xl">
        {/* LEFT - Book Cover */}
        <div className="hidden sm:basis-[50%] md:flex bg-PrimaryBg items-center justify-center p-10">
          <img src={image} alt={bookName} className="object-cover w-80" />
        </div>

        {/* RIGHT - Details */}
        <div className="flex flex-col sm:basis-[50%] p-8 md:p-10 gap-0">
          {/* Title */}
          <h1 className="font-serif text-3xl font-bold text-gray-900 leading-tight mb-1">
            {bookName}
          </h1>

          {/* Author */}
          <p className="text-sm text-gray-400 mb-5">
            By : <span className="text-gray-600 font-medium">{author}</span>
          </p>

          <hr className="border-[#ede8e3] mb-5" />

          {/* Review */}
          <p className="text-sm text-gray-500 leading-relaxed mb-5">
            <strong className="text-gray-800">Review : </strong>
            {review}
          </p>

          {/* Tags */}
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <span className="text-md font-bold">Tag</span>
            {tags?.map((tag, idx) => (
              <span
                key={idx}
                className="py-1 px-5 rounded-full text-buttonPrimary bg-buttonPrimary/5 font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Meta Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 mb-8">
            {[
              { label: 'Number of Pages:', value: totalPages },
              { label: 'Publisher:', value: publisher },
              { label: 'Year of Publishing:', value: yearOfPublishing },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="flex justify-between items-center py-2 border-b border-[#f0ebe5]"
              >
                <span className="text-xs text-gray-400">{label}</span>
                <span className="text-xs text-gray-800 font-semibold">
                  {value}
                </span>
              </div>
            ))}
            <div className="flex justify-between items-center py-2 border-b border-[#f0ebe5]">
              <span className="text-xs text-gray-400">Rating:</span>
              <span className="flex items-center gap-1 text-sm">
                {renderStars(rating)}
                <span className="ml-1 text-xs text-gray-500">{rating}</span>
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-auto">
            <button
              onClick={() => handleRedBookData(extractedBookData.bookId)}
              className="px-8 py-2.5 rounded text-sm font-medium bg-white text-gray-800 border border-[#d0c8c0] hover:bg-[#f5f0eb] transition-colors cursor-pointer"
            >
              Read
            </button>
            <button className="px-8 py-2.5 rounded text-sm font-medium bg-[#1a9bd7] text-white hover:bg-[#1585ba] hover:-translate-y-0.5 hover:shadow-lg transition-all cursor-pointer">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
