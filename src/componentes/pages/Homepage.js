import React from 'react';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="front/public/arrim1.JPG" alt="Madera"></img>
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>lorem</p>
                    <p>Lorem2222222</p>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente Exelente </span>
                        <span className="autor">Juan Perez - Zapatos.com</span>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default HomePage;