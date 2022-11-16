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
}

export const useBlog = () => {
  const state = useState<BlogStore>('blog_store', () => ({
    blogs: [],
  }))

  return {
    state,
    fetchBlogs: () => fetchBlogs(state),
  }
}

const fetchBlogs = async (state: Ref<BlogStore>) => {
  const client = useSupabaseClient()

  const { data } = await client
    .from('blogs')
    .select('*')
    .order('created_at', { ascending: false })

  if (data == null || data.length <= 0) {
    throw new Error('記事が取得できせん')
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
