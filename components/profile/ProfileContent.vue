<template>
  <div class="mb-10 d-flex flex-no-wrap justify-center">
    <v-img width="250" height="250" alt="Avatar" src="images/icon.svg"></v-img>
  </div>

  <div class="mb-10 d-flex flex-no-wrap justify-center">
    <h1>Tatsuya 0gata</h1>
  </div>

  <div class="mb-4 d-flex flex-no-wrap justify-center">
    <h3>Skills</h3>
  </div>

  <div class="mb-10 d-flex flex-no-wrap justify-center">
    <p v-for="language in languages" :key="language" class="mr-3">
      {{ language }}
    </p>
  </div>
</template>

<script setup lang="ts">
  const languages = ['Nuxt', 'Vue', 'TypeScript', 'JavaScript', 'SCSS', 'Java']
</script>
