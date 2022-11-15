import { ValueObject } from '~/domains/base/value-object'

export class BlogTitle extends ValueObject<string> {
  static create(value: string): BlogTitle {
    if (value == null) {
      throw new Error('ブログタイトルが不正です')
    }

    return new BlogTitle(value)
  }
}
