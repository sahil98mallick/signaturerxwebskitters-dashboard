import React from "react";
import ReactDOM from "react-dom/client";
import MuiThemeProvider from "Theme/MuiThemeProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import "../src/styles/global.scss";
import reportWebVitals from "./reportWebVitals";
import PageLoaders from "components/Loders/PageLoaders";
import { Provider } from "react-redux";
import { store } from "redux-toolkit/store/store";
import { Toaster } from "sonner";
const App = React.lazy(() => import("./App"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// For react query default queryclient
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster richColors position="top-left" />
      <MuiThemeProvider>
        <QueryClientProvider client={queryClient}>
          <Router basename="/" future={{ v7_startTransition: true }}>
            <PageLoaders>
              <App />
            </PageLoaders>
          </Router>
        </QueryClientProvider>
      </MuiThemeProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
