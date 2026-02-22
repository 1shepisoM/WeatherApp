import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city) return;
    onSearch(city);
    setCity("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-white rounded-md px-4 py-2 shadow-md mb-10"
    >
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="outline-none text-gray-600"
      />
      <button type="submit">
        <FaSearch className="text-gray-500 ml-3" />
      </button>
    </form>
  );
}

export default SearchBar;