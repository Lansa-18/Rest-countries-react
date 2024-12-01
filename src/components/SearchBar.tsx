import { useState } from "react";
import { useCountriesData } from "../context/CountriesDataContext";
import { useTheme } from "../context/ThemeContext";
import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
  const { isDarkMode } = useTheme();
  const { searchCountries } = useCountriesData();
  const [newInputValue, setNewInputValue] = useState("");

  return (
    <div
      className={`${isDarkMode ? "bg-dark-mode-elements" : "bg-light-mode-elements"} flex tab-port:basis-[35%] basis-[30%] items-center gap-5 rounded-lg p-[2rem] custom-850:w-full`}
    >
      <label htmlFor="search">
        <IoSearch
          className={`${isDarkMode ? "text-dark-mode-text" : "text-light-mode-text"} text-3xl font-bold`}
        />
      </label>
      <input
        id="search"
        type="text"
        value={newInputValue}
        onChange={(e) => {
          setNewInputValue(e.target.value);
          searchCountries(e.target.value);
        }}
        placeholder="Search countries here..."
        className={`${isDarkMode ? "text-dark-mode-text" : "text-light-mode-text"} input input-bordered w-full border-red-500 bg-transparent text-2xl outline-none`}
      />
    </div>
  );
}
