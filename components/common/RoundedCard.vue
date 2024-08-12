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
      class="size-[21rem] rounded-full outline-offset-[0.5rem] outline-1 outline flex flex-col text-white p-4 transition ease items-center justify-center lg:outline-offset-[1rem] lg:size-[18rem]"
      v-bind="attrs"
    >
      <h4 v-if="title && !src" class="font-black text-2xl text-center text-balance mt-16">
        {{ title }}
      </h4>
      <p v-if="description && !src" class="text-lg text-center">
        {{ description }}
      </p>
      <div
        class="size-[19rem] rounded-full bg-cover bg-center lg:w-[16rem] lg:h-[16rem]"
        :style="{
          backgroundImage: `url(${src})`,
        }"
      ></div>
    </div>
    <div v-if="src && (title || description)">
      <template v-if="$slots.content">
        <slot name="content" />
      </template>
      <h4
        v-if="!$slots.content"
        class="font-black text-2xl text-center mt-8 lg:mt-10 lg:text-3xl"
      >
        {{ title }}
      </h4>
      <p
        v-if="description || !$slots.content"
        class="text-lg text-center lg:text-xl"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>
