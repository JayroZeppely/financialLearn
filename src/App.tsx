import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./assets/style.css";

function App() {
    return (
        <>
            <Header/>
            <main>
                <BrowserRouter>
                    {/* Router*/}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </BrowserRouter>
            </main>
            <Footer/>
        </>
    );
}

export default App;