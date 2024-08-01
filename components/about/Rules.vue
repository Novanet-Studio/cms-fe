<template>
  <section class="flex flex-col justify-center gap-4">
    <h3
      class="font-black text-3xl lg:text-[40px] md:text-3xl text-center mt-[7.75rem]"
    >
      Normas del centro deportivo
    </h3>
    <p class="lg:text-3xl text-balance text-center">
      Aquí podrás encontrar las normas y aspectos importantes de la estructura y
      el funcionamiento general del Ccs MultiSport. Nuestro objetivo es
      garantizar a usted y sus representados el mejor de los servicios. Para ver
      las normas completas haga click en el botón de descargar:
    </p>
    <UButton
      label="Descargar"
      size="lg"
      :ui="{
        base: 'self-center',
        rounded: 'rounded-full',
        variant: {
          solid: 'bg-[#f18a00] font-bold px-8 py-4 hover:bg-[#f18900c7]',
        },
      }"
    />
  </section>
</template>
