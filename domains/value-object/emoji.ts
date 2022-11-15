import { ValueObject } from '~/domains/base/value-object'

export class Emoji extends ValueObject<string> {
  static create(value: string): Emoji {
    if (value == null) {
      throw new Error('絵文字が不正です')
    }

    return new Emoji(value)
  }
}
