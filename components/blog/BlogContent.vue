<template>
  <div v-if="state.blog.isNotEmpty">
    <div class="pb-6 d-flex flex-no-wrap justify-center">
      <v-avatar class="ma-1 text-h1" size="100" rounded="0">{{
        state.blog.emoji.value
      }}</v-avatar>
    </div>

    <h1 class="pb-6">{{ state.blog.title.value }}</h1>

    <p class="pb-4">{{ state.blog.createdAt.value }}</p>

    <div class="pb-6">
      <v-chip v-for="tag in state.blog.tags" :key="tag.value" class="mr-2">{{
        tag.value
      }}</v-chip>
    </div>

    <pre>{{ state.blog.content.value }}</pre>
  </div>

  <div v-else>Loading...</div>
</template>

<script setup lang="ts">
  import { BlogUuid } from '~/domains'

  /*
   * Composables
   */
  const { state, setUuid, fetchBlog } = useBlog()
  const { params } = useRoute()

  /*
   * Created
   */
  setUuid(BlogUuid.create(params.uuid as string))

  try {
    fetchBlog()
  } catch (e: any) {
    alert(e.message)
  }
</script>
