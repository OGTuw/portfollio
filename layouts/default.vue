<template>
  <v-app>
    <v-app-bar app flat border class="px-md-6" width="160" height="60">
      <v-app-bar-title>
        <img src="/images/logo.svg" height="40" alt="logo" />
      </v-app-bar-title>

      <v-spacer />

      <template v-for="menu in topMenus" :key="menu.id.value">
        <v-btn @click="handleClick(menu)">{{ menu.name.value }}</v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <v-container class="pa-6 pa-md-9">
        <slot />
      </v-container>
    </v-main>

    <v-footer class="bg-grey-lighten-5">
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="menu in state.menus"
          :key="menu.id.value"
          variant="text"
          class="mx-2"
          rounded="xl"
          @click="handleClick(menu)"
        >
          {{ menu.name.value }}
        </v-btn>

        <v-col class="text-center mt-4" cols="12">
          ©︎ {{ new Date().getFullYear() }} - t10o
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
  import { Menu } from '~/domains'

  /*
   * Composables
   */
  const { state, fetchMenu } = useMenu()
  const route = useRoute()
  const router = useRouter()

  /*
   * Meta
   */
  useMeta({
    title: `Dora-corp - ${route.meta.title}`,
  })

  /*
   * Created
   */
  try {
    fetchMenu()
  } catch (e: any) {
    alert(e.message)
  }

  /*
   * Computed
   */
  const topMenus = computed(() => {
    return state.value.menus.filter((menu) => {
      return menu.name.value !== 'Privacy'
    })
  })

  /*
   * Methods
   */
  const handleClick = (menu: Menu) => {
    router.push(`${menu.path.value}`)
  }
</script>
