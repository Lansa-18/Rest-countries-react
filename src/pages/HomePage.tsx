import CountryCard from "../components/CountryCard";
import FilterDropDown from "../components/FilterDropDown";
import FilterDropDownList from "../components/FilterDropDownList";
import SearchBar from "../components/SearchBar";
import { useCountriesData } from "../context/CountriesDataContext";
import { useTheme } from "../context/ThemeContext";
import Header from "../ui/Header";

export default function HomePage() {
  const { isDarkMode } = useTheme();
  const { filteredCountries } = useCountriesData();

  return (
    <>
      <div
        className={`${isDarkMode ? "bg-dark-mode-bg" : "bg-light-mode-bg"} min-h-screen font-nunito-sans`}
      >
        <Header />
        <section className="flex justify-center">
          <div className="w-[90%]">
            <article className="relative my-16 flex items-center justify-between">
              <SearchBar />
              <FilterDropDown />
              <FilterDropDownList />
            </article>
            <article className="tab-land:grid-cols-4 tab-port:grid-cols-3 land-phone:grid-cols-2 custom-540:grid-cols-1 grid grid-cols-5 gap-x-8 gap-y-8">
                {filteredCountries.map((country) => (
                  <CountryCard key={country.name.common} country={country} />
                ))}
            </article>
          </div>
        </section>
      </div>
    </>
  );
}
