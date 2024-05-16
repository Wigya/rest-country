import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "antd";
import React from "react";
import useFilterContext from "../../hooks/useFilterContext";

const SearchInput: React.FC = () => {
  const filterContext = useFilterContext();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let timer = 0;
    clearTimeout(timer);
    timer = setTimeout(() => {
      filterContext?.setFilterSearchQuery(e.target.value);
    }, 500);
  };

  return (
    <Input
      prefix={<FontAwesomeIcon icon={faSearch} />}
      className="w-1/3"
      onChange={handleOnChange}
    />
  );
};

export default SearchInput;
