import { ValueObject } from '~/domains/base/value-object'

export class BlogUuid extends ValueObject<string> {
  static create(value: string): BlogUuid {
    if (value == null) {
      throw new Error('ブログUUIDが不正です')
    }

    return new BlogUuid(value)
  }
}
