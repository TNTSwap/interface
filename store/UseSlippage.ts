import { setLocalStorageItem } from '@/utils/Storage';
import { defineStore } from 'pinia'

export const UseSlippage = defineStore({
  id: 'Slippage',
  state: () => ({
    state: 'button',
    Type: 'button',
    theme: "dark"
  }),
  actions: {
    changeInputType(status: string) {
      this.Type = status
    },
    changeTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
      
      setLocalStorageItem('theme', this.theme)
    }
  },
})
