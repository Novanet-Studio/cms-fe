<template>
  <button :class="class" @click.prevent="$emit('click')">
    <template v-if="prefix">
      <font-awesome-icon :icon="[`${prefix}`, `${iconName}`]" :size="iconSize" />
    </template>
    <slot />
  </button>
</template>

<script lang="ts" setup>
type Props = {
  class?: string;
  prefix?: string;
  iconName?: string;
  iconSize?: string;
  text?: string;
};

type Emits = {
  (e: "click"): string;
};

defineProps<Props>();
defineEmits<Emits>();
</script>
