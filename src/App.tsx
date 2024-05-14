import CountryDetails from "./components/Pages/CountryDetails";
import Home from "./components/Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegionFilterProvider from "./context/RegionFilterContext";
import SearchFilterProvider from "./context/SearchFilterContext";
import ThemeContextProvider from "./context/ThemeContext";
import { ROUTES } from "./routes";

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
      <RegionFilterProvider>
        <SearchFilterProvider>
          <RouterProvider router={router} />
        </SearchFilterProvider>
      </RegionFilterProvider>
    </ThemeContextProvider>
  );
}

export default App;
