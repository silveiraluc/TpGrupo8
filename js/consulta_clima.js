window.addEventListener('load',()=> {
    let lon
    let lat

    let temperaturaValor = document.getElementById('temperatura-valor')
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion')

    let ubicacion = document.getElementById('ubicacion')
    let iconoAnimado = document.getElementById('icono-animado')

    let vientoVelocidad = document.getElementById('viento_velocidad')

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(posicion =>{
            //console.log(posicion.coords.latitude)
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude

            //ubicación actual
            //const url = 'https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=da9de4537257149ab2132d9ae20a598e'
        
            //ubicación por ciudad
            const url = 'https://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires,ar&lang=es&units=metric&appid=da9de4537257149ab2132d9ae20a598e'
            
            //console.log(url)

            fetch(url)
            .then( response => { return response.json() })
            .then( data => {
                let temp = Math.round(data.main.temp)
                temperaturaValor.textContent = temp + '°C'

                let desc = data.weather[0].description
                temperaturaDescripcion.textContent = desc.toUpperCase()

                ubicacion.textContent= data.name

                let wind = data.wind.speed
                vientoVelocidad.textContent = wind + 'm/s'

                //para iconos estaticos
                /*console.log(data.weather[0].icon)
                let iconCode = data.weather[0].icon
                const urlIcon = 'https://openweathermap.org/img/wn/${iconCode}.png'
                console.log(urlIcon)*/

                //para iconos animados
                console.log(data.weather[0].main)
                switch (data.weather[0].main) {
                    case 'Clear':
                        iconoAnimado.src ='../animated/day.svg'
                        console.log('LIMPIO')
                    break;
                    case 'Clouds':
                        iconoAnimado.src ='../animated/cloudy-day-1.svg'
                        console.log('NUBES')
                    break;
                    case 'Rain':
                        iconoAnimado.src ='../animated/rainy-7.svg'
                        console.log('LLUVIA')
                    break; 
                    case 'Thunderstorm':
                      iconoAnimado.src='../animated/thunder.svg'
                      console.log('TORMENTA');
                      break;
                    case 'Drizzle':
                      iconoAnimado.src='../animated/rainy-2.svg'
                      console.log('LLOVIZNA');
                      break; 
                      case 'Snow':
                      iconoAnimado.src='../animated/snowy-6.svg'
                        console.log('NIEVE');
                      break;       
                      case 'Atmosphere':
                      iconoAnimado.src='../animated/weather.svg'
                        console.log('ATMOSFERA');
                      break;
                      default:
                      iconoAnimado.src='../animated/cloudy-day-1.svg'
                        console.log('por defecto');  
                    
                        console.log(data)
                }

            })
            .catch(error => {
                console.log( error)
            })
        })
    }
})