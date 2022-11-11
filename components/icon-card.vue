<template>
  <div class="w-40 h-40 flex justify-center items-center border border-[rgba(167,169,172,0.75)] rounded-[1.25rem]">
    <nuxt-img :src="icon" class="w-36 h-36" />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  icon: string;
}>();
</script>