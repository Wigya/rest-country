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
  //COMMENT prefers-color-scheme
  //https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
  const [theme, setTheme] = React.useState<Themes>("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
