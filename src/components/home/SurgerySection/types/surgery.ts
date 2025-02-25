export type SurgeryPoint = {
  top: string;
  left: string;
};

export type Surgery = {
  id: string;
  title: string;
  description: string;
  points: SurgeryPoint[];
};
