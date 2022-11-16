import { ValueObject } from '~/domains/base/value-object'

// yyyy/MM/ddの形式の日付を扱う
export class Day extends ValueObject<string> {
  static create(value: string): Day {
    if (value == null) {
      throw new Error('日付が不正です')
    }

    const date = new Date(value)

    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()

    return new Day(`${year}/${month}/${day}`)
  }
}
