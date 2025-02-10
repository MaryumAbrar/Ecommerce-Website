import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <div className="flex items-center border border-gray-300 shadow-sm overflow-hidden w-64 sm:w-80">
      {/* Input Field */}
      <input
        type="text"
        className="flex-1 px-4 py-2 text-sm text-gray-600 outline-none"
      />

      {/* Search Button */}
      <button className="bg-pink-500 p-2 flex items-center justify-center">
        <FontAwesomeIcon icon={faSearch} className="text-white text-xl px-2" />
      </button>
    </div>
  );
};

export default SearchBar;
