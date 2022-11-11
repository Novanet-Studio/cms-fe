<template>
  <div class="relative w-[25.25rem] h-[19.375rem]">
    <nuxt-img class="w-full h-full bg-cover" :src="image" quality=".7" />
    <div
      class="absolute bottom-0 left-0 top-0 right-0 px-4 py-2 from-[rgba(35,31,32,0)] bg-gradient-to-t flex items-end">
      <h4 class="text-3xl text-white p-4">{{ text }}</h4>
    </div>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  image: string;
  text: string;
}

defineProps<Props>();
</script>