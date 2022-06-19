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
    this.latlng = [station.latitude, station.longitude];
    this.id = station.id;
    this.empty_slots = station.empty_slots;
    this.free_bikes = station.free_bikes;
    this.name = station.name;
    this.addres = station.extra.address;
    this.icon = this.getIcon(false);
  }

  private getIcon(selected: boolean): L.Icon {
    return L.icon({
      iconUrl: this.getIconLocation(),
      iconSize: selected ? [44, 44] : [30, 30],
      iconAnchor:selected ?  [22, 44]: [15,30]
    });
  }

  private isEmpty() {
    return this.empty_slots === 0;
  }

  private isFull() {
    return this.free_bikes === 0;
  }

  private getIconLocation() {
    if (this.isEmpty()) {
      return require('@/assets/pin_empty.svg');
    } else if (this.isFull()) {
      return require('@/assets/pin_full.svg');
    } else {
      return require('@/assets/pin_regular.svg');
    }
  }

  select() {
    this.icon = this.getIcon(true);
  }

  deselect() {
    this.icon = this.getIcon(false);
  }
}
