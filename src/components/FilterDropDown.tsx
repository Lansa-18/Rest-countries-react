import { useCountriesData } from "../context/CountriesDataContext";
import { useTheme } from "../context/ThemeContext";

export default function FilterDropDown() {
  const { isDarkMode } = useTheme();
  const {isRotated, toggleRotate} = useCountriesData();

  return (
    <div
      onClick={toggleRotate}
      className={`${isDarkMode ? "bg-dark-mode-elements" : "bg-light-mode-elements"} flex basis-[19%] cursor-pointer items-center
      justify-between rounded-lg px-[3rem] py-[2rem] hover:scale-[1.05] transition-transform duration-300 ease-in-out hover:shadow-md`}
    >
      <p
        className={`${isDarkMode ? "text-dark-mode-text" : "text-light-mode-text"} text-2xl`}
      >
        Filter by Region
      </p>
      <div className="w-[8%]">
        <img
          className={`transform ${isRotated ? "rotate-180 transition-all duration-200" : " rotate-0 transition-all duration-200"}`}
          src={
            isDarkMode
              ? "/images/chevron-down-dark.svg"
              : "/images/chevron-down-light.svg"
          }
          alt="dropdown-icon"
        />
      </div>
    </div>
  );
}
