export interface Earthquake {
  type: string;
  properties: {
    mag: number;
    place: string;
    time: number;
    updated: number;
    url: string;
    detail: string;
    status: string;
    tsunami: number;
    sig: number;
    net: string;
    code: string;
    magType: string;
    title: string;
  };
  geometry: {
    type: string;
    coordinates: number[];
  };
  id: string;
}
