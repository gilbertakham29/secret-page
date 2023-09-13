// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
],
app:{
  head:{
    script:[
      "https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"
    ]
  }
  }
}
)
