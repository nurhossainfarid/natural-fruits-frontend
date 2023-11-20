import { Route, Routes } from "react-router-dom";
import Footer from "../components/shared/footer/Footer";
import Header from "../components/shared/header/Header";
import Home from "../pages/home/Home";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
