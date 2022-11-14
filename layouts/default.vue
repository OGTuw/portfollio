<template>
  <v-app>
    <v-app-bar app flat border class="px-md-6" width="160" height="60">
      <v-app-bar-title>
        <img src="/images/logo.svg" height="40" alt="logo" />
      </v-app-bar-title>

      <v-spacer />

      <v-btn>ホーム</v-btn>

      <v-btn>会社情報</v-btn>

      <v-btn>採用情報</v-btn>

      <v-btn>お問い合せ</v-btn>
    </v-app-bar>

    <v-main>
      <v-container class="pa-6 pa-md-9">
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup></script>
