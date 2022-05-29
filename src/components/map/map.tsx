import React from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import styles from './map.module.css';

interface IMapProps {
  lat: number | null | undefined;
  lon: number | null | undefined;
}

const ChangeMapView: React.FC<IMapProps> = ({ lat, lon }) => {
  const map = useMap();
  if (!lat || !lon) return <></>;
  map.setView([lat, lon], map.getZoom());
  return <></>;
};

const Map: React.FC<IMapProps> = ({ lat, lon }) => {
  if (!lat || !lon) return <></>;
  return (
    <div>
      {lat && lon ? (
        <MapContainer
          center={[lat, lon]}
          zoom={100}
          className={styles.container}
        >
          <TileLayer url={process.env.REACT_APP_MAP_API!} />
          <Marker position={[lat, lon]}>
            <Popup>Hey ! I live here</Popup>
          </Marker>
          <ChangeMapView lat={lat} lon={lon} />
        </MapContainer>
      ) : null}
    </div>
  );
};

export default Map;
