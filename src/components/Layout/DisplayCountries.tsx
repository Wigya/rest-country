import { useEffect, useState } from "react";
import { countriesService } from "../../axios/countries";
import Country from "../UI/Country";
import useFilterContext from "../../hooks/useFilterContext";

const DisplayCountries: React.FC = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const filterContext = useFilterContext();

  useEffect(() => {
    const countriesResponse = countriesService.getCountries();
    countriesResponse.then((countries) => {
      setCountries(countries.data);
      setIsLoading(false);
    });
  }, []);
  let renderCountries;

  if (!isLoading) {
    renderCountries = countries.map((countryItem: any) => {
      if (countryItem?.capital?.length > 0) {
        const FILTER_BY_REGION = filterContext?.filterRegionKeyword;

        const FILTER_BY_REGION_AND_SEARCH_QUERY =
          filterContext?.filterRegionKeyword &&
          filterContext?.filterSearchQuery;

        const FILTER_BY_SEARCH_QUERY = filterContext?.filterSearchQuery;

        const element = (
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

        if (FILTER_BY_REGION_AND_SEARCH_QUERY) {
          if (
            countryItem?.name?.common
              .toLowerCase()
              .includes(filterContext.filterSearchQuery) &&
            countryItem.region.toLowerCase() ===
              filterContext.filterRegionKeyword.toLowerCase()
          ) {
            return element;
          }
        } else if (FILTER_BY_REGION) {
          if (
            countryItem.region.toLowerCase() ===
            filterContext.filterRegionKeyword.toLowerCase()
          ) {
            return element;
          }
        } else if (FILTER_BY_SEARCH_QUERY) {
          if (
            countryItem?.name?.common
              .toLowerCase()
              .includes(filterContext.filterSearchQuery)
          ) {
            return element;
          }
        } else {
          return element;
        }
      }
    });
  }

  return <div className="flex flex-wrap justify-center">{renderCountries}</div>;
};

export default DisplayCountries;
