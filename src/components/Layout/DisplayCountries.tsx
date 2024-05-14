import { useContext, useEffect, useState } from "react";
import { countriesService } from "../../axios/countries";
import Country from "../UI/Country";
import { FilterContext } from "../../context/FilterContext";

const DisplayCountries: React.FC = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const filterContext = useContext(FilterContext);

  useEffect(() => {
    const countriesResponse = countriesService.getCountries();
    countriesResponse.then((countries) => {
      setCountries(countries.data);
      setIsLoading(false);
    });
  }, []);
  let renderCountries;
  //COMMENT: do przerobienia
  if (!isLoading) {
    if (filterContext?.filterRegionKeyword) {
      if (filterContext.filterSearchQuery) {
        renderCountries = countries.map((countryItem: any) => {
          if (countryItem?.capital?.length > 0) {
            if (
              countryItem.region.toLowerCase() ===
              filterContext.filterRegionKeyword.toLowerCase()
            ) {
              if (
                countryItem?.name?.common
                  .toLowerCase()
                  .includes(filterContext.filterSearchQuery)
              ) {
                return (
                  <Country
                    capital={countryItem?.capital[0]}
                    flagImgUrl={countryItem?.flags?.png}
                    name={countryItem?.name?.common}
                    population={countryItem?.population}
                    region={countryItem?.region}
                    className="mr-14 mb-20"
                    key={countryItem?.name?.official}
                  />
                );
              }
            }
          }
        });
      } else {
        renderCountries = countries.map((countryItem: any) => {
          if (countryItem?.capital?.length > 0) {
            if (
              countryItem.region.toLowerCase() ===
              filterContext.filterRegionKeyword.toLowerCase()
            ) {
              return (
                <Country
                  capital={countryItem?.capital[0]}
                  flagImgUrl={countryItem?.flags?.png}
                  name={countryItem?.name?.common}
                  population={countryItem?.population}
                  region={countryItem?.region}
                  className="mr-14 mb-20"
                  key={countryItem?.name?.official}
                />
              );
            }
          }
        });
      }
    } else {
      if (filterContext?.filterSearchQuery) {
        renderCountries = countries.map((countryItem: any) => {
          if (countryItem?.capital?.length > 0) {
            if (
              countryItem?.name?.common
                .toLowerCase()
                .includes(filterContext.filterSearchQuery)
            ) {
              return (
                <Country
                  capital={countryItem?.capital[0]}
                  flagImgUrl={countryItem?.flags?.png}
                  name={countryItem?.name?.common}
                  population={countryItem?.population}
                  region={countryItem?.region}
                  className="mr-14 mb-20"
                  key={countryItem?.name?.official}
                />
              );
            }
          }
        });
      } else {
        renderCountries = countries.map((countryItem: any) => {
          if (countryItem?.capital?.length > 0) {
            return (
              <Country
                capital={countryItem?.capital[0]}
                flagImgUrl={countryItem?.flags?.png}
                name={countryItem?.name?.common}
                population={countryItem?.population}
                region={countryItem?.region}
                className="mr-14 mb-20"
                key={countryItem?.name?.official}
              />
            );
          }
        });
      }
    }
  }

  return <div className="flex flex-wrap justify-center">{renderCountries}</div>;
};

export default DisplayCountries;
