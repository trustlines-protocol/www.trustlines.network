import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { icon } from "leaflet";
import { useMapEvents } from "react-leaflet";
import MarkerIcon from "../images/marker.svg";

import Communities from "../content/communities/groups.json";

function MapEvents() {
  const map = useMapEvents({
    click: () => {
      if (map.scrollWheelZoom.enabled()) {
        map.scrollWheelZoom.disable();
      } else {
        map.scrollWheelZoom.enable();
      }
    },
  });
  return null;
}

export default function Map({
  borderColor,
  shadowColor,
  subTextHTML,
  textColor = "rich-black",
}) {
  if (typeof window === "undefined") {
    return null;
  }
  const CustomMarkerIcon = icon({
    iconUrl: MarkerIcon,
    iconSize: [24, 24],
  });

  return (
    <div
      className={`
      mt-6 md:mt-11 border-4 rounded-3xl overflow-hidden
      border-${borderColor} shadow-card-${shadowColor}
      `}
    >
      <MapContainer
        center={[25.072835488010323, -9.120591748774364]}
        zoom={2}
        scrollWheelZoom={false}
        className="z-40"
      >
        <MapEvents />
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
      <div
        className={`
        bg-${borderColor} text-${textColor} text-center
        p-2 flex flex-col md:flex-row justify-center items-center text-sm md:text-base gap-0 md:gap-1
        `}
        dangerouslySetInnerHTML={{ __html: subTextHTML }}
      />
    </div>
  );
}
