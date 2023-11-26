import React, { useEffect } from 'react';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks';
import { Marker, Popup } from 'react-leaflet';
import './searcher-map.css';





const SearcherMap = ( {transportData ,position}) => {
console.log(position)

    return (
        <div className=''>
        <MapContainer className='search-map' center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>

  
      </div>
    )
}

export default SearcherMap;
