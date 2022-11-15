import { ValueObject } from '~/domains/base/value-object'
import { NUMBER_EMPTY_VALUE } from '~/constants'

export class BlogId extends ValueObject<number> {
  static create(value: number): BlogId {
    if (value === NUMBER_EMPTY_VALUE) {
      throw new Error('ブログIDが不正です')
    }

    return new BlogId(value)
  }
}
