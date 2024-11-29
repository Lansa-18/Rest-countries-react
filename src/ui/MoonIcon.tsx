import { useTheme } from "../context/themeContext";

export default function MoonIcon() {
  const { isDarkMode } = useTheme();

  return (
    <div className="w-[20%]">
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
