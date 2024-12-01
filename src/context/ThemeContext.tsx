import { createContext, useContext, useEffect, useReducer } from "react";

interface State {
  isDarkMode: boolean;
}

type Action =
  | { type: "TOGGLE_DARK_MODE" }
  | { type: "SET_DARK_MODE"; payload: boolean };

interface ContextProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

const initialState: State = {
  isDarkMode: true,
};

const ThemeContext = createContext<ContextProps | undefined>(undefined);

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    case "SET_DARK_MODE":
      return {
        ...state,
        isDarkMode: action.payload,
      };
    default:
      return state;
  }
};

function ThemeProvider({ children }: ThemeProviderProps) {
  const [{ isDarkMode }, dispatch] = useReducer(reducer, initialState);

  function toggleDarkMode() {
    dispatch({ type: "TOGGLE_DARK_MODE" });
  }

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark");
    if (prefersDark.matches) {
      dispatch({ type: "SET_DARK_MODE", payload: true });
    } else {
      dispatch({ type: "SET_DARK_MODE", payload: false });
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export { useTheme, ThemeProvider };
