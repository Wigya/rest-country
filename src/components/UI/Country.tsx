import clsx from "clsx";
import { Link } from "react-router-dom";

interface CountryProps {
  flagImgUrl: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  className?: string;
}

const Country: React.FC<CountryProps> = ({
  flagImgUrl,
  name,
  population,
  region,
  capital,
  className,
}: CountryProps) => {
  return (
    <Link to={`/details/${name}`}>
      <div className={clsx("w-72 rounded-lg shadow-lg", className)}>
        <img src={flagImgUrl} className="w-72 h-40 rounded-t-lg" />
        <div className="h-40 px-6 pt-5">
          <h1 className="font-bold text-xl mb-3">{name}</h1>
          <div className="text-sm">
            <span>
              <span className="font-semibold">Population:</span>{" "}
              <span>{population}</span>
            </span>
            <br />
            <span>
              <span className="font-semibold">Region:</span>{" "}
              <span>{region}</span>
            </span>
            <br />
            <span>
              <span className="font-semibold">Capital:</span>{" "}
              <span>{capital}</span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Country;
