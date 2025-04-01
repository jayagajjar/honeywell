export type Incident = {
    id: string;
    name: string;
    datetime: string;
    priority: Priority;
    locationId?: string;      
    locationName?: string;    
    description?: string;     
  };

  export type Priority = 1 | 2 | 3;

  