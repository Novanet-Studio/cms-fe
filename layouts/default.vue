<template>
  <transition name="fade" appear>
    <div>
      <the-header />
      <slot />
      <the-footer />
    </div>
  </transition>
</template>
