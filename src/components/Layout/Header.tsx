import { useContext } from "react";
import ButtonDarkMode from "../UI/ButtonDarkMode";
import { ThemeContext } from "../../context/ThemeContext";
import clsx from "clsx";

const Header: React.FC = () => {
  const { ...theme } = useContext(ThemeContext);
  return (
    <header
      className={clsx(
        "shadow-lg flex justify-between pr-16 h-20 items-center pl-16",
        theme.theme === "dark" ? "bg-darkBackground" : "bg-white"
      )}
    >
      <h1
        className={clsx(
          "font-bold text-xl",
          theme.theme === "dark" && "text-white"
        )}
      >
        Where in the world?
      </h1>
      <ButtonDarkMode />
    </header>
  );
};

export default Header;
