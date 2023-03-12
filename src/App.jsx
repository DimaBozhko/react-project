import './App.scss';
import Home from "./pages/Home";
import WishList from './pages/WishList';
import {Routes, Route, NavLink} from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/WishList" element={<WishList/>}></Route>            
        </Routes>
    )

}

export default App;
