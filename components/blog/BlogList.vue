<template>
  <div>
    <BlogCard
      v-for="blog in state.blogs"
      :key="blog.id.value"
      class="mb-4"
      :title="blog.title"
      :emoji="blog.emoji"
      :tags="blog.tags"
      :created-at="blog.createdAt"
      @click="handleClick(blog.uuid)"
    />
  </div>
</template>

<script setup lang="ts">
  import { BlogUuid } from '~/domains'

  /*
   * Composables
   */
  const { state, fetchBlogs } = useBlog()
  const router = useRouter()

  /*
   * Created
   */
  try {
    fetchBlogs()
  } catch (e: any) {
    alert(e.message)
  }

  /*
   * Methods
   */
  const handleClick = (uuid: BlogUuid) => {
    router.push(`/blog/${uuid.value}`)
  }
</script>
