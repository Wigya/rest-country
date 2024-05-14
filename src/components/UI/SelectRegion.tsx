import clsx from "clsx";
import { Select } from "antd";
import {
  RegionFilterContext,
  Regions,
} from "../../context/RegionFilterContext";
import { useContext } from "react";

export type Option = { label: string; value: string };

interface SelectProps {
  data: Option[];
  className?: string;
}

const SelectRegion: React.FC<SelectProps> = ({
  data,
  className,
}: SelectProps) => {
  const { ...contextFunc } = useContext(RegionFilterContext);

  return (
    <Select
      options={data}
      defaultValue="Filter by Region"
      className={clsx("w-52 h-12", className)}
      onSelect={(selectedValue) => {
        contextFunc.setFilterKeyword(selectedValue as Regions);
      }}
    />
  );
};

export default SelectRegion;
