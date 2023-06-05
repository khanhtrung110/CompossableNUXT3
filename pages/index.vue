<template>
    <h2>{{ appConfig.title }}</h2>
    <What :header="computedHeader" :number="number" />
    <p class="des" ref="des">Description</p>
    <p>Test Store: </p>
    <button @click="clickButton" style="background-color: cornflowerblue; padding: 5px;">Click Pagination</button>
</template>

<script lang="ts" setup>
import { useHeader } from "@/store/auth"
const useHeaderStore = useHeader();
const appConfig = useAppConfig();
const runtimeConfig = useRuntimeConfig();
const { $useNotify } = useNuxtApp();

//useAppConfig
appConfig.title = 'APP CONFIG CHANGE';
interface CountryType {
  id: string;
}
const number = ref(1);
watch(()=>number.value,(val)=>{
  console.log('val',val);
},{deep: true})
// useAsyncData
const pagination = ref(0)
const { data:dataUseAsync } = await useAsyncData(
    'mountains',
    async() => {
      const name =  await $fetch('/api/hello-1');
     return $fetch(`https://api.nuxtjs.dev/${name.mountains}`)
    }
  ,{transform: (data) =>{
    return {mountains: data}
  },lazy : true,watch :[pagination]})

//useCookie
const d = new Date("2023-06-10");
const user = useCookie('userInfo',{expires: d});
user.value = 1234
console.log('user',user);

if (process.client) {
}
const title = ref('Index1');

//useError
const error = useError();

//useFetch
const { data:dataUseFetch } = await useFetch('https://api.nuxtjs.dev/mountains',{
    pick: ['0']
})

//useHeadSafe/useHead
useHeadSafe({
  title: title.value,
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test' 
  },
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
      dataId: '1234'
    },
  ]
})
//useHydration
//useLazyAsyncData
const { data:dataLazyUeAsync} = useLazyAsyncData(
    'mountains',
    async() => {
     const name =  await $fetch('/api/hello-1');
     return $fetch(`https://api.nuxtjs.dev/${name.mountains}`)
    }
)

//useLazyFetch
const { data:dataLazyUseFetch } = await useLazyFetch('https://api.nuxtjs.dev/mountains');
const computedHeader = computed(() => {
    return useHeaderStore.title;
})

//useNuxtApp
const stateNotify = ref(false)
const clickButton = () => {
  // router.push({ path: "/about" })
  titleMeta.value = 'SUCCESS'
  user.value = 1;
  stateNotify.value = !stateNotify.value;
    if (stateNotify.value) {
      $useNotify('Your success.');
    }else {
      useNuxtApp().$event('close');
    }
}

//useNuxtData 
const { data: mountains } = useNuxtData('mountains')

// const { data:dataLazyUseAsync} = useLazyAsyncData(
//     'mountains',
//     async() => {
//       const name =  await $fetch('/api/hello-1');
//      return $fetch(`https://api.nuxtjs.dev/${name.mountains}`)
//     },{
//       default: () => mountains
//     }
// )
//useRequestHeaders
const headers = useRequestHeaders();
//useRequestURL
const url = useRequestURL()
// useRoute
const route = useRoute();
//useRouter
const router = useRouter();
// console.log('getRoutes',router.getRoutes());
// console.log(router.hasRoute('about'));
// useRuntimeConfig

const config = useRuntimeConfig();
// useSeoMeta-useServerSeoMeta
const ogTitle = ref('FOR ME') 
useSeoMeta({
  title: 'dasdasd',
  ogTitle: () => `ogTitle: ${ogTitle.value}`,
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

//useState
const counter = useCounter();
console.log('counter',counter.value);




onBeforeMount(() => {
})
onMounted(() => {

})
</script>

<style>

</style>