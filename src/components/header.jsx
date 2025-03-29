import React from 'react';

const Header = ({ selectedFilters, onClear, onFilterChange }) => {
  return (
    <header className="flex flex-col bg-cover bg-center bg-no-repeat headerbgimg relative text-white antialiased items-center justify-center w-full h-52 mb-18">
      <div className="container flex items-center justify-between lg:w-[70%] w-[90%] lg:,min-h-16 min-h-16 flex-wrap pt-2.5 rounded shadow shadow-gray-500 bg-white absolute top-45 px-4">
        <div className="flex flex-wrap gap-3">
          {selectedFilters.map((filter) => (
            <span key={filter} className="hbg px-2 py-1 cursor-pointer rounded flex items-center">
              {filter}
              <button className="ml-2 cursor-pointer hbg text-white" onClick={() => onFilterChange(filter)}>✖</button>
            </span>
          ))}
        </div>
        {selectedFilters.length > 0 && (
          <button className=" flex ml-auto maincol items-center align-middle justify-center cursor-pointer underline" onClick={onClear}>
            Clear
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
