import { useState } from 'react';

const SortDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Sort By');

  const options = ['Rating', 'Number of pages', 'Publisher year'];

  return (
    <div className="relative inline-block text-left w-48">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-buttonPrimary text-white font-bold py-3 px-4 rounded-lg flex justify-between items-center"
      >
        <span>{selected}</span>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu Items */}
      {isOpen && (
        <div className="absolute w-full bg-[#f3f4f6] rounded-b-lg shadow-lg overflow-hidden transition-all">
          {options.map(option => (
            <button
              key={option}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 border-none outline-none transition-colors text-center"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
