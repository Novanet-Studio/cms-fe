<template>
  <section class="flex flex-col justify-center gap-4">
    <h3 class="font-black text-[40px] text-center mt-[7.75rem]">
      Normas del centro deportivo
    </h3>
    <p class="lg:text-3xl text-balance text-center">
      Lorem ipsum dolor sit amet consectetur. Fringilla suspendisse mi nunc
      vitae tristique sed accumsan sed scelerisque. Egestas nunc sodales turpis
      nulla nulla egestas. Suspendisse sit magna neque eu. Semper quam amet
      gravida proin at eget duis vestibulum a.
    </p>
    <UButton
      label="Descargar"
      size="lg"
      :ui="{
        base: 'self-center',
        rounded: 'rounded-full',
        variant: {
          solid: 'bg-[#f18a00] font-bold px-8 py-4',
        },
      }"
    />
  </section>
</template>
