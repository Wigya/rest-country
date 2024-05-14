import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../Layout/Header";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { countriesService } from "../../axios/countries";

const CountryDetails: React.FC = () => {
  const [country, setCountry] = useState<any>();
  const { countryName } = useParams();
  useEffect(() => {
    countriesService.getCountries().then((countries) => {
      const foundCountry = countries.data.find(
        (item: any) => item.name.common === countryName
      );
      setCountry(foundCountry);
    });
  }, []);

  console.log("found country:", country);
  return (
    <div>
      <Header />
      <Link to="/">
        <button className="space-x-2  px-8 py-1 mt-20 ml-16 shadow rounded-md active:bg-slate-100">
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Back</span>
        </button>
      </Link>
      {country && (
        <div className="mx-16 mt-16 flex">
          <img src={country.flags.png} className="w-96 h-64 bg-black" />
          <div className="ml-20">
            <h1 className="mt-6 font-bold text-xl">{country.name.common}</h1>
            <div className="flex space-x-28">
              <div className="space-y-1 mt-6">
                <p className="text-xs">
                  <span className="font-semibold">Native Name:</span>{" "}
                  {
                    country.name.nativeName[
                      Object.keys(country.name.nativeName)[0]
                    ].common
                  }
                </p>
                <p className="text-xs">
                  <span className="font-semibold">Population:</span>{" "}
                  {country.population}
                </p>
                <p className="text-xs">
                  <span className="font-semibold">Region:</span>{" "}
                  {country.region}
                </p>
                <p className="text-xs">
                  <span className="font-semibold">Sub Region:</span>{" "}
                  {country.subregion}
                </p>
                <p className="text-xs">
                  <span className="font-semibold">Capital:</span>{" "}
                  {country.capital[0]}
                </p>
              </div>

              <div className="space-y-1 mt-6">
                <p className="text-xs">
                  <span className="font-semibold">Top level domain:</span>{" "}
                  {country.tld[0]}
                </p>
                <p className="text-xs">
                  <span className="font-semibold">Currencies:</span>{" "}
                  {country.currencies[Object.keys(country.currencies)[0]].name}
                </p>
                <p className="text-xs">
                  <span className="font-semibold">Languages:</span>{" "}
                  {country.languages[Object.keys(country.languages)[0]]}
                </p>
              </div>
            </div>
            <div className="mt-7 flex space-x-3">
              <p className="font-semibold text-sm text-nowrap">
                Border Countries:
              </p>
              <div className="flex w-80 flex-wrap">
                {country.borders?.map((border: any) => {
                  return (
                    <div className="px-7 mr-3 mb-3 py-1 shadow rounded-md cursor-default">
                      <span className="text-sm">{border}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
