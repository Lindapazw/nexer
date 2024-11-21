"use client";

import { LatLng } from "leaflet";
import { memo } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// leaflet
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";

const position = new LatLng(40.530760116329986, -3.6298969179997465);
const Map = () => {
  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={false}
      className="h-full"
      attributionControl={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default memo(Map);
