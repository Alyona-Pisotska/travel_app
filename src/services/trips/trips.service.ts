import { ApiTripsPath, ContentType, HttpMethod, LocalStorageKey } from '../../common/enums/enums';
import { Http } from '../http/http.service';

class Trips {
  private readonly _baseUrl: string;
  private readonly _http: Http;
  private readonly _basePath: string;

  constructor(baseUrl: string, http: Http) {
    this._baseUrl = baseUrl;
    this._http = http;
    this._basePath = ApiTripsPath.ROOT;
  }

  getTrips() {
    return this._http.load(this._getUrl(), {
      method: HttpMethod.GET,
      contentType: ContentType.JSON,
      payload: null,
      token: localStorage.getItem(LocalStorageKey.TOKEN) || '',
    });
  }

  getTrip(id: string) {
    return this._http.load(this._getUrl(`/${id}`), {
      method: HttpMethod.GET,
      contentType: ContentType.JSON,
      payload: null,
      token: localStorage.getItem(LocalStorageKey.TOKEN) || '',
    });
  }

  _getUrl(path = '') {
    return `${this._baseUrl}${this._basePath}${path}`;
  }
}

export { Trips };
