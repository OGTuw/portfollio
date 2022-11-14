import { Ref } from 'vue'
import { Menu, MenuId, MenuName, Path } from '~/domains'

type MenuStore = {
  menus: Menu[]
}

export const useMenu = () => {
  const state = useState<MenuStore>('menu_store', () => ({
    menus: [],
  }))

  return {
    state,
    fetchMenu: () => fetchMenu(state),
  }
}

const fetchMenu = async (state: Ref<MenuStore>) => {
  const client = useSupabaseClient()

  const { data } = await client.from('menus').select('*').order('id')

  if (data == null || data.length <= 0) {
    throw new Error('メニューが取得できせん')
  }

  state.value.menus = data.map((menu: any) => {
    return Menu.create({
      id: MenuId.create(menu.id),
      name: MenuName.create(menu.name),
      path: Path.create(menu.path),
    })
  })
}
