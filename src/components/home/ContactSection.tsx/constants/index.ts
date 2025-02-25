import { ContactInfo } from "../types";

export const POLYCLINIC_CONTACT: ContactInfo = {
  name: "POLYCLINIQUE DU SIDOBRE",
  address: {
    street: "Chemin de Saint Hippolyte",
    postalCode: "81100",
    city: "CASTRES",
  },
  phone: "05 63 71 88 04",
  hours: {
    office: {
      days: "Lundi au vendredi",
      time: "8h00 – 19h00",
    },
    emergency: "Service d'urgence disponible 24h/24 et 7j/7",
  },
};
