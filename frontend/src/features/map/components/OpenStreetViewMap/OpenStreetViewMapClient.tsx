"use client";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { FC, useEffect, useRef, useState } from "react";
import { Minus, Plus, LocateFixed } from "lucide-react";
import "leaflet/dist/leaflet.css";
import { OpenStreetViewMapProps } from "./OpenStreetViewMap";
import styles from './OpenStreetViewMapClient.module.scss';

const defaultPosition: [number, number] = [51.5369, 7.2009]; // Hierbei handelt es sich um die Postion von des Herners Ortskern
const defaultZoom: number = 15;

const OpenStreetViewMapClient: FC<OpenStreetViewMapProps> = ({
  selectedEventId,
  markers,
  onSelectEventId: setEvent
}) => {
 


  const iconConfig = {
    iconSize: [48, 48] as [number, number],
    iconAnchor: [24, 48] as [number, number],
    popupAnchor: [0, -48] as [number, number],
    shadowSize: [60, 60] as [number, number],
    shadowAnchor: [30, 60] as [number, number],
  };


  const customIcon = new L.Icon({
    iconUrl: "/icons/marker-green.svg",
    iconRetinaUrl: "/icons/marker-green.svg",
    ...iconConfig
  });

  const selectedIcon = new L.Icon({
    iconUrl: "/icons/marker-red.svg",
    iconRetinaUrl: "/icons/marker-red.svg",
    ...iconConfig
  });

  return (
    <MapContainer
      preferCanvas={true}
      center={defaultPosition}
      zoom={defaultZoom}
      scrollWheelZoom={true}
      className={styles.mapContainer}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {markers.map((event) => {
        const { latitude, longitude } = event.address.coordinates;
        const selectedMarker = selectedEventId && event.id === selectedEventId ? selectedIcon : customIcon;
        return (
          <Marker
            key={event.id}
            icon={selectedMarker}
            position={[latitude, longitude]}
            eventHandlers={{
              click: () => {
                setEvent(event.id);
              },
            }}
          />
        );
      })}
      <ControllButtons />
    </MapContainer>
  );
};

export default OpenStreetViewMapClient;

const ControllButtons: FC = () => {

  return (
    <div className={styles.controllButtons}>
      <PositionButton />
      <CustomZoomControl />
    </div>
  );
}
const CustomZoomControl: FC = () => {
  const map = useMap();

  const onZoomIn = () => {
    map.zoomIn();
  };

  const onZoomOut = () => {
    map.zoomOut();
  };

  return (
    <div className={styles.customZoomControl}>
      <button
        type="button"
        className={styles.zoomButton}
        aria-label="Vergrößern"
        onClick={onZoomIn}
      >
        <Plus />
      </button>
      <button
        type="button"
        className={styles.zoomButton}
        aria-label="Verkleinern"
        onClick={onZoomOut}
      >
        <Minus />
      </button>
    </div>
  );
};

const PositionButton: FC = () => {
  const map = useMap();

  const handleOnClick = () => {
    map.setView(defaultPosition, defaultZoom)
  };

  return (
    <div className={styles.customPostionsControl}>
      <button
        type="button"
        className={styles.zoomButton}
        aria-label="Vergrößern"
        onClick={handleOnClick}
      >
        <LocateFixed />
      </button>
    </div>
  );
};
