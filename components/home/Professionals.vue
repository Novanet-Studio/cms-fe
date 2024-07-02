<template>
  <section class="grid lg:grid-cols-[47em_1fr]">
    <div>
      <img src="https://placehold.co/753x655" alt="" />
    </div>
    <div class="flex flex-col gap-6 pl-[5.8125rem] justify-center">
      <h3 class="font-black text-[2.5rem]">Somos profesionales</h3>
      <!-- Dots goes here -->
      <CommonDots class="[&>div]:w-3 [&>div]:h-3 w-max gap-1 -mt-4" />
      <p class="text-xl">
        Nuestros profesores cuentan en su mayoría con 5 o más años de
        experiencia en la enseñanza de la práctica de la natación, con estudios
        de diplomados en psicología deportiva, natación para niños con
        discapacidades y preparación física. <br />
      </p>
      <p class="text-xl">
        Además, algunos de ellos participan activamente en la natación
        competitiva; sus conocimientos y vivencias, han contribuido con la
        formación de muchos atletas de alta competencia.
      </p>

      <UButton
        label="Ver profesores"
        size="lg"
        :ui="{
          base: 'self-start',
          rounded: 'rounded-full',
          variant: {
            solid: 'bg-[#f18a00] font-bold px-8 py-4',
          },
        }"
      />
    </div>
  </section>
</template>
