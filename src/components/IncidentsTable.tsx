import "./IncidentTable.css";
import { formatDate } from "../utils/utils";
import { priorityIconMap } from "../utils/constants";
import { Incident } from "../type/Incident";

type Props = {
  data: Incident[];
};
const IncidentTable = ({ data }: Props) => {
  return (
    <table className="incident-table">
      <thead>
        <tr>
          <th colSpan={5} className="app-title">
            Incidents
          </th>
        </tr>
        <tr>
          <th></th>
          <th>Incident</th>
          <th>Date/Time</th>
          <th>Priority</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {data.map((i) => (
          <tr key={i.id}>
            <td>
              <img
                src={`/assets/img/${priorityIconMap[i.priority]}`}
                alt={`priority-${i.priority}`}
              />
            </td>
            <td>{i.name}</td>
            <td>{formatDate(i.datetime)}</td>
            <td>{["", "High", "Medium", "Low"][i.priority]}</td>
            <td>{i.locationName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default IncidentTable;
