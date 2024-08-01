<script setup lang="ts">
import { cva } from 'cva';

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

// const classes = computed(() => {
//   // const container =
//   //   props.contentPosition === "left"
//   //     ? "md:grid-cols-[18rem_1fr] lg:grid-cols-[27rem_1fr] [&:first-child]:order-2"
//   //     : "md:grid-cols-[1fr_18rem] lg:grid-cols-[1fr_27rem] [&:first-child]:rounded-r-lg";

//   const asideCorner =
//     props.contentPosition === "left"
//       ? "rounded-tr-md rounded-l-md md:rounded-tr-none"
//       : "rounded-bl-md rounded-bl-none rounded-r-md";

//   const asideOrder = props.contentPosition === "left" ? "ordeclasses.containerr-1" : "order-2";

//   return {
//     // container: `${container} ${props.ui?.container}`,
//     aside: `bg-[var(--color-secondary)] text-white ${asideCorner} ${asideOrder} ${props.ui?.aside?.base}`,
//   };
// });

const containerVariants = cva('grid min-h-[17.81rem] md:min-h-[18.31] lg:max-h-[33.75rem]', {
  variants: {
    position: {
      left: 'md:grid-cols-[18rem_1fr] lg:grid-cols-[27rem_1fr] [&:first-child]:order-2',
      right: 'md:grid-cols-[1fr_18rem] lg:grid-cols-[1fr_27rem] [&:first-child]:rounded-l-lg',
    }
  },
  defaultVariants: {
    position: 'right',
  }
})

const asideVariants = cva('bg-[var(--color-secondary)] text-white p-8 md:p-4 md:gap-2 flex flex-col gap-4', {
  variants: {
    position: {
      left: 'rounded-tr-md rounded-tl-md md:rounded-bl-md md:rounded-tr-none order-1',
      right: 'rounded-bl-md md:rounded-bl-none rounded-r-md order-2',
    }
  },
  defaultVariants: {
    position: 'right',
  }
})

const mainWrapperVariants = cva('', {
  variants: {
    position: {
      left: 'order-2 rounded-r-md',
      right: 'order-1 rounded-l-md'
    }
  },
  defaultVariants: {
    position: 'right'
  }
})
</script>

<template>
  <section
    :class="cn(containerVariants({ position: contentPosition }), ui.container)"
  >
    <div :class="cn(mainWrapperVariants({ position: contentPosition }))">
      <slot name="main" />
    </div>
    <aside
      :class="cn(asideVariants({ position: contentPosition }), ui.aside.base)"
    >
      <slot name="aside">
        <h2
          :class="cn('font-black text-pretty text-[30px] leading-tight md:text-lg lg:text-[37px] lg:leading-[50px]', ui.aside.title)"
        >
          {{ title }}
        </h2>
        <p
          :class="cn('text-base text-balance md:text-sm lg:text-xl', ui.aside.description)"
        >
          {{ description }}
        </p>
      </slot>
    </aside>
  </section>
</template>

