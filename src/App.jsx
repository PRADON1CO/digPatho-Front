import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Error404 from './components/pages/Error404'
import Menu from './components/common/Menu';
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from './components/common/Footer';
import Inicio from './components/pages/Inicio';

function App() {
 

  return (
    <>
      <Menu></Menu>
      {/* <Error404></Error404> */}
      <Inicio></Inicio>
      <Footer></Footer>
    </>
  )
}

export default App
