<template>
  <div
    class="w-[12.8863rem] h-[16.245rem] border border-[rgba(0,30,97,0.3)] rounded-2xl flex justify-center items-center"
  >
    <div
      class="w-[11.7894rem] h-[15.2163rem] shadow-card p-4 flex flex-col items-center justify-between rounded-2xl bg-gradient-to-br from-[#E6E7E8] to-white"
    >
      <div class="flex flex-col items-center justify-center">
        <div
          class="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-[.875rem]"
        >
          <nuxt-img :src="logo" />
        </div>
        <h4 class="text-xl text-center text-secondary font-extrabold">
          {{ title }}
        </h4>
      </div>
      <p class="text-sm text-center font-primary-alt">{{ description }}</p>
      <logo-dots />
    </div>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  logo: string;
  alternativeText: string;
  title: string;
  description: string;
};

type Emits = {
  (e: "click"): void;
};

defineProps<Props>();
defineEmits<Emits>();
</script>
