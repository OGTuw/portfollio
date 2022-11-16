<template>
  <div>
    <BlogCard
      v-for="blog in state.blogs"
      :key="blog.id.value"
      :title="blog.title"
      :emoji="blog.emoji"
      :tags="blog.tags"
      :created-at="blog.createdAt"
    />
  </div>
</template>

<script setup lang="ts">
  /*
   * Composables
   */
  const { state, fetchBlogs } = useBlog()

  /*
   * Created
   */
  try {
    fetchBlogs()
  } catch (e: any) {
    alert(e.message)
  }
</script>
