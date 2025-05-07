import { Http } from './http/http.service';
import { Auth } from './auth/auth.service';
import { BaseUrl } from '../common/enums/app/app';
import { Trips } from './trips/trips.service';
import { Bookings } from './bookings/bookings.service';
import { Notification } from './notification/notification.service';

const http = new Http();
const notification = new Notification();
const auth = new Auth(BaseUrl.SERVER, http);
const trips = new Trips(BaseUrl.SERVER, http);
const bookings = new Bookings(BaseUrl.SERVER, http);

export { http, auth, trips, bookings, notification };
