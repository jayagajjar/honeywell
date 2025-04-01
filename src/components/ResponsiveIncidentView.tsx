import { useState, useEffect } from "react";
import IncidentList from "./IncidentsList";
import IncidentTable from "./IncidentsTable";
import { Incident } from "../type/Incident";

type Props = {
  data: Incident[];
};

export default function ResponsiveIncidentView({ data }: Props) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? (
    <IncidentList data={data} />
  ) : (
    <IncidentTable data={data} />
  );
}
