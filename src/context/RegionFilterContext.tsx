import React from "react";

export const REGIONS=[
                  { label: "Africa", value: "africa" },
                  { label: "America", value: "americas" },
                  { label: "Asia", value: "asia" },
                  { label: "Europe", value: "europe" },
                  { label: "Oceania", value: "oceania" },
                  // { label: "Anlantyda", value: "atlantis"}
                ] as const

export type Regions= typeof REGIONS[number]["value"] | ""

export const RegionFilterContext = React.createContext<{
  filterKeyword: Regions;
  setFilterKeyword: React.Dispatch<React.SetStateAction<Regions>>;
} | null>(null);

const RegionFilterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [filterKeyword, setFilterKeyword] = React.useState<Regions>("");
  return (
    <RegionFilterContext.Provider value={{ filterKeyword, setFilterKeyword }}>
      {children}
    </RegionFilterContext.Provider>
  );
};

export default RegionFilterProvider;
