import { render, screen, waitFor } from "@testing-library/react";
import useIncidents from "./useIncidents";

jest.mock("../api/fake-api", () => ({
  __esModule: true,
  default: {
    getLocations: jest.fn(() =>
      Promise.resolve([
        { id: "airport/t1/lobby", name: "T1 Lobby" },
        { id: "airport/t2", name: "T2" },
      ])
    ),
    getIncidentsByLocationId: jest.fn((locationId: string) => {
      const incidents: Record<string, any[]> = {
        "airport/t1/lobby": [
          {
            id: 1,
            name: "Liquid Spill",
            priority: 3,
            datetime: "2018-01-21T22:54:12.000Z",
            locationId: "airport/t1/lobby",
          },
        ],
        "airport/t2": [
          {
            id: 2,
            name: "Fire",
            priority: 1,
            datetime: "2018-01-22T11:25:18.000Z",
            locationId: "airport/t2",
          },
        ],
      };
      return Promise.resolve(incidents[locationId] || []);
    }),
  },
}));

// Wrapper to test the hook via rendering
function IncidentHookTester() {
  const { incidents } = useIncidents();

  return (
    <div>
      {incidents.map((incident) => (
        <div key={incident.id} data-testid="incident-name">
          {incident.name}
        </div>
      ))}
    </div>
  );
}

describe("useIncidents (via component render)", () => {
  it("fetches and renders sorted incident names", async () => {
    render(<IncidentHookTester />);

    await waitFor(() => {
      const names = screen
        .getAllByTestId("incident-name")
        .map((el) => el.textContent);
      expect(names).toEqual(["Fire", "Liquid Spill"]); // priority 1 before 3
    });
  });
});
