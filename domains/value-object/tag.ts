import { ValueObject } from '~/domains/base/value-object'

export class Tag extends ValueObject<string> {
  static create(value: string): Tag {
    if (value == null) {
      throw new Error('タグが不正です')
    }

    return new Tag(value)
  }
}
