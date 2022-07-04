import { defineNuxtConfig } from 'nuxt'

const lifecycle = process.env.npm_lifecycle_event

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/css/elementPlus.scss'],
  build: {
    transpile: lifecycle === 'build' ? ['element-plus'] : []
  },
  plugins: ['~/plugins/elementPlus.ts']

})
