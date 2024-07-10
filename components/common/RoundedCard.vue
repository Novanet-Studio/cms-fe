<script setup lang="ts">
interface Props {
  title?: string;
  description?: string;
  /**
   * If src is provided, the image will be displayed instead of the content
   * And the title & description would be put under the image
   */
  src?: string;
  ui: {
    base: string;
  };
}

const props = withDefaults(defineProps<Props>(), {
  ui: {
    base: "",
  },
});

const attrs = useAttrs();

const base = computed(() => {
  return props.src ? "flex-col items-center gap-4" : "";
});
</script>

<template>
  <div class="flex rounded-full" :class="base">
    <div
      class="size-[23rem] rounded-full outline-offset-[1.7rem] outline-1 outline flex flex-col text-white p-4 transition ease items-center justify-center"
      v-bind="attrs"
    >
      <h4 v-if="title && !src" class="font-black text-3xl text-center mt-28">
        {{ title }}
      </h4>
      <p v-if="description && !src" class="text-xl text-center">
        {{ description }}
      </p>
      <div
        class="w-[22rem] h-[22rem] rounded-full bg-cover bg-center"
        :style="{
          backgroundImage: `url(${src})`,
        }"
      ></div>
    </div>
    <div v-if="src && (title || description)">
      <h4 class="font-black text-3xl text-center mt-10">
        {{ title }}
      </h4>
      <p v-if="description" class="text-xl text-center">
        {{ description }}
      </p>
    </div>
  </div>
</template>
