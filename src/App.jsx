import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Error404 from './components/pages/Error404'
import Menu from './components/common/Menu';
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from './components/common/Footer';
import Inicio from './components/pages/Inicio';
import Login from './components/pages/Login';
import Contacto from './components/pages/Contacto';
import CancerDeMama from './components/pages/CancerDeMama';

function App() {
 

  return (
    <>
      <Menu></Menu>
      {/* <Error404></Error404> */}
      {/* <Inicio></Inicio> */}
      {/* <Login></Login> */}
      {/* <Contacto></Contacto> */}
      <CancerDeMama></CancerDeMama>
      <Footer></Footer>
    </>
  )
}

export default App
