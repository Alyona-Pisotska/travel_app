export const TripDetailsRoute = {
  root: '/trip',
  $id: '/:tripId',
};

export const Routes = {
  SignUp: { path: '/sign-up' },
  SignIn: { path: '/sign-in' },
  HomePage: { path: '/' },
  TripDetails: { path: `${TripDetailsRoute.root}${TripDetailsRoute.$id}` },
  Booking: { path: '/bookings' },
};
