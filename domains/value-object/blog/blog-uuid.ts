import { ValueObject } from '~/domains/base/value-object'

export class BlogUuid extends ValueObject<string> {
  get isEmpty(): boolean {
    return this._value === ''
  }

  static create(value: string): BlogUuid {
    if (value == null) {
      throw new Error('ブログUUIDが不正です')
    }

    return new BlogUuid(value)
  }
}
