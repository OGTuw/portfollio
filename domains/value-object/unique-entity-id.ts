import { ValueObject } from '~/domains/base/value-object'
import { NUMBER_EMPTY_VALUE } from '~/constants'

export class UniqueEntityId extends ValueObject<number> {
  static create(value: number): UniqueEntityId {
    if (value === NUMBER_EMPTY_VALUE) {
      throw new Error('IDが不正です')
    }

    return new UniqueEntityId(value)
  }
}
