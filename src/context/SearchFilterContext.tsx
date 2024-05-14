import React from "react";

type SearchFilterContextProps={
  filterKeyword: string;
  setFilterKeyword: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchFilterContext = React.createContext<SearchFilterContextProps | null>(null);

const SearchFilterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [filterKeyword, setFilterKeyword] = React.useState<string>("");
  return (
    <SearchFilterContext.Provider value={{ filterKeyword, setFilterKeyword }}>
      {children}
    </SearchFilterContext.Provider>
  );
};

export default SearchFilterProvider;
