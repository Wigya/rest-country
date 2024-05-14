import CountryDetails from "./components/Pages/CountryDetails";
import Home from "./components/Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ThemeContextProvider from "./context/ThemeContext";
import { ROUTES } from "./routes";
import FilterContextProvider from "./context/FilterContext";

function App() {
  const router = createBrowserRouter([
    {
      path: ROUTES.home,
      element: <Home />,
    },
    {
      path: ROUTES.countryDetails(":countryName"),
      element: <CountryDetails />,
    },
  ]);

  return (
    <ThemeContextProvider>
      <FilterContextProvider>
        <RouterProvider router={router} />
      </FilterContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
