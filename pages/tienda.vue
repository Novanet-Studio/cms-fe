<template>
  <section class="mb-40">
    <UButton class="mb-6" label="← Ir al inicio" size="lg" variant="outline" :ui="{
      base: 'self-start',
      rounded: 'rounded-full',
      variant: {
        outline: 'ring-1 font-semibold text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-gray-light)]',
      },
    }" @click="$router.push('/')" />
    <CommonBanner
      :ui="{
        aside: {
          base: 'justify-center py-20 lg:px-8',
        },
      }"
    >
      <template #main>
        <img
          class="w-full object-cover rounded-t-md md:rounded-l-md md:rounded-tr-none min-h-[17.81rem] md:min-h-[18.31] lg:min-h-[33.75rem]"
          src="https://res.cloudinary.com/novanet-studio/image/upload/v1679080991/ccs-multisport/cms_tienda_maniquies_exhibicion_ab9a16ab35.webp"
          alt="Una persona nadando"
          draggable="false"
        />
      </template>
      <template #aside>
        <h2
          class="font-black text-pretty text-lg leading-tight md:text-lg lg:text-[37px] lg:leading-[50px]"
        >
          Próximamente
        </h2>
        <p
          class="text-base text-balance md:text-sm lg:text-xl"
        >
        Tienda de artículos deportivos y natación para niños, niñas, damas y caballeros.
        </p>
        <UButton
          label="Contáctanos"
          size="lg"
          :ui="{
            base: 'self-start mt-4',
            rounded: 'rounded-full',
            variant: {
              solid: 'bg-[#f18a00] font-bold px-8 py-3 hover:bg-[#f18900c7]',
            },
          }"
          @click="() => $router.push('/contacto')"
        />
      </template>
    </CommonBanner>
  </section>
</template>
