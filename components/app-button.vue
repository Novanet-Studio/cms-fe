<template>
  <button class="bg-secondary px-8 py-2 rounded-full flex text-white flex flex-start" :class="class"
    @click.prevent="$emit('click')">
    <template v-if="icon">
      <nuxt-img :src="icon" class="mr-2" :class="iconClass" />
    </template>
    <slot />
  </button>
</template>

<script lang="ts" setup>
type Props = {
  icon?: string;
  text?: string;
  class?: string;
  iconClass?: string;
}

type Emits = {
  (e: 'click'): string;
};

defineProps<Props>();
defineEmits<Emits>();
</script>