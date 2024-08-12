<template>
  <section class="flex flex-col justify-center gap-4">
    <h3
      class="font-black text-[40px] md:text-3xl text-center lg:mt-[7.75rem] lg:text-[40px]"
    >
      Reserva tu cupo
    </h3>

    <p class="text-xl md:text-lg lg:text-3xl text-balance text-center">
      Selecciona el plan y el horario más adecuado para ti y haz click aquí para
      escribirnos tu selección y confirmar disponibilidad de cupos. O si
      prefieres, escribe un correo a
      <a class="underline" href="mailto:info@ccsmultisport.com" target="_blank"
        >info@ccsmultisport.com</a
      >
      y cuéntanos tu selección
    </p>

    <UButton
      label="Contáctanos"
      size="lg"
      :ui="{
        base: 'self-center',
        rounded: 'rounded-full',
        variant: {
          solid: 'bg-[#f18a00] font-bold px-8 py-4 hover:bg-[#f18900c7]',
        },
      }"
      @click="$router.push('/contacto')"
    />
  </section>
</template>
