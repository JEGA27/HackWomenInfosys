import * as React from 'react';
import '../CSS/charts.css'
import { ResponsiveBar } from '@nivo/bar'
import { ResponsivePie } from '@nivo/pie'
import { ResponsiveFunnel } from '@nivo/funnel'
import {useState, useEffect} from 'react'
import {db} from '../../firebase'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import { useLocation } from 'react-router-dom';




export default function Charts(){

    const {state} = useLocation();
    const {userPoints, userLevel} = state;
    console.log(userPoints, userLevel);
   
    const [surveys, setSurvey] = useState([]);

    useEffect(() => {
        const q = query(collection(db, 'violentometer'), orderBy('points'))
        onSnapshot(q, (querySnapshot) => {
          setSurvey(querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          })))
        })
      },[]);

      var yellow = 0;
      var orange = 0;
      var red = 0;
      var purple = 0;
      var blue = 0;

      var uyellow = 0;
      var uorange = 0;
      var ured = 0;
      var upurple = 0;
      var ublue = 0;

      var result = '';

      if(userLevel == "Yellow")
      {
          uyellow = 4;
          result = "Tal vez existan algunos problemas que de manera común presentan entre las parejas, pero se resuelven sin violencia. De cualquier manera no bajes la guarda y detecta cualquier señal de violencia.";
      }
      else if(userLevel == "Orange")
      {
          uyellow = 4;
          uorange = 4;
          result = "Debes reconocer que te encuentras ya en las primeras fases del ciclo. Puedes informarte sobre lo que significa el Ciclo de la violencia y de qué modos puedes salir; siempre debes evitar aislarte de personas de tu confianza, y debes comprender que sufrir violencia no es un tema para avergonzarse, sino que al contrario, es una situación en la que se debe solicitar ayuda.";
      }
      else if(userLevel == "Red")
      {
          uyellow = 4;
          uorange = 4;
          ured = 4;
          result = "Estás enfrentando un nivel más avanzado y visible de violencia. En este punto tu autoestima se verá afectada, te sentirás confundida y creerás que el maltrato es parte de una relación de afecto. Es complejo salir del Ciclo porque muchas veces pensamos que la persona agresora reacciona de esa manera por nuestra culpa o porque tuvo un pasado difícil, lo que nos hace crearnos la falsa expectativa de que nuestro amor y atención incondicionales pueden hacer que la persona agresora cambie. En este punto debemos prestar atención a todas las formas en las que puede manifestarse la violencia, como son la indiferencia afectiva, el control sobre nuestros bienes y sobre nuestra libertad personal. Podemos creer que renunciar a nuestros derechos es una muestra de amor a la otra persona, cuando realmente es una aceptación sumisa de la capacidad de dominación de la otra persona sobre nosotras. Utiliza este número '800 10 84 053' en teléfonos privados, públicos o celulares, si se encuentra en cualquier parte de la República Mexicana.";
      }
      else if(userLevel == "Purple")
      {
          uyellow = 4;
          uorange = 4;
          ured = 4;
          upurple = 4;
          result = "Estás enfrentando un nivel más avanzado y visible de violencia. En este punto tu autoestima se verá afectada, te sentirás confundida y creerás que el maltrato es parte de una relación de afecto. Es complejo salir del Ciclo porque muchas veces pensamos que la persona agresora reacciona de esa manera por nuestra culpa o porque tuvo un pasado difícil, lo que nos hace crearnos la falsa expectativa de que nuestro amor y atención incondicionales pueden hacer que la persona agresora cambie. En este punto debemos prestar atención a todas las formas en las que puede manifestarse la violencia, como son la indiferencia afectiva, el control sobre nuestros bienes y sobre nuestra libertad personal. Podemos creer que renunciar a nuestros derechos es una muestra de amor a la otra persona, cuando realmente es una aceptación sumisa de la capacidad de dominación de la otra persona sobre nosotras. Utiliza este número '800 10 84 053' en teléfonos privados, públicos o celulares, si se encuentra en cualquier parte de la República Mexicana.";
      }
      else if(userLevel == "Blue")
      {
          uyellow = 4;
          uorange = 4;
          ured = 4;
          upurple = 4;
          ublue = 4;
          result = "Si en tus respuestas te das cuenta que los niveles de violencia avanzan hasta la peor zona, debes tener presente que tu vida corre un inminente peligro. Nunca es muy tarde para pedir ayuda. Utiliza este número '800 10 84 053' en teléfonos privados, públicos o celulares, si se encuentra en cualquier parte de la República Mexicana.";
      }
      else{
        uyellow = 0;
        uorange = 0;
        ured = 0;
        upurple = 0;
        ublue = 0;
        result = "Afortunadamente no sufres de violencia por parte de tu pareja, sin embargo recuerda estar atenta ante cualquier indicio de violencia hacia ti o hacia alguien más.";
      }


      surveys.map((survey) => {
          if(survey.data.level == "Yellow"){
              yellow += 1;
          }
          else if(survey.data.level == "Orange"){
              orange += 1;
          }
          else if(survey.data.level == "Red"){
            red += 1;
        }
        else if(survey.data.level == "Purple"){
            purple += 1;
        }
        else{
            blue += 1;
        }
      });
      

    const generalBarData = [
        {
            "victim": "General",
            "Bajo": 4,
            "yellowColor": "hsl(44, 98%, 77%)",
            "Medio": 4,
            "orangeColor": "hsl(14, 89%, 61%)",
            "Alto": 4,
            "redColor": "hsl(353, 64%, 54%)",
            "Muy Alto": 4,
            "purpleColor": "hsl(335, 99%, 31%)",
            "Severo": 4,
            "blueColor": "hsl(210, 68%, 40%)"
          },
          {
            "victim": "Tu",
            "Bajo": uyellow,
            "yellowColor": "hsl(44, 98%, 77%)",
            "Medio": uorange,
            "orangeColor": "hsl(14, 89%, 61%)",
            "Alto": ured,
            "redColor": "hsl(353, 64%, 54%)",
            "Muy Alto": upurple,
            "purpleColor": "hsl(335, 99%, 31%)",
            "Severo": ublue,
            "blueColor": "hsl(210, 68%, 40%)"
          }

    ]

    const donutData = [
        {
          "id": "Bajo",
          "label": "Bajo",
          "value": yellow,
          "color": "hsl(44, 98%, 77%)"
        },
        {
          "id": "Medio",
          "label": "Medio",
          "value": orange,
          "color": "hsl(14, 89%, 61%)"
        },
        {
          "id": "Alto",
          "label": "Alto",
          "value": red,
          "color": "hsl(353, 64%, 54%)"
        },
        {
          "id": "Muy Alto",
          "label": "Muy Alto",
          "value": purple,
          "color": "hsl(353, 64%, 54%)"
        },
        {
          "id": "Severo",
          "label": "Severo",
          "value": blue,
          "color": "hsl(210, 68%, 40%)"
        }
      ]

      const funnelData = [
        {
          "id": "EDOMEX",
          "value": 51,
          "label": "Estado de Mexicont"
        },
        {
          "id": "Nuevo Leon",
          "value": 34,
          "label": "Nuevo Leon"
        },
        {
          "id": "Veracruz",
          "value": 31,
          "label": "Veracruz"
        },
        {
          "id": "CDMX",
          "value": 22,
          "label": "CDMX"
        },
        {
          "id": "Morelos",
          "value": 15,
          "label": "Morelos"
        }
      ]

    return(
        <div className='wrapper'>
            <div className="Border"></div>
            <div className="Menu">
                    <h1 className="MenuTitle">Métricas</h1>
            </div>
            <div className='container'>
                <div className='info'>
                    <h1>Tus resultados</h1>
                    <p>{result}</p>
                </div>
                <div className='charts-div'>
                <ResponsiveBar
                    data={generalBarData}
                    keys={[
                        'Bajo',
                        'Medio',
                        'Alto',
                        'Muy Alto',
                        'Severo'
                    ]}
                    indexBy="victim"
                    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                    padding={0.3}
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors={["#fee08b", "#f46c43", "#d53e4f", "#9e0142", "#2166ac"]}
                    defs={[
                        {
                            id: 'dots',
                            type: 'patternDots',
                            background: 'inherit',
                            color: '#38bcb2',
                            size: 4,
                            padding: 1,
                            stagger: true
                        },
                        {
                            id: 'lines',
                            type: 'patternLines',
                            background: 'inherit',
                            color: '#eed312',
                            rotation: -45,
                            lineWidth: 6,
                            spacing: 10
                        }
                    ]}
                    borderColor={{
                        from: 'color',
                        modifiers: [
                            [
                                'darker',
                                1.6
                            ]
                        ]
                    }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Víctimas',
                        legendPosition: 'middle',
                        legendOffset: 32
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Violencia',
                        legendPosition: 'middle',
                        legendOffset: -40
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{
                        from: 'color',
                        modifiers: [
                            [
                                'darker',
                                0
                            ]
                        ]
                    }}
                    legends={[
                        {
                            dataFrom: 'keys',
                            anchor: 'bottom-right',
                            direction: 'column',
                            justify: false,
                            translateX: 120,
                            translateY: 0,
                            itemsSpacing: 2,
                            itemWidth: 100,
                            itemHeight: 20,
                            itemDirection: 'left-to-right',
                            itemOpacity: 0.85,
                            symbolSize: 20,
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                    
                />
                </div>
            </div>

            <div className='container'>
                <div className='charts-div'>
                <ResponsivePie
                    data={donutData}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    activeOuterRadiusOffset={8}
                    borderWidth={1}
                    colors = {["#fee08b", "#f46c43", "#d53e4f", "#9e0142", "#2166ac"]}
                    borderColor={{
                        from: 'color',
                        modifiers: [
                            [
                                'darker',
                                0.2
                            ]
                        ]
                    }}
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsTextColor="#333333"
                    arcLinkLabelsThickness={2}
                    arcLinkLabelsColor={{ from: 'color' }}
                    arcLabelsSkipAngle={10}
                    arcLabelsTextColor={{
                        from: 'color',
                        modifiers: [
                            [
                                'darker',
                                2
                            ]
                        ]
                    }}
                    defs={[
                        {
                            id: 'dots',
                            type: 'patternDots',
                            background: 'inherit',
                            color: 'rgba(255, 255, 255, 0.3)',
                            size: 4,
                            padding: 1,
                            stagger: true
                        },
                        {
                            id: 'lines',
                            type: 'patternLines',
                            background: 'inherit',
                            color: 'rgba(255, 255, 255, 0.3)',
                            rotation: -45,
                            lineWidth: 6,
                            spacing: 10
                        }
                    ]}
                    legends={[
                        {
                            anchor: 'bottom',
                            direction: 'row',
                            justify: false,
                            translateX: 0,
                            translateY: 56,
                            itemsSpacing: 0,
                            itemWidth: 100,
                            itemHeight: 18,
                            itemTextColor: '#999',
                            itemDirection: 'left-to-right',
                            itemOpacity: 1,
                            symbolSize: 18,
                            symbolShape: 'circle',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: '#000'
                                    }
                                }
                            ]
                        }
                    ]}
                />
                </div>
                <div className='info'>
                    <h1>Graficas globales</h1>
                    <p>
                        Conoce los resultados de otras personas que han realizado el test.
                    </p>
                    <p>
                        Y recuerda, si presencias un acto de violencia de género es importante actuar, 
                        denunciar o acompañar a la víctima.
                    </p>
                </div>
            </div>

            <div className='container'>
                <div className='info'>
                    <h1>Violencia en Mexico</h1>
                    <p>
                        Mexico es uno de los países con mayor violencia de género. 
                        
                    </p>
                    <p>
                        Conoce los estados con mayor tasa de feminicidios en el periodo Enero - Abril 2022.
                    </p>
                </div>
                <div className='charts-div'>
                    <ResponsiveFunnel
                        data={funnelData}
                        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                        valueFormat=">-.4s"
                        colors={{ scheme: 'spectral' }}
                        borderWidth={20}
                        labelColor={{
                            from: 'color',
                            modifiers: [
                                [
                                    'darker',
                                    3
                                ]
                            ]
                        }}
                        beforeSeparatorLength={100}
                        beforeSeparatorOffset={20}
                        afterSeparatorLength={100}
                        afterSeparatorOffset={20}
                        currentPartSizeExtension={10}
                        currentBorderWidth={40}
                        motionConfig="wobbly"
                    />
                </div>
            </div>
            <div className="Espacio"></div>
            <div className="Border"></div>
        </div>
    );
}