import { useTheme } from "./context/themeContext";
import Header from "./ui/Header";

function App() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`${isDarkMode ? "bg-dark-mode-bg" : "bg-light-mode-bg"} font-nunito-sans min-h-screen`}
    >
      <Header />
    </div>
  );
}

export default App;
