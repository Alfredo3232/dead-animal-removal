import { StrictMode } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
    <>
        <StrictMode>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </StrictMode>
    </>
);

export default App;
