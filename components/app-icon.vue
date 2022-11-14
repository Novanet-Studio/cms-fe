<template>
  <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center" :class="class">
    <nuxt-img class="w-10" :src="logo" />
  </div>
</template>

<script lang="ts" setup>
type Props = {
  logo: string;
  class?: string;
};

defineProps<Props>();
</script>