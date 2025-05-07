import { toastr } from 'react-redux-toastr';

class Notification {
  private _instance;

  constructor() {
    this._instance = toastr;
  }

  error(title: string, message: string) {
    this._instance.error(title, message);
  }

  success(title: string, message: string) {
    this._instance.success(title, message);
  }

  info(title: string, message: string) {
    this._instance.info(title, message);
  }
}

export { Notification };
