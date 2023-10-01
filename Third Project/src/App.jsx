import Navbar from "./navbar";
import Help from "./pages/help";
import Sign from "./pages/sign_up";
import Home from "./home";
import { Route, Routes } from "react-router-dom";
import FooterWithSocialMediaIcons from "./bottom";

export default function App() {
  return (
    <>
      <Navbar />
      <div>
        <div className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/help" element={<Help />} />
            <Route path="/sign_up" element={<Sign />} />
          </Routes>
        </div>
      </div>
      <FooterWithSocialMediaIcons />
    </>
  );
}

