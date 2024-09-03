import "../../style/inicio.css"

const Inicio = () => {
    return (
        <div className='fondoInicio text-center'>
            <h1>Detección temprana de cáncer con IA</h1>
            <p className="text-center container py-2 tamanioText">Nuestra tecnología permite que la deteccion de cancer sea más rápida y precisa. El futuro de la pathologia es ahora. <br />El futuro es GigPatho</p>
            <a href="https://www.digpatho.com/es" className='btn rounded-0 bg-dark text-white hoverBtnConocer'>Saber más</a>
        </div>
    );
};

export default Inicio;