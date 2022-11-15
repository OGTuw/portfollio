import { ValueObject } from '~/domains/base/value-object'

export class Status extends ValueObject<string> {
  static create(value: string): Status {
    if (value == null) {
      throw new Error('ステータスが不正です')
    }

    return new Status(value)
  }
}
