<script setup lang="ts">
useHead({
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { key: "theme-color", name: "theme-color", content: "light" },
  ],
  link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
  htmlAttrs: {
    lang: "es",
  },
});
</script>

<template>
  <div class="container">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
:root {
  --color-primary: #f18a00;
  --color-secondary: #001e61;
  --color-tertiary: #231f20;
  --color-gray-mid: #a7a9ac;
  --color-gray-light: #e6e7e8;
}
</style>
