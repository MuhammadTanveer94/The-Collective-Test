import React from "react";
import {ReactQueryDevtools} from "react-query/devtools";
import {QueryClient, QueryClientProvider} from "react-query";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import {FullPageLoader} from "./components";
import {getNextPageParam} from "./services/react-query.service";

import "./App.less";
import "antd/dist/antd.css";

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
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing />}>
              <Route path='*' element={<Landing />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </React.Suspense>
  );
}

export default App;
