// import {useEffect, useState} from 'react';

// export function Card(){
//     //const movieKey='08404afeb39610d9ec0903ebe4fefb9b';
//     //const APILink='https://api.themoviedb.org/3/discover/movie?api_key='+ movieKey;
//     const climaKey='875fd8b4e50898ee36257b424b2676f8#';
//     const APILink='https://api.openweathermap.org/data/2.5/weather?q=barranquilla&appid='+ climaKey;
//     const [climaCiudad, setClimaCiudad]=useState([]);

//     useEffect(()=>{
//         fetch(APILink).then(resp=>resp.json())
//         .then(dataClima=> setClimaCiudad(dataClima))  
//     },[])

//     return(
//         <div>
//             <h2>{climaCiudad[0].name}</h2>
//             {/* <p>Temp.Mín: {climaCiudad.main.temp_min}ºF</p>
//             <p>Temp.Máx: {climaCiudad.main.temp_max}ºF</p>
//             <p>Humedad: {climaCiudad.main.humidity}ºF</p> */}
//         </div>
//     )

// }