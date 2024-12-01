import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CountriesDataProvider } from "./context/CountriesDataContext";
import { ThemeProvider } from "./context/ThemeContext";
import Spinner from "./components/Spinner";

// Lazy loading the pages
const HomePage = lazy(() => import("./pages/HomePage"));
const DetailsPage = lazy(() => import("./pages/DetailsPage"));
const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <CountriesDataProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route index element={<HomePage />} />
                <Route path="details/:id" element={<DetailsPage />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </ThemeProvider>
      </CountriesDataProvider>
    </QueryClientProvider>
  );
}

export default App;
