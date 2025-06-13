<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'Edumapper'
const description = 'L\'orientation post-bac, facilement'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://www.edumapper.com/__og-image__/image/og.png',
  twitterImage: 'https://www.edumapper.com/__og-image__/image/og.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div class="bg-beige">
    <UApp>
      <UHeader>
        <template #left>
          <NuxtLink to="/">
            <LogoEdumapper class="w-auto h-6 shrink-0" />
          </NuxtLink>
        </template>
      </UHeader>

      <UMain>
        <NuxtPage />
      </UMain>
    </UApp>
  </div>
</template>
