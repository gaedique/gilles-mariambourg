export interface ContactDetailsProps {
  contact: {
    address: {
      name: string;
      street: string;
      postalCode: string;
      city: string;
    };
    details: {
      phone: string;
      email?: string;
      doctolib?: string;
    };
    hours: {
      regular: {
        days: string;
        time: string;
      };
      consultation: {
        days: string;
        time: string;
      };
      surgery: {
        days: string;
        time: string;
      };
      emergency: string;
    };
  };
}
