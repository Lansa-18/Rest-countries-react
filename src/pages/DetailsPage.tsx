import { useNavigate, useParams } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import BackButton from "../ui/BackButton";
import Header from "../ui/Header";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../components/Spinner";
import { useCountriesData } from "../context/CountriesDataContext";

export default function DetailsPage() {
  const { isDarkMode } = useTheme();
  const { id } = useParams();
  const { countries } = useCountriesData();
  const navigate = useNavigate();

  const { isPending, error, data } = useQuery({
    queryKey: [`singleCountry, ${id}`],
    queryFn: async () => {
      const response = await fetch(`https://restcountries.com/v3.1/name/${id}`);
      return await response.json();
    },
  });

  const newData = data?.[0];
  console.log(isPending);

  if (isPending) {
    return <Spinner />;
  }

  if (error) {
    return <div>An error has occured {error.message}</div>;
  }

  console.log(newData);

  function formatNumber(number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function findCountryName(countryCode: string) {
    const country = countries.find((country) => country.cca3 === countryCode)
      ?.name.common;
    navigate(`/details/${country}`);
  }

  return (
    <div
      className={`${isDarkMode ? "bg-dark-mode-bg" : "bg-light-mode-bg"} min-h-screen`}
    >
      <Header />
      <main className="flex justify-center">
        <div className="mt-16 w-[90%]">
          <BackButton />

          <section className="mt-16 flex gap-[10rem] tab-port:gap-[5rem] custom-850:flex-col">
            <figure className="w-[40%] shadow-lg tab-port:w-[50%] custom-850:w-full">
              <img
                className="h-full w-full object-cover"
                src={newData?.flags?.svg}
                alt={newData?.name?.common}
              />
            </figure>
            <article
              className={`${isDarkMode ? "text-dark-mode-text" : "text-light-mode-text"} flex w-[55%] flex-col gap-16 custom-850:w-full`}
            >
              <h2 className="text-4xl font-bold">{newData?.name?.common}</h2>

              <div className="flex w-full justify-between custom-850:flex-col custom-850:gap-[4rem]">
                <div className="space-y-6">
                  <p className="text-2xl font-semibold">
                    Native Name:{" "}
                    <span className="text-xl font-normal">
                      {newData?.name.nativeName &&
                        Object.keys(newData?.name.nativeName).length > 0 &&
                        newData.name.nativeName[
                          Object.keys(newData.name.nativeName)[0]
                        ].official}{" "}
                    </span>
                  </p>
                  <p className="text-2xl font-semibold">
                    Population:{" "}
                    <span className="text-xl font-normal">
                      {newData.population
                        ? formatNumber(newData.population)
                        : "Data not available"}
                    </span>
                  </p>
                  <p className="text-2xl font-semibold">
                    Region:{" "}
                    <span className="text-xl font-normal">
                      {newData.region ? newData.region : "Data not available"}
                    </span>
                  </p>
                  <p className="text-2xl font-semibold">
                    Sub Region:{" "}
                    <span className="text-xl font-normal">
                      {newData.subregion
                        ? newData.subregion
                        : "Data not available"}
                    </span>
                  </p>
                  <p className="text-2xl font-semibold">
                    Capital:{" "}
                    <span className="text-xl font-normal">
                      {newData.capital
                        ? newData.capital[0]
                        : "Data not available"}
                    </span>
                  </p>
                </div>

                <div className="space-y-6">
                  <p className="text-2xl font-semibold">
                    Top Level Domain:{" "}
                    <span className="text-xl font-normal">
                      {newData.tld ? newData.tld[0] : "Data not available"}
                    </span>
                  </p>
                  <p className="text-2xl font-semibold">
                    Currencies:{" "}
                    <span className="text-xl font-normal">
                      {newData.currencies
                        ? Object.keys(newData.currencies).length > 0 &&
                          newData.currencies[Object.keys(newData.currencies)[0]]
                            .name
                        : "Data not available"}{" "}
                    </span>
                  </p>
                  <p className="text-2xl font-semibold">
                    Languages:{" "}
                    <span className="text-xl font-normal">
                      {newData["languages"]
                        ? Object.values(
                            newData["languages"] as Record<string, string>,
                          )[0]
                        : "Data not available"}{" "}
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-8 custom-850:w-full">
                <h3 className="text-2xl font-semibold">Border Countries:</h3>
                <div className="flex flex-wrap gap-4">
                  {newData.borders ? (
                    newData.borders.map((border: string) => (
                      <button
                        onClick={() => findCountryName(border)}
                        key={border}
                        className={`${isDarkMode ? "bg-dark-mode-elements" : "bg-light-mode-elements"} rounded-lg px-6 py-2 text-xl font-semibold shadow-lg`}
                      >
                        {border}
                      </button>
                    ))
                  ) : (
                    <p className="mt-2">Data not available</p>
                  )}
                </div>
              </div>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
}
