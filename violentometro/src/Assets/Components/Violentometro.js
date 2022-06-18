import React from "react";
import '../CSS/violentometro.css';
import background from "../Images/presentación1.png";

function Violentometro() {
    return(
        <div className="Wrapper1">
            <div className="Border1"></div>
            <div className="Menu1">
                <h1 className="MenuTitle1">Acceso a violentómetro</h1>
            </div>
            <div className="Content1">
                <div className="Text1">
                    <h1 className="ContentTitle1"><b>Violentó</b>metro</h1>
                    <p>El “Violentómetro” contiene una clasificación de las diversas manifestaciones de violencia en la pareja, un material gráfico y didáctico en forma de regla que consiste en visualizar las diferentes manifestaciones de violencia que se encuentran ocultas en la vida cotidiana y que muchas veces se confunden o desconocen.</p>
                    <div className="LinkContainer1">
                        <a href="/survey">Comenzar</a>
                    </div>
                </div>
                <div className="Image1"><img src={background} alt="background" /></div>
            </div>
            <div className="Espacio"></div>
                <div className="Border"></div>
        </div>
    );
}

export default Violentometro;