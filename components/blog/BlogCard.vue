<template>
  <v-card>
    <div class="pa-6 d-flex flex-no-wrap justify-flex-start">
      <v-avatar class="ma-1 text-h2" size="100" rounded="0">{{
        props.emoji.value
      }}</v-avatar>

      <div>
        <div>
          <v-card-title class="text-h5 mb-4">{{
            props.title.value
          }}</v-card-title>

          <v-card-subtitle class="mb-3">{{
            props.createdAt.value
          }}</v-card-subtitle>
        </div>

        <v-chip v-for="tag in props.tags" :key="tag.value" class="ml-4">{{
          tag.value
        }}</v-chip>
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
  import { BlogTitle, Day, Emoji, Tag } from '~/domains'

  /*
   * Types
   */
  interface Props {
    title: BlogTitle
    emoji: Emoji
    tags: Tag[]
    createdAt: Day
  }

  /*
   * Props
   */
  const props = defineProps<Props>()
</script>
