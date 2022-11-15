import { Entity } from '~/domains/base/entity'
import {
  BlogContent,
  BlogId,
  BlogTitle,
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
    })
  }
}
