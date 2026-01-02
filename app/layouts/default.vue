<template>
  <Transition name="fade" appear>
    <div>
      <AppHeader />
      <main class="main">
        <slot />
      </main>
      <AppFooter />
    </div>
  </Transition>
</template>
