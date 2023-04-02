<script>
    import { onMount } from 'svelte';
    import mapboxgl from 'mapbox-gl';
    
    let map;
  
    onMount(() => {
      mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VpbGxhdW1lLW0yaSIsImEiOiJjbGZsOGdrZHAwMnBuNDJucWJqb3RmMXpyIn0.6UQxoZ9ibyzKrKCfYFS3Sg';
      map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [48.84191757742829, 2.223490651951153],
        zoom: 10
      });
  
      // Ajoutez vos couches de carte ici
      map.on('load', () => {
        map.addLayer({
          'id': 'cities',
          'type': 'circle',
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
                // Ajouter d'autres villes ou points clés ici
              ]
            }
          },
          'paint': {
            'circle-radius': {
              'property': 'size',
              'stops': [
                [0, 5],
                [10, 10],
                [20, 15]
              ]
            },
            'circle-color': {
              'property': 'color',
              'type': 'categorical',
              'stops': [
                ['ville', 'blue'],
                ['point clé', 'blue']
              ]
            },
            
            
          }
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
  
  <div id="map"></div>
  