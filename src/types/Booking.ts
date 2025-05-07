export interface Booking {
  id: string,
  tripId: string,
  userId: string,
  guests: number,
  date: string,
  trip: {
    title: string,
    duration: number,
    price: number,
  },
  totalPrice: number,
  createdAt: string,
}
