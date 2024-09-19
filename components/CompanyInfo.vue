<template>
  <aside class="flex flex-col gap-4">
    <div class="contacto__group">
      <h2 class="font-black text-sm text-[#231f20] md:text-xl">Ubicación</h2>
      <p class="text-sm text-[#231f20]">
        Urb. Alta Florida Av. Los Mangos Quinta Ccs Multisport (al frente de
        la Plaza Benito Juárez subiendo a la Cota Mil).
        <a
          class="text-[var(--color-primary)]"
          href="https://maps.app.goo.gl/X25KbsffHZEN5Y236"
          target="_blank"
        >
          Abrir en Google Maps
          <UIcon name="i-fa-solid-map" />
          <!-- <font-awesome-icon :icon="['fas', 'map']" /> -->
        </a>
      </p>
    </div>
    <div class="contacto__group">
      <h2 class="font-black text-sm text-[#231f20] md:text-xl">
        Información general
      </h2>
      <p class="text-sm text-[#231f20]">info@ccsmultisport.com</p>
    </div>

    <div class="contacto__group">
      <h2 class="font-black text-sm text-[#231f20] md:text-xl">
        Buzón de sugerencias
      </h2>
      <p class="text-sm text-[#231f20]">sugerencias@ccsmultisport.com</p>
    </div>
    <div class="contacto__group">
      <h2 class="font-black text-sm text-[#231f20] md:text-xl">Teléfonos</h2>
      <p class="text-sm text-[#231f20]">+58 212-935.45.46 / 0212–935.45.46</p>
    </div>
    <div class="contacto__group">
      <h2 class="font-black text-sm text-[#231f20] md:text-xl">WhatsApp</h2>
      <div>
        <a
          class="text-[var(--color-primary)]"
          href="https://wa.me/message/XTA7RUDHZKT4C1"
          target="_blank"
        >
          <UIcon name="i-fa-brands-whatsapp" />
        </a>
      </div>
    </div>

    <div class="contacto__group">
      <h2 class="font-black text-sm text-[#231f20] md:text-xl">
        Redes sociales
      </h2>
      <div class="flex gap-2">
        <a
          class="text-[var(--color-primary)]"
          href="https://www.facebook.com/CcsMultiSport"
          target="_blank"
        >
          <UIcon name="i-fa-brands-facebook" />
        </a>
        <a
          class="text-[var(--color-primary)]"
          href="https://www.instagram.com/ccsmultisport/"
          target="_blank"
        >
          <UIcon name="i-fa-brands-instagram" />
        </a>
      </div>
    </div>
  </aside>
</template>
