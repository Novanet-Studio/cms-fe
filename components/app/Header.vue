<script setup lang="ts">
import { AppMenu } from "#components";

const slideOver = useSlideover();

function openMenu() {
  slideOver.open(AppMenu, { onClose: slideOver.close });
}
</script>

<template>
  <header class="flex justify-between items-center">
    <NuxtLink to="/">
      <img
        class="w-[8.8125rem] h-[7.875rem] -ml-6"
        src="~/assets/images/favicon.png"
      />
    </NuxtLink>
    <div class="flex gap-2">
      <button
        class="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center"
        @click="openMenu"
      >
        <UIcon name="i-fa-solid-bars" class="text-xl w-8 text-white" />
      </button>
      <button
        class="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center"
      >
        <UIcon name="i-fa-solid-sign-in-alt" class="text-xl text-white" />
      </button>
    </div>
  </header>
</template>
