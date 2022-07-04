import { defineNuxtPlugin } from 'nuxt/app'
import ElementPlus from 'element-plus/dist/index.full'

declare module '#app' {
  interface NuxtApp {
    $hasElementUI : boolean
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $hasElementUI : boolean
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  if (nuxtApp.$hasElementUI) { return }
  nuxtApp.vueApp.use(ElementPlus)
  nuxtApp.$hasElementUI = true
})
