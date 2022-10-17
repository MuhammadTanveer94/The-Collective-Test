import "antd/dist/antd.css";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import "./App.less";
import { FullPageLoader } from "./components";
import AppRoutes from "./routes/AppRoutes";
import { getNextPageParam } from "./services/react-query.service";

const Landing = React.lazy(() => import("./pages/Landing"));

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 30,
      refetchOnWindowFocus: false,
      retry: false,
      getNextPageParam: (lastPage, allPages) =>
        getNextPageParam(lastPage, allPages),
    },
  },
});

function App() {
  return (
    <React.Suspense fallback={<FullPageLoader />}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>{AppRoutes()}</BrowserRouter>
      </QueryClientProvider>
    </React.Suspense>
  );
}

export default App;
