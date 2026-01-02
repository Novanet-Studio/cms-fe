<template>
  <button :class="class" @click.prevent="$emit('click')" @click="click(url)" :type="type">
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
  type?: "button" | "reset" | "submit";
  url?: string;
};

type Emits = {
  (e: "click"): string;
};

withDefaults(defineProps<Props>(), {
  type: "button",
});
defineEmits<Emits>();

const router = useRouter();
const click = (url: string) => {

  router.replace({
    path: `${url}`,
  });
};
</script>
