import React from "react";
import './Home.css';
import genero from "./images/genero.png";
import datos from "./images/datos.png";
import identificar from "./images/identificar.png";
import termometro from "./images/termometro.png";
import siguiente from "./images/siguiente.png";
import background1 from "./images/background1.png"
import { useNavigate } from 'react-router-dom';

function Home() {
    const history = useNavigate();
    const routeChange = () =>{ 
    history('violentometro'); 
    }
    return(
        <div className="Wrapper">
            <div className="Border"></div>
            <div className="Menu">
                    <h1 className="MenuTitle">Home</h1>
            </div>
            <div className="Content">
                <div className="Espacio"></div>
                <div className="Title">
                    <h1 className="ContentTitle">Conoce todo sobre la <b>violencia de género</b>.</h1>
                </div>
                <div className="EspacioUno"></div>
                <div className="Features">
                    <div className="FeatureOne">
                        <a href="#QueEs"><div className="Image"><img className="opcion" src={genero} alt="genero"/></div></a>
                        <div className="Texts">
                            <a href="#QueEs"><h3>¿Qué es?</h3></a>
                            <p>Conoce lo que realmente significa la violencia de género.</p>
                        </div>
                    </div>
                    <div className="FeatureOne">
                        <a href="#Datos"><div className="Image"><img className="opcion" src={datos} alt="datos"/></div></a>
                        <div className="Texts">
                            <a href="#Datos"><h3>Datos</h3></a>
                            <p>Aprende sobre las cifras de América de la violencia de género.</p>
                        </div>
                    </div>
                    <div className="FeatureOne">
                        <a href="#ComoIdentifi"><div className="Image"><img className="opcion" src={identificar} alt="identificar"/></div></a>
                        <div className="Texts">
                            <a href="#ComoIdentifi"><h3>¿Cómo identificarlo?</h3></a>
                            <p>Para tu día a día, descubre la forma de distinguir cuando sufres violencia de género.</p>
                        </div>
                    </div>
                    <div className="FeatureOne">
                        <a href="#Violentometro"><div className="Image"><img className="opcion" src={termometro} alt="violentómetro"/></div></a>
                        <div className="Texts">
                            <a href="#Violentometro"><h3>Violentómetro</h3></a>
                            <p>Accede a nuestra actividad principal e identifica en que estado de violencia te encuentras.</p>
                        </div>
                    </div>
                    <div className="FeatureOne">
                        <a href="#QueSigue"><div className="Image"><img className="opcion" src={siguiente} alt="siguiente"/></div></a>
                        <div className="Texts">
                            <a href="#QueSigue"><h3>¿Qué sigue?</h3></a>
                            <p>La forma en que podemos contribuir a erradicar la violencia de género.</p>
                        </div>
                    </div>
                </div>
                <div className="Espacio"></div>
                <div className="Espacio"></div>
                <div className="RespuestasUno">
                    <div className="ContenedorImagen">
                        <img className="Background" src={background1} alt="background"/>
                    </div>
                    <div className="Texto">
                        <div>
                            <h1 id="QueEs">¿Qué es la <b>violencia de género</b>?</h1>
                            <p>La violencia de género se refiere a los actos dañinos dirigidos contra una persona o un grupo de personas en razón de su género. Tiene su origen en la desigualdad de género, el abuso de poder y la existencia de normas dañinas. El término se utiliza principalmente para subrayar el hecho de que las diferencias estructurales de poder basadas en el género colocan a las mujeres y niñas en situación de riesgo frente a múltiples formas de violencia. Si bien las mujeres y niñas sufren violencia de género de manera desproporcionada, los hombres y los niños también pueden ser blanco de ella. En ocasiones se emplea este término para describir la violencia dirigida contra las poblaciones LGBTQI+, al referirse a la violencia relacionada con las normas de masculinidad/feminidad o a las normas de género.</p>
                        </div>
                        <br/>
                        <br/>
                        <h1 id="Datos">Conoce datos y cifras sobre la <b>violencia de género</b>.</h1>
                        <ul>
                            <li>La violencia contra la mujer -especialmente la ejercida por su pareja y la violencia sexual- constituye un grave problema de salud pública y una violación de los derechos humanos de las mujeres.</li>
                            <br/>
                            <li>Las estimaciones mundiales publicadas por la OMS indican que alrededor de una de cada tres (30%) mujeres en el mundo han sufrido violencia física y/o sexual de pareja o violencia sexual por terceros en algún momento de su vida.</li>
                            <br/>
                            <li>La mayor parte de las veces el agresor es la pareja. En todo el mundo, casi un tercio (27%) de las mujeres de 15 a 49 años que han estado en una relación informan haber sufrido algún tipo de violencia física y /o sexual por su pareja.</li>
                            <br/>
                            <li>La violencia puede afectar negativamente la salud física, mental, sexual y reproductiva de las mujeres y, en algunos entornos, puede aumentar el riesgo de contraer el VIH.</li>
                            <br/>
                            <li>La violencia contra la mujer puede prevenirse. El sector sanitario tiene una importante función que desempeñar para proporcionar atención integral de salud a las mujeres que sufren violencia, y como punto de entrada para derivarlas a otros servicios de apoyo que puedan necesitar.</li>
                        </ul>
                        <br/>
                        <br/>
                        <h1 id="ComoIdentifi">¿Cómo identificar la <b>violencia de género</b>?</h1>
                        <p>En general, se consideran violencia de género los actos de cualquier tipo que sean violentos o agresivos en una situación de desigualdad y que se producen cuando existe una relación de dominación del hombre sobre la mujer. Las consecuencias de la violencia de genero pueden ser muy graves: físicas, sexuales, psicológicas etc.</p>
                        <br/>
                        <br/>
                        <h1 id="Violentometro">Descubre <b>tu nivel de violencia</b> en pareja.</h1>
                        <p>Accede a una <a onClick={routeChange}><u> breve encuesta </u></a> y obtén recomendaciones de valor para ti.</p>
                        <br/>
                        <br/>
                        <h1 id="QueSigue">¿Qué puedes hacer desde tus posibilidades contra la <b>violencia de género</b>?</h1>
                        <p>Primero si conoces a una mujer que es víctima de violencia de género o que veas un acto de violencia de género en la calle o en algún otro lugar es fundamental que le hagas sentir en confianza y que estás a su lado, sin presionar. Si presencias un acto es importante <b>actuar o denunciar</b> para proteger a la mujer.</p>
                    </div>
                </div>
                <div className="Espacio"></div>
                <div className="Border"></div>
            </div>
        </div>
    );
}

export default Home;