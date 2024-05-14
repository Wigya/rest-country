import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons/faMoon";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import clsx from "clsx";

const ButtonDarkMode: React.FC = () => {
  const { ...theme } = useContext(ThemeContext);
  return (
    <button
      className={clsx(
        "space-x-2 hover:bg-slate-100 p-2 rounded-lg transition-colors",
        theme.theme === "dark" && "hover:bg-slate-700"
      )}
      onClick={() => theme.setTheme(theme.theme === "dark" ? "light" : "dark")}
    >
      <FontAwesomeIcon
        icon={faMoon}
        className={clsx(theme.theme === "dark" && "text-white")}
      />
      <span className={clsx(theme.theme === "dark" && "text-white")}>
        Dark Mode
      </span>
    </button>
  );
};

export default ButtonDarkMode;
