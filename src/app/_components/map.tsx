"use client";

import { LatLng } from "leaflet";
import { memo } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// leaflet
import "leaflet/dist/leaflet.css";

const position = new LatLng(51.505, -0.09);
const Map = () => {
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/%7Bz%7D/%7Bx%7D/%7By%7D.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default memo(Map);
