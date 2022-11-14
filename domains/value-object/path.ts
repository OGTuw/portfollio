import { ValueObject } from '~/domains/base/value-object'

export class Path extends ValueObject<string> {
  static create(value: string): Path {
    if (value == null) {
      throw new Error('パスが不正です')
    }

    return new Path(value)
  }
}
