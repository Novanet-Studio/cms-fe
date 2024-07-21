<script setup lang="ts">
interface Props {
  contentPosition?: "left" | "right";
  title: string;
  description: string;
  ui?: {
    container?: string;
    aside?: {
      base: string;
      title?: string;
      description?: string;
    };
  };
}

const props = withDefaults(defineProps<Props>(), {
  contentPosition: "right",
  title: "",
  description: "",
  ui: {
    container: "",
    aside: {
      base: "",
      title: "",
      description: "",
    },
  },
});

const classes = computed(() => {
  const container =
    props.contentPosition === "left"
      ? "md:grid-cols-[18rem_1fr] lg:grid-cols-[27rem_1fr] [&:first-child]:order-2"
      : "md:grid-cols-[1fr_18rem] lg:grid-cols-[1fr_27rem] [&:first-child]:rounded-r-lg";

  const asideCorner =
    props.contentPosition === "left"
      ? "rounded-tr-md rounded-l-md md:rounded-tr-none"
      : "rounded-bl-none rounded-r-md md:rounded-bl-none";

  const asideOrder = props.contentPosition === "left" ? "order-1" : "order-2";

  return {
    container: `${container} ${props.ui?.container}`,
    aside: `bg-[var(--color-secondary)] text-white ${asideCorner} ${asideOrder} ${props.ui?.aside?.base}`,
  };
});
</script>

<template>
  <section
    class="grid min-h-[17.81rem] md:min-h-[18.31] lg:max-h-[33.75rem]"
    :class="classes.container"
  >
    <div
      :class="
        contentPosition === 'left'
          ? 'order-2 rounded-r-md'
          : 'order-1 rounded-l-md'
      "
    >
      <slot name="main" />
    </div>
    <aside
      class="p-8 md:p-4 md:gap-2 flex flex-col gap-4"
      :class="classes.aside"
    >
      <slot name="aside">
        <h2
          class="font-black text-pretty text-[30px] leading-tight md:text-lg lg:text-[37px] lg:leading-[50px]"
          :class="ui.aside.title"
        >
          {{ title }}
        </h2>
        <p
          class="text-base text-balance md:text-sm lg:text-xl"
          :class="ui.aside.description"
        >
          {{ description }}
        </p>
      </slot>
    </aside>
  </section>
</template>
