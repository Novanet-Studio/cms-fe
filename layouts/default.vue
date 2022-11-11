<template>
  <transition name="fade" appear>
    <div class="layout">
      <the-header />
      <slot />
      <the-footer />
    </div>
  </transition>
</template>
