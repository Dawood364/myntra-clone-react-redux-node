import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import FetchItems from "./Components/FetchItems";
import { useSelector } from "react-redux";
import Spinner from "./Components/Spinner";

function App() {
  const FetchStatus = useSelector((store) => store.FetchStatus);
  return (
    <>
      <h1>
        <Header />
        <FetchItems />

        {FetchStatus.CurrentlyFetching ? <Spinner /> : <Outlet />}

        <Footer />
      </h1>
    </>
  );
}

export default App;
