import { Entity } from '~/domains/base/entity'
import { MenuName } from '~/domains/value-object/menu/menu-name'
import { Path } from '~/domains/value-object/path'
import { UniqueEntityId } from '~/domains/value-object/unique-entity-id'
import { MenuId } from '~/domains/value-object/menu/menu-id'

interface IMenuProps {
  id: MenuId
  name: MenuName
  path: Path
}

export class Menu extends Entity<IMenuProps> {
  get id(): MenuId {
    return this.props.id
  }

  get name(): MenuName {
    return this.props.name
  }

  get path(): Path {
    return this.props.path
  }

  private constructor(props: IMenuProps, id?: UniqueEntityId) {
    super(props, id)
  }

  public static create(props: IMenuProps, id?: UniqueEntityId): Menu {
    return new Menu(props, id)
  }

  public static empty(): Menu {
    return this.create({
      id: MenuId.create(0),
      name: MenuName.create(''),
      path: Path.create(''),
    })
  }
}
