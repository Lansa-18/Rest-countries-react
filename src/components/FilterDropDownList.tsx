import { useCountriesData } from "../context/CountriesDataContext";
import { useTheme } from "../context/ThemeContext";

export default function FilterDropDownList() {
  const { isDarkMode } = useTheme();
  const { isRotated, filterCountries } = useCountriesData();

  function handleFilter(e: React.MouseEvent<HTMLUListElement>) {
    let region = (e.target as HTMLElement).innerHTML;
    filterCountries(region);
    region = "";
  }

  return (
    <ul
      onClick={handleFilter}
      className={`${isDarkMode ? "bg-dark-mode-elements text-dark-mode-text" : "bg-light-mode-elements text-light-mode-text"} ${isRotated ? "block" : "hidden"} 
      !absolute right-0 top-[7rem] z-10 w-[19%] space-y-6 rounded-lg border-red-500 py-5 text-2xl shadow-md 
      tab-land:w-[22%] tab-port:w-[25%] custom-540:w-[65%] custom-850:top-[16rem] custom-850:w-[50%] custom-850:left-0`}
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
