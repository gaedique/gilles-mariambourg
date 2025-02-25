export interface ContactInfo {
  name: string;
  address: {
    street: string;
    postalCode: string;
    city: string;
  };
  phone: string;
  hours: {
    office: {
      days: string;
      time: string;
    };
    emergency: string;
  };
}
