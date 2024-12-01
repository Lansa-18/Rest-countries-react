import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import MoonIcon from "./MoonIcon";

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <header
      className={`${isDarkMode ? "bg-dark-mode-elements" : "bg-light-mode-elements"} flex w-full justify-center py-[2.5rem] shadow-lg`}
    >
      <nav className="flex w-[90%] items-center justify-between">
        <NavLink
          to="/"
          className={`${isDarkMode ? "text-dark-mode-text" : "text-light-mode-text"} land-phone:text-4xl custom-540:text-3xl custom-390:text-2xl text-5xl font-bold`}
        >
          Where in the world?
        </NavLink>
        <div
          onClick={toggleDarkMode}
          className="laptop:basis-[20%] tab-port:basis-[22%] custom-915:basis-[25%] land-phone:basis-[28%] custom-540:basis-[31%] flex basis-[14%] cursor-pointer items-center justify-between"
        >
          <MoonIcon />
          <p
            className={`${isDarkMode ? "text-dark-mode-text" : "text-light-mode-text"} land-phone:text-3xl custom-540:text-2xl custom-390:text-xl text-4xl font-bold`}
          >
            {isDarkMode ? "Light mode" : "Dark mode"}
          </p>
        </div>
      </nav>
    </header>
  );
}
