import L from 'leaflet';
import { StationClass } from '@/classes/StationClass';

export class MarkerClass {
  icon: L.Icon;
  latlng: number[];
  id: string;
  empty_slots: number;
  free_bikes: number;
  name: string;
  addres: string;

  constructor(station: StationClass) {
    this.icon = MarkerClass.getIcon();
    this.latlng = [station.latitude, station.longitude];
    this.id = station.id;
    this.empty_slots = station.empty_slots;
    this.free_bikes = station.free_bikes;
    this.name = station.name;
    this.addres = station.extra.address;
  }

  private static getIcon(): L.Icon {
    return L.icon({
      iconUrl: require('@/assets/pin.svg'),
      iconSize: [30, 30],
      iconAnchor: [15, 30]
    });
  }
}
