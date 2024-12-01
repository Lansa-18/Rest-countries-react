import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function BackButton() {
  const { isDarkMode } = useTheme();

  return (
    <button
      className={`${isDarkMode ? "bg-dark-mode-elements" : "bg-light-mode-elements"} w-[8%] min-w-[11.2rem] rounded-lg border-red-500 shadow-lg transition-all duration-300 hover:scale-[1.05]`}
    >
      <Link
        className={`${isDarkMode ? "text-dark-mode-text" : "text-light-mode-text"} flex items-center justify-between border-blue-500 px-10 py-5 text-2xl font-bold`}
        to="/"
      >
        <div className="">
          <img
            src={
              isDarkMode
                ? "/images/back-icon-dark.svg"
                : "/images/back-icon-light.svg"
            }
            alt="back-icon"
          />
        </div>
        Back
      </Link>
    </button>
  );
}
