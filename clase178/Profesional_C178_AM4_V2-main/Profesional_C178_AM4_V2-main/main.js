//Coordenadas iniciales para que se abra el mapa
let latitude=22.7868542, longitude=88.3643296;

// Inicializando Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

//Variable para crear un nuevo objeto de la clase Map
var mapis = new mapboxgl.Map({
    //Lugar del html donde se mostrara el mapa(en el div map)
	container: 'map',
    //Estilo predeterminado de Mapbox
	style: 'mapbox://styles/mapbox/streets-v11',
    //Punto de ubicación inicial del mapa
	center: [longitude, latitude],
    //nivel de zoom inicialdel mapa. Hay 22 niveles de zoom disponibles enla API Mapbox, comenzando desde 0(ver toda la tierra)
	zoom: 16
});   
//Función predefinida en la clase Map para agregar controles al mapa(ubicación actual, monito caminando, ect)
mapis.addControl(
    //Control para la ubicación actual del usuario
	new mapboxgl.GeolocateControl({
        //Habilitar alta precisión
		positionOptions: {
			enableHighAccuracy: true
		},
        //Rastrear la ubicación del usuario
		trackUserLocation: true
	})
);
//Control para encontrar la dirección entre un punto y otro
mapis.addControl(
	//Nuevo objeto (complemento) para obtener instrucciones
	new MapboxDirections({
		accessToken: mapboxgl.accessToken
	}),
	//Establece la posición del control en el mapa
	'top-left'
);

   
