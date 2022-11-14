import { UniqueEntityId } from '~/domains/value-object/unique-entity-id'

const isEntity = (v: any): v is Entity<any> => {
  return v instanceof Entity
}

export abstract class Entity<T> {
  protected readonly _id: UniqueEntityId
  protected props: T

  private get unixTimestamp() {
    const date = new Date()
    const time = date.getTime()

    return Math.floor(time / 1000)
  }

  protected constructor(props: T, id?: UniqueEntityId) {
    this._id = id || UniqueEntityId.create(this.unixTimestamp)
    this.props = props
  }

  public equals(object?: Entity<T>): boolean {
    if (object == null) {
      return false
    }

    if (this === object) {
      return true
    }

    if (!isEntity(object)) {
      return false
    }

    return this._id.equals(object._id)
  }
}
