<template>
  <div class="flex">
    <div class="w-40 h-40 flex justify-center items-center border border-[rgba(167,169,172,0.75)] rounded-[1.25rem]">
      <nuxt-img :src="icon" class="w-36 h-36" />
    </div>
    <div v-if="title && content" class="w-auto ml-4">
      <h2 class="text-2xl text-secondary font-extrabold">{{ title }}</h2>
      <p class="max-w-72">{{ content }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  icon: string;
  title?: string;
  content?: string;
}

defineProps<Props>();
</script>