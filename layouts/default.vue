<template>
  <v-app>
    <v-app-bar app flat border class="px-md-6" width="160" height="60">
      <v-app-bar-title>
        <img src="/images/logo.svg" height="40" alt="logo" />
      </v-app-bar-title>

      <v-spacer />

      <template v-if="!smAndDown">
        <template v-for="menu in topMenus" :key="menu.id.value">
          <v-btn @click="handleMenuClick(menu)">{{ menu.name.value }}</v-btn>
        </template>
      </template>

      <v-app-bar-nav-icon
        v-else
        @click="handleHamburgerClick"
      ></v-app-bar-nav-icon>
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
          @click="handleMenuClick(menu)"
        >
          {{ menu.name.value }}
        </v-btn>

        <v-col class="text-center mt-4" cols="12">
          ©︎ {{ new Date().getFullYear() }} - t10o
        </v-col>
      </v-row>
    </v-footer>

    <v-navigation-drawer
      v-model="visibleDrawer"
      location="right"
      fixed
      temporary
    >
      <v-list nav dense>
        <v-list-item
          v-for="menu in topMenus"
          :key="menu.id.value"
          @click="handleMenuClick(menu)"
        >
          <v-list-item-title>{{ menu.name.value }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script lang="ts"></script>

<script setup lang="ts">
  import { useDisplay } from 'vuetify'
  import { Menu } from '~/domains'

  /*
   * Composables
   */
  const { state, fetchMenu } = useMenu()
  const route = useRoute()
  const router = useRouter()
  const { smAndDown } = useDisplay()

  /*
   * Meta
   */
  useHead({
    title: `Dora-corp - ${route.meta.title}`,
  })

  /*
   * Data
   */
  const visibleDrawer = ref(false)

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
  const handleMenuClick = (menu: Menu) => {
    router.push(`${menu.path.value}`)
  }

  const handleHamburgerClick = () => {
    visibleDrawer.value = !visibleDrawer.value
  }
</script>
