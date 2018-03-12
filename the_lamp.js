class Lamp {
  constructor(color, state) {
    this._color = color;
    this._state = state;
  }

  set color(newColor) {
    this._color = newColor;
  }

  set state(newState) {
    this._state = newState;
  }

  get color () {
    return this._color;
  }

  get state () {
    return this._state;
  }
}

lamp = new Lamp("white", "on");
console.log(lamp.color);