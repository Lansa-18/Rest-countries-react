import { useQuery } from "@tanstack/react-query";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import Spinner from "../components/Spinner";

interface ContextProp {
  countries: countriesObj[];
  inputValue: string;
  isRotated: boolean;
  filteredCountries: countriesObj[];
  updateInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchCountries: (query: string) => void;
  toggleRotate: () => void;
  filterCountries: (region: string) => void;
}

export interface countriesObj {
  area: number;
  cca3: string;
  name: { common: string };
  flags: {
    png: string;
  };
  capital: string;
  population: number;
  region: string;
}

interface State {
  countries: countriesObj[];
  inputValue: string;
  isRotated: boolean;
  filteredCountries: countriesObj[];
}

type Action =
  | { type: "SET_COUNTRIES"; payload: countriesObj[] }
  | { type: "UPDATE_INPUT"; payload: string }
  | { type: "SEARCH_COUNTRIES"; payload: string }
  | { type: "TOGGLE_ROTATE" }
  | { type: "FILTER_COUNTRIES"; payload: string };

interface CountriesDataProviderProps {
  children: React.ReactNode;
}

const CountriesDataContext = createContext<ContextProp | undefined>(undefined);

const initialState = {
  countries: [],
  filteredCountries: [],
  inputValue: "",
  isRotated: false,
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
        filteredCountries: action.payload,
      };

    case "SEARCH_COUNTRIES":
      console.log("Original Countries:", state.countries);
      console.log("Filtered Countries:", state.filteredCountries);

      if (action.payload === "") {
        console.log("empty");
        return {
          ...state,
          filteredCountries: state.countries,
        };
      }
      return {
        ...state,
        filteredCountries: state.countries.filter((country) =>
          country.name.common
            .toLowerCase()
            .includes(action.payload.toLowerCase()),
        ),
      };

    case "FILTER_COUNTRIES":
      if (action.payload === "All") {
        return {
          ...state,
          filteredCountries: state.countries,
        }
      }
      return {
        ...state,
        filteredCountries: state.countries.filter((country) =>
          country.region.toLowerCase().includes(action.payload.toLowerCase()),
        ),
      };

    case "TOGGLE_ROTATE":
      return {
        ...state,
        isRotated: !state.isRotated,
      };

    case "UPDATE_INPUT":
      return {
        ...state,
        inputValue: action.payload,
      };

    default:
      return state;
  }
}

function CountriesDataProvider({ children }: CountriesDataProviderProps) {
  const [{ countries, inputValue, isRotated, filteredCountries }, dispatch] =
    useReducer(reducer, initialState);

  const { isPending, error, data } = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      return await response.json();
    },
  });

  useEffect(() => {
    function setCountries() {
      const sortedData = data.sort((a: countriesObj, b: countriesObj) =>
        a.name.common.localeCompare(b.name.common),
      );
      // console.log(sortedData);
      dispatch({ type: "SET_COUNTRIES", payload: sortedData });
    }
    if (data) {
      setCountries();
    }
  }, [data]);

  if (isPending) {
    return <Spinner />;
  }

  if (error) {
    return <div>An error has occured {error.message}</div>;
  }

  function updateInput(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "UPDATE_INPUT", payload: e.target.value });
  }

  function searchCountries(query: string) {
    dispatch({ type: "SEARCH_COUNTRIES", payload: query });
  }

  function toggleRotate() {
    dispatch({ type: "TOGGLE_ROTATE" });
  }

  function filterCountries(region: string) {
    dispatch({ type: "FILTER_COUNTRIES", payload: region });
  }


  return (
    <CountriesDataContext.Provider
      value={{
        countries,
        inputValue,
        isRotated,
        filteredCountries,
        // loadingState,
        updateInput,
        searchCountries,
        toggleRotate,
        filterCountries,
      }}
    >
      {children}
    </CountriesDataContext.Provider>
  );
}

function useCountriesData() {
  const context = useContext(CountriesDataContext);
  if (context === undefined) {
    throw new Error(
      "useCountriesData must be used within a CountriesDataProvider",
    );
  }
  return context;
}

export { CountriesDataProvider, useCountriesData };
