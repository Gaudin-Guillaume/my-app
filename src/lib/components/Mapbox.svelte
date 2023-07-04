<script>
    import { onMount } from 'svelte';
    import mapboxgl from 'mapbox-gl';
    import Bouton from '$lib/components/Buttonw.svelte';
  import {markerContent} from '$lib/utils.js'
  import {markerTitle} from '$lib/utils.js'
  import {markerdate} from '$lib/utils.js' 
  import {markercollabo} from '$lib/utils.js' 
    
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
                    'name': 'Lacq',
                    'description':`Site de R&D et fabrication`,
                    'sbui':'depuis : 2013',
                    'collabo':'Collaborateurs : 33',
                  }
                },
                {
                  'type': 'Feature',
                  'geometry': {
                    'type': 'Point',
                    'coordinates': [1.3137284017810025, 44.4772396037173]
                  },
                  'properties': {
                    'name': 'Parnac',
                    'description':`Site de conditionement`,
                    'sbui':'depuis : 2015',
                    'collabo':'Collaborateurs : 32',
                  }
                },

                {
                  'type': 'Feature',
                  'geometry': {
                    'type': 'Point',
                    'coordinates': [2.223490651951153,48.84191757742829,]
                  },
                  'properties': {
                    'name': 'Saint-Cloud',
                    'description':`Siège Social`,
                    'sbui':'depuis : 2012',
                    'collabo':'Collaborateurs : 30',
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
                    'description':`Site de production`,
                    'sbui':'depuis : 2013',
                    'collabo':'Collaborateurs : 90',
                  }
                },
                {
                  'type': 'Feature',
                  'geometry': {
                    'type': 'Point',
                    'coordinates': [  23.890249839302232,-30.4982097437332]
                  },
                  'properties': {
                    'name': 'Afrique du sud',
                    'description':`Culture :agrume, pomme , poire, prune, pêche`,
                    'collabo':'depuis : 2016',
                    'sbui':'Partenaire : Bancella, Bayer Produits: Cydia Press, Tuta Press, Cydia Spray, Grapholita Spray, FCM',

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
      markerContent.set(`${cityName}.`);
      // ...
    });
  map.on('click', 'cities', (e) => {
      const cityName = e.features[0].properties.name;
      markerTitle.set(`${cityName}.`);
      // ...
    });
    map.on('click', 'cities', (e) => {
      const cityName = e.features[0].properties.sbui;
      markerdate.set(`${cityName}.`);
      // ...
    });
    map.on('click', 'cities', (e) => {
      const cityName = e.features[0].properties.collabo;
      markercollabo.set(`${cityName}.`);
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
  
  
  <div class="relative  flex items-center justify-center h-screen">
  <div id="map" class="absolute"></div>

  <section class="flex size justify-start" style="max-width:1100px;padding-left:80px;padding-right:80px; padding-top:80px; width:100vw; height:100%;">
  <div class=" gap-4 w-fit  flex flex-col absolute" style="color:white; max-width:400px;">
		<div class="text-3xl font-regular w-fit">
			{ $markerTitle }
		</div>
		<div >{ $markerContent }</div>
		<div >{ $markerdate}</div>
		<div >{ $markercollabo}</div>
		
		<Bouton content={'découvrir notre activité mondial'}/>
	</div>
</section>
  </div>

  <style>
    #map {
      height: 80vh;
      width: 100%;
      align-self:start;
      border:solid 1px #A4A4A4;
    }
    .size{
      padding-left:16px;
      padding-right:16px;

    }

   


    
      
    
  </style>
 