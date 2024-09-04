import Header from "./components/Header";
import Body from "./components/Body";
import store from "./components/utils/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import VideoWatchPage from "./components/utils/VideoWatchPage";
import SearchResultsPage from "./components/SearchResultsPage";

function App() {
  const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Body />
      </>
    ),
    children: [
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "/watch",
      element : <VideoWatchPage />
    },
    {
      path: "/results",
      element: <SearchResultsPage />
    }]
  }])

  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
