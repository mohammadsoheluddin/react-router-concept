import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Login from "../Login/Login";

const Home = () => {
  const location = useLocation();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="max-w-[1280px] mx-auto">
      <Header></Header>
      {isLoading && (
        <div className="text-center">
          <p className="text-4xl font-semibold text-blue-950">Loading...</p>
        </div>
      )}
      <Outlet></Outlet>
      {location.pathname === "/" && (
        <>
          <Hero></Hero>
          <Login></Login>
        </>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Home;
