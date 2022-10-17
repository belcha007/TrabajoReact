import React from 'react';
const NosotrosPage = (props) => {
    return (
    <main className="holder">
    <div className="historia">
        <h2>Historia</h2>
        <p>Loreem3</p>
        <p>Lereem4</p>
    </div>
    <div className="staff">
        <h2>Staff</h2>
        <div className="personas">
            <div className="persona">
                <img src="src/image/Fattony.JPG" alt='Fattony'/>
                <h5>Marion Gordon Tony</h5>
                <h6>Gerente General</h6>
                <p>Biografia del gordo tony</p>
            </div>

        </div>
    </div>
    </main>
    );
}

export default NosotrosPage;