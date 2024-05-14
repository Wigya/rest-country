import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "antd";
import { useContext } from "react";
import { SearchFilterContext } from "../../context/SearchFilterContext";

const SearchInput: React.FC = () => {
  const { ...contextFunc } = useContext(SearchFilterContext);
  // COMMENT dodac debounce zamiast caly czas onChange rerenderowac wszystkie kompnenety
  return (
    <Input
      prefix={<FontAwesomeIcon icon={faSearch} />}
      className="w-1/3"
      onChange={(e) => contextFunc.setFilterKeyword(e.target.value)}
    />
  );
};

export default SearchInput;
