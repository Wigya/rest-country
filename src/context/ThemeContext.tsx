import React from "react";

type Themes = "dark" | "light";

type ThemeContextProps = {
  theme: Themes;
  setTheme: React.Dispatch<React.SetStateAction<Themes>>;
};

export const ThemeContext = React.createContext<ThemeContextProps | null>(null);

const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = React.useState<Themes>(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
