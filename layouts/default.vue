<template>
  <transition name="fade" appear>
    <div>
      <the-header />
      <main class="main">
        <slot />
      </main>
      <the-footer />
    </div>
  </transition>
</template>
