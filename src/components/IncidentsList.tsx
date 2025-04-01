import React from "react";
import "./IncidentList.css";
import { formatDate } from "../utils/utils";
import { priorityIconMap } from "../utils/constants";
import { Incident } from "../type/Incident";

type Props = {
  data: Incident[];
};

const IncidentList = ({ data }: Props) => {
  return (
    <div className="incident-list-container">
      <h2 className="incident-list-title">Incidents</h2>
      {data.map((incident) => (
        <div key={incident.id} className="incident-item">
          <div>
            <img
              src={`/assets/img/${priorityIconMap[incident.priority]}`}
              alt={`priority-${incident.priority}`}
              className="incident-icon"
            />
          </div>
          <div className="incident-meta">
            <div className="incident-date">{formatDate(incident.datetime)}</div>
            <div className="incident-location">{incident.locationName}</div>
            <div className="incident-name">{incident.name}</div>
            {incident.description && (
              <div className="incident-description">{incident.description}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default IncidentList;
