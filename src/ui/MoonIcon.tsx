import { useTheme } from "../context/ThemeContext";

export default function MoonIcon() {
  const { isDarkMode } = useTheme();

  return (
    <div className="w-[20%] land-phone:w-[18%]">
      <img
        src={
          isDarkMode
            ? "/images/theme-mode-dark.svg"
            : "/images/theme-mode-light.svg"
        }
        alt={isDarkMode ? "Dark mode" : "Light mode"}
      />
    </div>
  );
}
