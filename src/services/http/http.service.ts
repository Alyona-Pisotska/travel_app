import { HttpHeader, HttpMethod } from '../../common/enums/enums';

class Http {
  load(url: string, options: { method: string, payload: string | null, contentType: string, token: string } = {
    method: HttpMethod.GET,
    payload: null,
    contentType: '',
    token: '',
  }) {
    const { method, payload, contentType, token } = options;
    const headers = this._getHeaders(contentType, token);

    return fetch(url, {
      method,
      headers,
      body: payload,
    })
      .then(this._checkStatus)
      .then(this._parseJSON)
      .catch(this._throwError);
  }

  _getHeaders(contentType: string, token: string) {
    const headers = new Headers();

    if (contentType) {
      headers.append(HttpHeader.CONTENT_TYPE, contentType);
    }
    if (token) {
      headers.append(HttpHeader.AUTH, `Bearer ${token}`);
    }

    return headers;
  }

  _checkStatus(response: any) {
    const { ok: isOk, status, statusText } = response;

    if (!isOk) {
      throw new Error(`${status}: ${statusText}`);
    }

    return response;
  }

  _parseJSON(response: any) {
    return response.json();
  }

  _throwError(err: any) {
    throw err;
  }
}

export { Http };
