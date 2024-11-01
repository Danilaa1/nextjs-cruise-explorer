export interface CruiseData {
  id: number;
  name: string;
  nights: number;
  sailDate: string;
  portNames: string[];
  startPort: string;
  endPort: string;
  priceInCents: number;
  shipImage: string;
  cruiseLineName: string;
  iconOverlay: string;
  iconBackgroundColor: string;
}

export interface AdventureData {
  id: number;
  name: string;
  image: string;
}

export const fetchCruiseData = async (): Promise<CruiseData[]> => {
  const response = await fetch("https://jjzl6.wiremockapi.cloud/cruises");
  if (!response.ok) {
    throw new Error("Failed to fetch cruise data");
  }
  return await response.json();
};

export const fetchAdventureData = async (): Promise<AdventureData[]> => {
  const response = await fetch("https://jjzl6.wiremockapi.cloud/adventures");
  if (!response.ok) {
    throw new Error("Failed to fetch adventure data");
  }
  return await response.json();
};
