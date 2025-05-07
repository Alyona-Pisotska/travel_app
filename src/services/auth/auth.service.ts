import { ApiAuthPath, ContentType, HttpMethod, LocalStorageKey } from '../../common/enums/enums';
import { Http } from '../http/http.service';

class Auth {
  private readonly _baseUrl: string;
  private readonly _http: Http;
  private readonly _basePath: string;

  constructor(baseUrl: string, http: Http) {
    this._baseUrl = baseUrl;
    this._http = http;
    this._basePath = ApiAuthPath.ROOT;
  }

  register(payload: any) {
    return this._http.load(this._getUrl(ApiAuthPath.SIGN_UP), {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload: JSON.stringify(payload),
      token: '',
    });
  }

  login(payload: any) {
    return this._http.load(this._getUrl(ApiAuthPath.SIGN_IN), {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload: JSON.stringify(payload),
      token: '',
    });
  }

  getUser() {
    return this._http.load(this._getUrl(ApiAuthPath.AUTH_USER), {
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

export { Auth };
