/* eslint no-underscore-dangle: ["error", {"allow": ["_name", "_code"] }] */
export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(sym) {
    this._code = sym;
  }

  get name() {
    return this._name;
  }

  set name(Name) {
    this._name = Name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
