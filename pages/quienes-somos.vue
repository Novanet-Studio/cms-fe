<template>
  <section>
    <UButton class="mb-6" label="← Ir al inicio" size="lg" variant="outline" :ui="{
      base: 'self-start',
      rounded: 'rounded-full',
      variant: {
        outline: 'ring-1 font-semibold text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-gray-light)]',
      },
    }" @click="$router.push('/')" />
    <AboutBanner />

    <HomeProfessionals class="my-28" />
    <AboutPhilosophy />
    <AboutRules />
    <AboutRulesDetails />
  </section>
</template>
