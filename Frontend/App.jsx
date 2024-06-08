import React, {useState} from "react";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Components/Home/home";

import Footer from "./Components/Footer/footer";
import SmallScreen from "./Components/SmallScreen/small-screen";
import "./App.css";

const App = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    
    return (
        <>
            <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
            <Home mobileMenu={mobileMenu} />

            <Footer />
            <SmallScreen />
        </>
    );
};

export default App;