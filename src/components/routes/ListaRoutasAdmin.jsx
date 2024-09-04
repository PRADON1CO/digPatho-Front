import { Route, Routes } from "react-router-dom";
import CancerDeMama from "../pages/CancerDeMama";

const ListaRoutasAdmin = () => {
    return (
        <Routes>
            <Route path="/cancerDeMama" element={<CancerDeMama></CancerDeMama>}></Route>
        </Routes>
    );
};

export default ListaRoutasAdmin;