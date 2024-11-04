export interface Booking {
    id?: number;
    guesId: number;
    dtStartBooking: string;
    dtEndBooking: string;
    dtCheckout?: string;
    dtCheckin?: string;
    hasCar: boolean;
    qtAccValue?: number;
  }