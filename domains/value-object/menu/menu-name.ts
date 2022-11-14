import { ValueObject } from '~/domains/base/value-object'

export class MenuName extends ValueObject<string> {
  static create(value: string): MenuName {
    if (value == null) {
      throw new Error('メニュー名が不正です')
    }

    return new MenuName(value)
  }
}
