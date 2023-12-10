import NavBar from "./components/NavBar.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home.tsx";
import Results from "./components/Results.tsx";
import BadRoute from "./components/BadRoute.tsx";
import Search from "./components/Search.tsx";
import NotFound from "./components/NotFound.tsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar/>}>
            <Route index element={<Home />} />
            <Route path="Now Playing" element={<Results/>} />
            <Route path="Search" element={<Search />} />
            <Route path="NotFound" element={<NotFound />} />
            <Route path="*" element={<BadRoute/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;