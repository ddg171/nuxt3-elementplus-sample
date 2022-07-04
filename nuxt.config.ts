import { defineNuxtConfig } from 'nuxt'

const lifecycle = process.env.npm_lifecycle_event

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/css/elementPlus.scss'],
  build: {
    transpile: lifecycle === 'build' ? ['element-plus'] : []
  }
  // 勝手に読み込むのでいらない。
  // plugins: ['~/plugins/elementPlus.ts']

})
