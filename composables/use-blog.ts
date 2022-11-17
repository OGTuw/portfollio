import { Ref } from 'vue'
import {
  Blog,
  BlogContent,
  BlogId,
  BlogTitle,
  BlogUuid,
  Day,
  Emoji,
  Status,
  Tag,
} from '~/domains'

type BlogStore = {
  blogs: Blog[]
  uuid: BlogUuid
  blog: Blog
}

export const useBlog = () => {
  const state = useState<BlogStore>('blog_store', () => ({
    blogs: [],
    uuid: BlogUuid.create(''),
    blog: Blog.empty(),
  }))

  return {
    state,
    setUuid: setUuid(state),
    fetchBlogs: fetchBlogs(state),
    fetchBlog: fetchBlog(state),
    resetBlog: resetBlog(state),
  }
}

const setUuid = (state: Ref<BlogStore>) => {
  return (uuid: BlogUuid) => {
    state.value.uuid = uuid
  }
}

const fetchBlogs = (state: Ref<BlogStore>) => {
  return async () => {
    const client = useSupabaseClient()

    const { data }: any = await client
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false })

    if (data == null || data.length <= 0) {
      throw new Error('記事一覧が取得できせん')
    }

    state.value.blogs = data.map((blog: any) => {
      return Blog.create({
        id: BlogId.create(blog.id),
        title: BlogTitle.create(blog.title),
        emoji: Emoji.create(blog.emoji),
        content: BlogContent.create(blog.content),
        tags: blog.tags.map((tag: any) => {
          return Tag.create(tag)
        }),
        status: Status.create(blog.status),
        createdAt: Day.create(blog.created_at),
        uuid: BlogUuid.create(blog.uuid),
      })
    })
  }
}

const fetchBlog = (state: Ref<BlogStore>) => {
  return async () => {
    const client = useSupabaseClient()

    const { data }: any = await client
      .from('blogs')
      .select('*')
      .eq('uuid', state.value.uuid.value)
      .single()

    if (data == null) {
      throw new Error('記事が取得できせん')
    }

    state.value.blog = Blog.create({
      id: BlogId.create(data.id),
      title: BlogTitle.create(data.title),
      emoji: Emoji.create(data.emoji),
      content: BlogContent.create(data.content),
      tags: data.tags.map((tag: any) => {
        return Tag.create(tag)
      }),
      status: Status.create(data.status),
      createdAt: Day.create(data.created_at),
      uuid: BlogUuid.create(data.uuid),
    })
  }
}

const resetBlog = (state: Ref<BlogStore>) => {
  return () => (state.value.blog = Blog.empty())
}
