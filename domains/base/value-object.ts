export abstract class ValueObject<T> {
  protected readonly _value: T

  protected constructor(_value: T) {
    this._value = Object.freeze(_value)
  }

  get value(): T {
    return this._value
  }

  equals(vo?: ValueObject<T>): boolean {
    if (vo == null) {
      return false
    }
    return this._value === vo._value
  }
}
