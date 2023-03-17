// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '~/assets/css/main.css'
    ],
    modules: [
        '@nuxtjs/tailwindcss',
    ],
    head: {
        title: 'Nama Website Anda',
        titleTemplate: '%s | Nama Website Anda'
    }
})
