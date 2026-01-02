<template>
  <Transition name="fade" appear>
    <div>
      <AppHeader />
      <main class="main">
        <section class="articulo">
          <AppButton
            class="button--yellow button--small"
            prefix="fas"
            iconName="caret-left"
            iconSize="1x"
            url="/blog"
          >
            Volver al blog
          </AppButton>
          <div class="articulo-grid">
            <slot />
            <AppAside />
          </div>
        </section>
      </main>
      <AppFooter />
    </div>
  </Transition>
</template>
