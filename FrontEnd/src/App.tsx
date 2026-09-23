import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Error from "./Components/Error";
import Glossary from "./Components/Glossary";
import Details from "./Components/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./assets/style.css";

function App() {
    return (
        <>
            <Header/>
            <main>
                <BrowserRouter>
                    {/* Router*/}
                    <Routes>
                        <Route path="*" element={<Error />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/details/:companyName" element={<Details />} />
                        <Route path="/glossary" element={<Glossary />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </BrowserRouter>
            </main>
            <Footer/>
        </>
    );
}

export default App;