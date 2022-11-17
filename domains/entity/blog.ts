import { Entity } from '~/domains/base/entity'
import {
  BlogContent,
  BlogId,
  BlogTitle,
  BlogUuid,
  Day,
  Emoji,
  Status,
  Tag,
  UniqueEntityId,
} from '~/domains'

interface IBlogProps {
  id: BlogId
  title: BlogTitle
  emoji: Emoji
  content: BlogContent
  tags: Tag[]
  status: Status
  createdAt: Day
  uuid: BlogUuid
}

export class Blog extends Entity<IBlogProps> {
  get id(): BlogId {
    return this.props.id
  }

  get title(): BlogTitle {
    return this.props.title
  }

  get emoji(): Emoji {
    return this.props.emoji
  }

  get content(): BlogContent {
    return this.props.content
  }

  get tags(): Tag[] {
    return this.props.tags
  }

  get status(): Status {
    return this.props.status
  }

  get createdAt(): Day {
    return this.props.createdAt
  }

  get uuid(): BlogUuid {
    return this.props.uuid
  }

  get isEmpty(): boolean {
    return this.props.id.value === 0
  }

  get isNotEmpty(): boolean {
    return !this.isEmpty
  }

  private constructor(props: IBlogProps, id?: UniqueEntityId) {
    super(props, id)
  }

  public static create(props: IBlogProps, id?: UniqueEntityId): Blog {
    return new Blog(props, id)
  }

  public static empty(): Blog {
    return this.create({
      id: BlogId.create(0),
      title: BlogTitle.create(''),
      emoji: Emoji.create(''),
      content: BlogContent.create(''),
      tags: [Tag.create('')],
      status: Status.create(''),
      createdAt: Day.create(''),
      uuid: BlogUuid.create(''),
    })
  }
}
