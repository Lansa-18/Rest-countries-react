import { FadeLoader } from "react-spinners";
import { useTheme } from "../context/ThemeContext";
import { useIsFetching } from "@tanstack/react-query";

export default function Spinner() {
  const { isDarkMode } = useTheme();
  const isFetching = useIsFetching();

  return (
    <div
      className={`${isDarkMode ? "bg-dark-mode-bg" : "bg-light-mode-bg"} flex h-screen w-full items-center justify-center`}
    >
      <FadeLoader
        loading={isFetching ? true : false}
        color={isDarkMode ? "#FAFAFA" : "#202C36"}
      />
    </div>
  );
}

// export default function Spinner() {
//   return 
// }
