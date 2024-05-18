import React from "react";
import Header from "../Layout/Header";
import SearchInput from "../UI/SearchInput";
import DisplayCountries from "../Layout/DisplayCountries";
import SelectRegion, { Option } from "../UI/SelectRegion";
import { REGIONS } from "../../context/FilterContext";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-between mt-5 pr-32 pl-20">
        <SearchInput />
        <SelectRegion data={REGIONS as unknown as Option[]} />
      </div>
      <div className="mx-16 mt-10">
        <DisplayCountries />
      </div>
    </div>
  );
};

export default Home;
