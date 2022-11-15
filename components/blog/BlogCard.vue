<template>
  <v-card :class="CN">
    <div class="pa-6 d-flex flex-no-wrap justify-flex-start">
      <v-avatar class="ma-1 text-h2" size="100" rounded="0"> ☹️ </v-avatar>

      <div :class="`${CN}__container`">
        <div>
          <v-card-subtitle>2022-04-01</v-card-subtitle>

          <v-card-title class="text-h5">
            Macで自分のIPアドレスをターミナルで確認する方法
          </v-card-title>
        </div>

        <v-chip :class="[`${CN}__chip`, `mx-4`]">terminal</v-chip>
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
  const CN = 'BlogCard'
</script>

<style lang="scss">
  .BlogCard {
    &__container {
      position: relative;
    }

    &__chip {
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
</style>
