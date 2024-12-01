import { useCountriesData } from "../context/CountriesDataContext";
import { useTheme } from "../context/ThemeContext";

export default function FilterDropDownList() {
  const { isDarkMode } = useTheme();
  const { isRotated, filterCountries } = useCountriesData();

  function handleFilter(e: React.MouseEvent<HTMLUListElement>) {
    let region = (e.target as HTMLElement).innerHTML;
    console.log(region);
    filterCountries(region);
    region = "";
    console.log(region);
  }

  return (
    <ul
      onClick={handleFilter}
      className={`${isDarkMode ? "bg-dark-mode-elements text-dark-mode-text" : "bg-light-mode-elements text-light-mode-text"} ${isRotated ? "block" : "hidden"} !absolute right-0 top-[7rem] z-10 w-[19%] space-y-6 rounded-lg border-red-500 py-5 text-2xl shadow-md`}
    >
      <li className="cursor-pointer px-[3rem] py-1">All</li>
      <li className="cursor-pointer px-[3rem] py-1">Africa</li>
      <li className="cursor-pointer px-[3rem] py-1">America</li>
      <li className="cursor-pointer px-[3rem] py-1">Asia</li>
      <li className="cursor-pointer px-[3rem] py-1">Europe</li>
      <li className="cursor-pointer px-[3rem] py-1">Oceania</li>
    </ul>
  );
}
