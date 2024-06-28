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
      >
        <div class="i-fa-solid-bars text-xl text-white"></div>
      </button>
      <button
        class="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center"
      >
        <div class="i-fa-solid-sign-in-alt text-xl text-white"></div>
      </button>
    </div>
  </header>
</template>
