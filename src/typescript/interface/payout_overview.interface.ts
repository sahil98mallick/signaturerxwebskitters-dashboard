 export interface Medicine {
    number?: number;
    medicine_name?: string;
    price?: string;
    total_price?: string;
    qty?: number;
  }
  
  export interface PharmacyOrder {
    order_id?: string;
    order_date?: string;
    branches?: {
      name?: string;
      address?: string;
    };
    payouts?: string;
    commission?: string;
    medicines?: Medicine[];
  }
  