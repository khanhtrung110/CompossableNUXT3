<template>
    <h1>About</h1>
    <p>This is about</p>
    <p>Store: {{ useHeader().title }}</p>
</template>

<script setup lang="ts">
  const route = useRoute();
  import { useHeader } from "@/store/auth"
  const useHeaderStore = useHeader();
  useHeader().title = 'Header 2'
  // console.log('useHeader',useHeader().title);
  console.log('useNuxtData(mountains)',useNuxtData('mountains'));
  
//  console.log('about',route.redirectedFrom);
 
useHead({
  title: 'About',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
// useSeoMeta({
//   title: 'My Amazing Site',
//   ogTitle: 'My Amazing Site',
//   description: 'This is my amazing site, let me tell you all about it.',
//   ogDescription: 'This is my amazing site, let me tell you all about it.',
//   ogImage: 'https://example.com/image.png',
//   twitterCard: 'summary_large_image',
// })

</script>

<style>

</style>