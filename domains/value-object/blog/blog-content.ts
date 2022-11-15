import { ValueObject } from '~/domains/base/value-object'

export class BlogContent extends ValueObject<string> {
  static create(value: string): BlogContent {
    if (value == null) {
      throw new Error('ブログコンテンツが不正です')
    }

    return new BlogContent(value)
  }
}
