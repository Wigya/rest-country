import React from "react";

export const REGIONS = [
  { label: "Africa", value: "africa" },
  { label: "America", value: "americas" },
  { label: "Asia", value: "asia" },
  { label: "Europe", value: "europe" },
  { label: "Oceania", value: "oceania" },
  // { label: "Anlantyda", value: "atlantis"}
] as const;

export type Regions = (typeof REGIONS)[number]["value"] | "";

export const FilterContext = React.createContext<{
  filterRegionKeyword: Regions;
  setFilterRegionKeyword: React.Dispatch<React.SetStateAction<Regions>>;
  filterSearchQuery: string;
  setFilterSearchQuery: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

const FilterContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [filterRegionKeyword, setFilterRegionKeyword] =
    React.useState<Regions>("");
  const [filterSearchQuery, setFilterSearchQuery] = React.useState<string>("");
  return (
    <FilterContext.Provider
      value={{
        filterRegionKeyword,
        setFilterRegionKeyword,
        filterSearchQuery,
        setFilterSearchQuery,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
