import React from 'react';
import { Container } from 'react-bootstrap';
import "../../style/error404.css"
import error404 from"../../assets/error404.png"

const Error404 = () => {
    return (
        <Container className='text-center py-2'>
            <img src={error404} alt="" className='imgError404 mx-auto d-block' />
            <a to='/' className=" btn bg-dark text-white border-0 rounded-0">Volver al inicio</a>
        </Container>
    );
};

export default Error404;