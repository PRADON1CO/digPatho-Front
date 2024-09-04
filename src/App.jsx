import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Error404 from "./components/pages/Error404";
import Menu from "./components/common/Menu";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/common/Footer";
import Inicio from "./components/pages/Inicio";
import Login from "./components/pages/Login";
import Contacto from "./components/pages/Contacto";
import CancerDeMama from "./components/pages/CancerDeMama";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import ListaRoutasAdmin from "./components/routes/ListaRoutasAdmin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<Inicio></Inicio>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/contacto" element={<Contacto></Contacto>}></Route>
          <Route
            path="/administrador"
            element={
              <RutasProtegidas>
                <ListaRoutasAdmin></ListaRoutasAdmin>
              </RutasProtegidas>
            }
          ></Route>
          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
