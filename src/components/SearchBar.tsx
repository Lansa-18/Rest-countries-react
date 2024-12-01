import { useState } from "react";
import { useCountriesData } from "../context/CountriesDataContext";
import { useTheme } from "../context/ThemeContext";
import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
  const { isDarkMode } = useTheme();
  const { inputValue, updateInput, searchCountries } = useCountriesData();
  const [newInputValue, setNewInputValue] = useState("");

  // function handleSearch() {
  //   searchCountries(newInputValue);
  //   // console.log(inputValue);
  // }

  return (
    <div
      className={`${isDarkMode ? "bg-dark-mode-elements" : "bg-light-mode-elements"} flex basis-[30%] items-center gap-5 rounded-lg p-[2rem]`}
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
