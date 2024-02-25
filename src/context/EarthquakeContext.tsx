import React, { createContext, useState, useEffect } from "react";
// types
import { Earthquake } from "../models/types";
// axios
import axios from "axios";

const EarthquakeContext = createContext<{
  earthquakes: Earthquake[];
  isLoading: boolean;
} | null>(null);

interface EarthquakeProviderProps {
  children: React.ReactNode;
}

const EarthquakeProvider: React.FC<EarthquakeProviderProps> = ({
  children,
}) => {
  const [earthquakes, setEarthquakes] = useState<Earthquake[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-01-01&endtime=2020-01-02"
      );
      const data = response.data.features;
      setEarthquakes(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <EarthquakeContext.Provider value={{ earthquakes, isLoading }}>
      {children}
    </EarthquakeContext.Provider>
  );
};

export { EarthquakeContext, EarthquakeProvider };
