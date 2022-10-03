import React from 'react';
const ContactoPage = (props) => {
    return (
    <main>
        <div>
            <h2>Contacto Rapido</h2>
            <form action="" method="" className= "formulario">
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name="" />
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text" name="" />
                </p>
                <p>
                    <label for="telefono">Telefono</label>
                    <input type="text" name="" />
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name=""></textarea>
                </p>
                <p class="acciones"><input type="submit"
                    value="Enviar" />
                </p>
                <form>
            <div>
                <div class="datos">
                    <h2>Otras vias de comunicacion</h2>
                    <p>Tambien puede contactarse con nostros mediante los siguientes medios</p>
                    <ul>
                        <li>Telefono 2964466807</li>
                        <li>Email: mmarganaraz@gmail.com</li>
                        <li>Facebook:</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
                </form>
            </form>
        </div>
    </main>
    );
}

export default ContactoPage;