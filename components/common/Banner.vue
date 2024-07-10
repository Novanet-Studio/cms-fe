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
      ? "lg:grid-cols-[27rem_1fr] [&:first-child]:order-2"
      : "lg:grid-cols-[1fr_27rem] [&:first-child]:rounded-r-lg";

  const asideCorner =
    props.contentPosition === "left" ? "rounded-l-md" : "rounded-r-md";

  const asideOrder = props.contentPosition === "left" ? "order-1" : "order-2";

  return {
    container: `${container} ${props.ui?.container}`,
    aside: `${asideCorner} ${asideOrder} ${props.ui?.aside?.base}`,
  };
});
</script>

<template>
  <section class="grid max-h-[33.75rem]" :class="classes.container">
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
      class="bg-[var(--color-secondary)] text-white p-8 flex flex-col gap-4"
      :class="classes.aside"
    >
      <slot name="aside">
        <h2
          class="font-black text-[37px] leading-[50px] text-pretty"
          :class="ui.aside.title"
        >
          {{ title }}
        </h2>
        <p class="text-xl text-balance" :class="ui.aside.description">
          {{ description }}
        </p>
      </slot>
    </aside>
  </section>
</template>
