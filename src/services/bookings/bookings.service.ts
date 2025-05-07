import { ApiBookingsPath, ContentType, HttpMethod, LocalStorageKey } from '../../common/enums/enums';
import { Http } from '../http/http.service';

class Bookings {
  private readonly _baseUrl: string;
  private readonly _http: Http;
  private readonly _basePath: string;

  constructor(baseUrl: string, http: Http) {
    this._baseUrl = baseUrl;
    this._http = http;
    this._basePath = ApiBookingsPath.ROOT;
  }

  create(payload: any) {
    return this._http.load(this._getUrl(), {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload: JSON.stringify(payload),
      token: localStorage.getItem(LocalStorageKey.TOKEN) || '',
    });
  }

  getBookings() {
    return this._http.load(this._getUrl(), {
      method: HttpMethod.GET,
      contentType: ContentType.JSON,
      payload: null,
      token: localStorage.getItem(LocalStorageKey.TOKEN) || '',
    });
  }

  removeBooking(id: string) {
    return this._http.load(this._getUrl(`/${id}`), {
      method: HttpMethod.DELETE,
      contentType: ContentType.JSON,
      payload: null,
      token: localStorage.getItem(LocalStorageKey.TOKEN) || '',
    });
  }

  _getUrl(path = '') {
    return `${this._baseUrl}${this._basePath}${path}`;
  }
}

export { Bookings };
