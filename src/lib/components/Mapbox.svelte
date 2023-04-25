<script>
    import { onMount } from 'svelte';
    import mapboxgl from 'mapbox-gl';
    import Bouton from '$lib/components/Button.svelte';
	import Boutonbis from '$lib/components/Buttonbis.svelte';
	import { object_without_properties } from 'svelte/internal';
  import {markerContent} from '$lib/utils.js'
  import {markerTitle} from '$lib/utils.js'
    
    let map;
  
    onMount(() => {
      mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VpbGxhdW1lLW0yaSIsImEiOiJjbGZsOGdrZHAwMnBuNDJucWJqb3RmMXpyIn0.6UQxoZ9ibyzKrKCfYFS3Sg';
      map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/guillaume-m2i/clfl8nlbr000n01t6urpacrth',
        center: [2.223490651951153,48.84191757742829,],
        zoom:5,
        dragRotate: false,
        scrollZoom: false,
        touchZoomRotate: false,
      });
  
      // Ajoutez vos couches de carte ici
      map.on('load', () => {

        map.loadImage('./emplacement(1).png', (error, image) => {
      if (error) throw error;
      map.addImage('feuille', image);

        map.addLayer({
          'id': 'cities',
          'type': 'symbol',
          'source': {
            'type': 'geojson',
            'data': {
              'type': 'FeatureCollection',
              'features': [
                {
                  'type': 'Feature',
                  'geometry': {
                    'type': 'Point',
                    'coordinates': [-0.6347201065951684,43.41735500669519, ]
                  },
                  'properties': {
                    'name': 'Lacq'
                  }
                },
                {
                  'type': 'Feature',
                  'geometry': {
                    'type': 'Point',
                    'coordinates': [1.3137284017810025, 44.4772396037173]
                  },
                  'properties': {
                    'name': 'Parnac'
                  }
                },

                {
                  'type': 'Feature',
                  'geometry': {
                    'type': 'Point',
                    'coordinates': [2.223490651951153,48.84191757742829,]
                  },
                  'properties': {
                    'name': 'Saint-Cloud'
                  }
                },

                {
                  'type': 'Feature',
                  'geometry': {
                    'type': 'Point',
                    'coordinates': [ 4.735391280567392, 43.42213868530402]
                  },
                  'properties': {
                    'name': 'Salin',
                    'description':`la ville de merde en fait t'as cru que t'étais qui là ? (ouai...ouai je parle à toi petite bouse des champ qui lit ce texte)`
                  }
                },
                // Ajouter d'autres villes ou points clés ici
              ]
            }
          },
          'layout': {
          'icon-image': 'feuille',
          'icon-size': {
            'property': 'size',
            'stops': [
              [0, 0.5],
              [10, 0.8],
              [20, 1.2]
            ]
          },
          'text-field': '{name}',
          'text-font': ['Open Sans Bold'],
          'text-size': 12,
          'text-offset': [0, 0.5],
          
          'icon-offset': [0, -15],
          'icon-allow-overlap': true, // Autoriser le chevauchement des marqueurs
          'text-anchor': 'top'
        },
        'paint': {
          'text-color': '#fff',
          'icon-opacity': {
            'property': 'opacity',
            'type': 'exponential',
            'stops': [
              [0, 0.2],
              [1, 1]
            ]
            
          }
        }
        });

        // Ajouter l'événement de clic sur les marqueurs
  map.on('click', 'cities', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    // Utiliser la méthode flyTo() pour déplacer la carte vers le point cliqué
    map.flyTo({
      center: coordinates,
    });
  });

  // Changer le curseur de la souris lorsqu'il survole les marqueurs
  map.on('mouseenter', 'cities', () => {
    map.getCanvas().style.cursor = 'pointer';
  });

  // Add event listener for the click event on markers
  map.on('click', 'cities', (e) => {
      const cityName = e.features[0].properties.description;
      markerContent.set(`You clicked on ${cityName}.`);
      // ...
    });
  map.on('click', 'cities', (e) => {
      const cityName = e.features[0].properties.name;
      markerTitle.set(`${cityName}.`);
      // ...
    });

  // Remettre le curseur par défaut lorsque la souris quitte les marqueurs
  map.on('mouseleave', 'cities', () => {
    map.getCanvas().style.cursor = '';
  });
});


      });
      });
  </script>
  
  <style>
    #map {
      height: 80vh;
      width: 100%;
    }
  </style>
  <div class="relative flex items-center h-screen">
  <div id="map" class="absolute"></div>

  <div class=" gap-4 w-screen md:w-2/4 flex flex-col absolute px-4 md:px-32" style="color:white;">
		<div class="text-2xl font-semibold">
			{ $markerTitle }
		</div>
		<div>{ $markerContent }</div>
		
		<Bouton content={'découvrir'}/>
	</div>
  </div>