import { useEffect, useState } from "react";
import api from "../api/fake-api";
import { Incident } from "../type/Incident";

type Location = {
  id: string;
  name: string;
};

type IncidentWithLocation = Incident & {
  locationName: string;
};

const { getLocations, getIncidentsByLocationId } = api;

export default function useIncidents(): IncidentWithLocation[] {
  const [incidents, setIncidents] = useState<IncidentWithLocation[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const locations: Location[] = await getLocations();
      const allIncidents: IncidentWithLocation[] = [];

      for (const location of locations) {
        const incidentsByLocation: Incident[] = await getIncidentsByLocationId(
          location.id
        );
        allIncidents.push(
          ...incidentsByLocation.map((i) => ({
            ...i,
            locationName: location.name,
          }))
        );
      }

      const uniqueIncidents = new Map();
      allIncidents.forEach((i) => uniqueIncidents.set(i.id, i));

      const sortedIncidents = Array.from(uniqueIncidents.values()).sort(
        (a, b) => {
          if (a.priority !== b.priority) return a.priority - b.priority;
          return (
            new Date(b.datetime).getTime() - new Date(a.datetime).getTime()
          );
        }
      );

      setIncidents(sortedIncidents);
    };

    fetchData();
  }, []);

  return incidents;
}
