import { Link } from "react-router-dom";
import { countriesObj } from "../context/CountriesDataContext";
import { useTheme } from "../context/ThemeContext";

interface CountryCardProps {
  country: countriesObj;
}

export default function CountryCard({ country }: CountryCardProps) {
  const { isDarkMode } = useTheme();
  return (
    <Link to={`details/${country.name.common}`}>
      <div className="w-full shadow-xl transition-all duration-300 hover:scale-[1.05]">
        <figure className="h-[15rem] rounded-lg border-red-500">
          <img
            className="h-full w-full rounded-t-lg object-cover"
            src={country.flags.png}
            alt={country.name.common}
          />
        </figure>
        <div
          className={`${isDarkMode ? "bg-dark-mode-elements text-dark-mode-text" : "bg-light-mode-elements text-light-mode-text"} space-y-4 rounded-b-lg p-8`}
        >
          <h2 className="text-2xl font-extrabold">{country.name.common}</h2>
          <p className="text-xl font-semibold">
            Population: <span>{country.population}</span>
          </p>
          <p className="text-xl font-semibold">
            Region: <span>{country.region}</span>
          </p>
          <p className="text-xl font-semibold">
            Capital: <span>{country.capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
