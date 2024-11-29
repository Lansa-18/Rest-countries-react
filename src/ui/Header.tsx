import { useTheme } from "../context/themeContext";
import MoonIcon from "./MoonIcon";

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <header
      className={`${isDarkMode ? "bg-dark-mode-elements shadow-md" : "bg-light-mode-elements shadow-md"} flex w-screen justify-center py-[2.5rem]`}
    >
      <nav className="flex w-[90%] items-center justify-between border-red-500">
        <div
          className={`${isDarkMode ? "text-dark-mode-text" : "text-light-mode-text"} text-5xl font-bold`}
        >
          Where in the world?
        </div>
        <div
          onClick={toggleDarkMode}
          className="flex basis-[14%] cursor-pointer items-center justify-between border-blue-500"
        >
          <MoonIcon />
          <p
            className={`${isDarkMode ? "text-dark-mode-text" : "text-light-mode-text"} text-4xl font-bold`}
          >
            {isDarkMode ? "Light mode" : "Dark mode"}
          </p>
        </div>
      </nav>
    </header>
  );
}
