export default class Pokemon {
  constructor(name) {
    this._name = name;
    this.contador = 0;
  }
  sayHello() {
    console.log(`Mi pokemon ${this._name} te saluda!!`);
  }
}
