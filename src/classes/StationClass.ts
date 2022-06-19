export class StationClass {
  empty_slots: number;
  extra: { address: string; status: string; uid: number };
  free_bikes: number;
  id: string;
  latitude: number;
  longitude: number;
  name: string;
  timestamp: string;

  constructor(station?: StationClass) {
    this.empty_slots = station?.empty_slots || 0;
    this.extra = station?.extra || {
      address: '',
      status: '',
      uid: -1
    };
    this.free_bikes = station?.free_bikes || 0;
    this.id = station?.id || '';
    this.latitude = station?.latitude || 0;
    this.longitude = station?.longitude || 0;
    this.name = station?.name || '';
    this.timestamp = station?.timestamp || '';
  }
}
