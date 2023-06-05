<script setup>
  import { useHeader } from "@/store/auth"
  const useHeaderStore = useHeader();
  const { $useNotify } = useNuxtApp();
  const props = defineProps({
    header: String,
    number: Number
  })
  const stateAsRefs = toRefs(props);
  console.log('stateAsRefs',stateAsRefs);
  // console.log('props.number',props.number.one);
  const counter = ref({data: {
    a: 1
  }});
  // const counterToRef = toRef(counter.value, 'data')

  const counterComputed = computed(()=>{
    return counter;
  })
  const stateNotify = ref(false)

  const handleNotify = () => {
    useHeaderStore.changeTitleHeader('ChangeTitle');
    stateNotify.value = !stateNotify.value;
    // console.log('stateNotify.value',stateNotify.value);
    
    if (stateNotify.value) {
      $useNotify('Your success.');
    }else {
      useNuxtApp().$event('close');
    }
  }

  watch(()=>counter.value,(val)=>{
    // console.log('watch',val.data);
  },{deep:true, immediate:true})
  watchEffect(()=>{
    // console.log('watchEffect',counter.data.test);
  })

</script>
<template>
  <!-- <button @click="">Click</button> -->
  <div>
  <div>
    Counter: {{ counterComputed }}
    <button @click="stateAsRefs.number++">
      +
    </button>
    <button @click="counter.data.a--">
      -
    </button>
  </div>
  <div>
    <button @click="handleNotify" style="background-color: bisque; padding: 10px;">Click Show Notify</button>
  </div>
</div>
</template>
<style lang="scss" scoped>
  div {
    h1 {
      @apply text-red-500;
    }
  }
</style>