export interface ReservationRequestDTO {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  reservationDate: string | Date;
  timeslot: TimeSlot;
}

export interface TimeSlot {
  TS1: string;
  TS2: string;
  TS3: string;
}
