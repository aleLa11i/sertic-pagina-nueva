import React, { useRef, useEffect } from 'react';
import '../../css/map.css';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxlbGExMWkiLCJhIjoiY2t3Nmg4dzdqNzNndjJ2bXRxN29rcGY4byJ9.NEWRnqXP-98PS7S6lxcyRQ';

const initialPoint = {
    lng: -60.63973586545013, 
    lat: -32.9427014048633,
    zoom: 15
  };

export const ReturnMap = () => {
    const mapRef = useRef();
    const map = useRef();

    useEffect( () => {
        const newMap = new mapboxgl.Map({
            container             : mapRef.current,
            center                : [ -60.63973586545013, -32.9427014048633 ],
            style                 : 'mapbox://styles/mapbox/streets-v11',
            zoom                  : 15,
            cooperativeGestures   : true,
            doubleClickZoom       : true,
            dragPan               : true,
        })

        map.current = newMap;
    },[ initialPoint ]);

    useEffect(() => {
        const marker = new mapboxgl.Marker();
        
          marker
            .setLngLat([ -60.63973586545013, -32.9427014048633 ])
            .addTo( map.current )
    }, [ initialPoint, map ]);

    return (
        <div
          ref={ mapRef }
          className='map'
        />
    )
}
