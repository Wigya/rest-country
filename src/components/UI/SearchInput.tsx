import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "antd";
import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";

const SearchInput: React.FC = () => {
  const filterContext = useContext(FilterContext);
  // COMMENT dodac debounce zamiast caly czas onChange rerenderowac wszystkie kompnenety
  return (
    <Input
      prefix={<FontAwesomeIcon icon={faSearch} />}
      className="w-1/3"
      onChange={(e) => filterContext?.setFilterSearchQuery(e.target.value)}
    />
  );
};

export default SearchInput;
