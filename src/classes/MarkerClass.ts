import L from 'leaflet';
import { StationClass } from '@/classes/StationClass';

export class MarkerClass {
  icon: L.Icon;
  latlng: number[];
  id: string;

  constructor(station: StationClass) {
    this.icon = MarkerClass.getIcon();
    this.latlng = [station.latitude, station.longitude];
    this.id = station.id;
  }

  private static getIcon(): L.Icon {
    return L.icon({
      iconUrl: require('@/assets/pin.svg'),
      iconSize: [30, 30],
      iconAnchor: [15, 30]
    });
  }
}
