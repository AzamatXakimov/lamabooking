import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { Hotels } from "./pages/Hotels/Hotels";
import { HotelSingle } from "./pages/HotelSingle/HotelSingle";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 

export const App = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>

            <Route path="/" element={<Home/>}/>
            <Route path="/hotels" element={<Hotels/>}/>
            <Route path="/hotels/:hotleId" element={<HotelSingle/>}/>
        </Routes>
    </>
}
