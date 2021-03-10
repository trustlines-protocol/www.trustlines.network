import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { icon } from "leaflet";

import MarkerIcon from "../images/marker.svg";

import Communities from "../content/communities.json";

const CustomMarkerIcon = icon({
  iconUrl: MarkerIcon,
  iconSize: [24, 24],
});

export default function CommunitiesMapSection() {
  if (typeof window === "undefined") {
    return null;
  }

  return (
    <div className="container mx-auto mb-16 md:mb-32 p-4 md:p-0">
      <div className="text-lg md:text-3xl font-semibold">
        <div>Trustlines Communities</div>
        <div>Around the World</div>
      </div>
      <div className="mt-6 md:mt-11 border-4 border-neon-pink rounded-3xl overflow-hidden shadow-card-gray">
        <MapContainer
          center={Communities[1].position}
          zoom={6}
          scrollWheelZoom={false}
          className="z-40"
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {Communities.map((community) => (
            <Marker
              key={community.name}
              position={community.position}
              icon={CustomMarkerIcon}
            >
              <Popup className="custom-leaflet-popup">
                <div className="bg-rich-black-lighter">
                  <div className="text-base text-white font-semibold">
                    {community.name}
                  </div>
                  <div className="text-xs text-white">
                    {community.contactName}
                  </div>
                  <div className="text-xs text-white">
                    {community.contactTitle}
                  </div>
                  <div className="text-xs text-white">
                    {community.contactMail}
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
        <div className="bg-neon-pink p-2 flex flex-col md:flex-row justify-center items-center text-sm md:text-base gap-0 md:gap-1">
          <div>Don&apos;t see a group nearby?</div>
          <div>Add yourself to the map!</div>
          <a className="underline hover:text-white cursor-pointer">
            Click here
          </a>
        </div>
      </div>
    </div>
  );
}
