<template>
  <button :class="`bg-secondary px-8 py-2 rounded-full flex text-white flex flex-start ${classes}`">
    <template v-if="icon">
      <nuxt-img :src="icon" class="mr-2" />
    </template>
    <slot />
  </button>
</template>

<script lang="ts" setup>
type Props = {
  icon?: string;
  text?: string;
  class?: string;
}

type Emits = {
  (e: 'click'): string;
};

const props = defineProps<Props>();
defineEmits<Emits>();

const classes = computed(() => props.class);
</script>