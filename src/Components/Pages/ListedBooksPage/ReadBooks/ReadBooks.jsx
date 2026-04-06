const ReadBooks = ({ redBookData }) => {
  const {
    author,
    bookName,
    category,
    image,
    rating,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
  } = redBookData;

  return (
    <>
      <div className="bg-white rounded-2xl p-6 transition duration-300 hover:-translate-y-1 cursor-pointer  flex gap-5 border flex-col items-center sm:flex-row border-[#e8e3db]">
        {/* Book Cover */}
        <div className="bg-PrimaryBg py-4 px-4 rounded-lg">
          <img
            src={image}
            alt="imag"
            className="mx-auto sm:mx-0 w-50 h-60 rounded-lg"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-2.5">
          {/* Title & Author */}
          <div className="space-y-3">
            <h2 className="font-SrcFont text-xl font-bold text-[#1a1a1a] leading-tight">
              {bookName}
            </h2>
            <p className="text-xs text-[#888] font-medium mt-1">
              By : <span className="text-[#444]">{author}</span>
            </p>
          </div>

          {/* Tags */}
          <div className="flex gap-2 flex-wrap items-center">
            {tags.map((item, ind) => (
              <span
                key={ind}
                className="text-[11px] font-semibold text-buttonPrimary bg-[#23BE0A]/5 px-2.5 py-0.5 rounded-full"
              >
                #{item}
              </span>
            ))}
            <span className="text-xs text-[#666] flex items-center gap-1 ml-1">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Year of Publishing: {yearOfPublishing}
            </span>
          </div>

          <hr className="border-[#f0ede8]" />

          {/* Meta */}
          <div className="flex gap-4">
            <div className="flex items-center gap-1.5 text-xs text-[#555]">
              <svg
                className="w-3.5 h-3.5 text-[#aaa]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Publisher: {publisher}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#555]">
              <svg
                className="w-3.5 h-3.5 text-[#aaa]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Page {totalPages}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center flex-wrap gap-2.5">
            <span className="text-xs text-[#328EFF] bg-[#328EFF]/15 rounded-full px-3 py-1 font-medium">
              Category: {category}
            </span>
            <span className="text-xs bg-[#FFAC33]/15 text-[#FFAC33] border border-orange-200 rounded-full px-3 py-1 font-semibold">
              Rating: {rating}
            </span>
            <button className="bg-buttonPrimary text-white text-xs font-semibold px-4 py-2 rounded-full">
              View Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadBooks;
