
import dynamic from 'next/dynamic';
import { SelectEventIdProps } from '../../types/event.types';

/**
 * Wrapper component for dynamically loading the client-side OpenStreetView map implementation.
 *
 * This component uses Next.js dynamic imports to load the actual map component (`OpenStreetViewMapClient`)
 * only on the client side (SSR disabled). While loading, it displays a placeholder message.
 *
 * @param props - Configuration options for the map.
 * @param props.center - Optional initial center of the map as a tuple [latitude, longitude].
 * @param props.zoom - Optional initial zoom level of the map.
 * @param props.markers - Optional array of marker objects, each with a position ([latitude, longitude]) and a popup string.
 *
 * @returns The dynamically loaded map component with the provided configuration.
 *
 * @example
 * ```tsx
 * <OpenStreetViewMapClient />
 * ```
 *
 * @remarks
 * - This component should be used when you want to render a map that relies on browser APIs and should not be server-side rendered.
 * - The loading UI can be customized by modifying the `loading` property in the dynamic import.
 *
 * @instruction
 * To use this component, simply import and render it in your React component, passing any desired props for map configuration.
 */

export interface OpenStreetViewMapProps extends SelectEventIdProps {
  markers: Array<any>;
}


const OpenStreetViewMapClient = dynamic<OpenStreetViewMapProps>(
  () => import('./OpenStreetViewMapClient'),
  {
    ssr: false,
    loading: () => <PlaceholerMessage />
  }
);

// OpenStreetViewMap is a wrapper component that dynamically loads the client-side map implementation.
// It accepts optional center, zoom, and markers props to configure the map.
export default function OpenStreetViewMap(props: OpenStreetViewMapProps) {
  return <OpenStreetViewMapClient {...props} />;
}




const PlaceholerMessage: React.FC = () => {
  return (
    <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'whitesmoke', color: 'GrayText' }}>
      <p>Karte wird geladen...</p>
    </div>
  );
}