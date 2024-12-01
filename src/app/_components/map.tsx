"use client";

import { LatLng } from "leaflet";
import { memo } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
// leaflet
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";

const position = new LatLng(40.5298525618877, -3.6407526172635354);
const Map = () => {
  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={false}
      className="h-[70vh]"
      attributionControl={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}></Marker>
    </MapContainer>
  );
};

export default memo(Map);
