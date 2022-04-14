class Pokemon {
  constructor(name) {
    this._name = name;
  }
  sayHello() {
    console.log(`Mi pokemon ${this._name} te saluda!!`);
  }
  sayMessage(mensaje) {
    console.log(`Mi pokemon ${this._name} dice: ${mensaje}`);
  }
}

module.exports = Pokemon;
