<template>
  <aside class="aside">
    <div class="contacto__group">
      <h2 class="contacto__subtitle">Ubicación</h2>
      <p>
        Urb. Alta Florida Av. Los Mangos Quinta Ccs MultiSport (al frente de
        la Plaza Benito Juárez subiendo a la Cota Mil).
        <a
          class="contacto__link"
          href="https://maps.app.goo.gl/X25KbsffHZEN5Y236"
          target="_blank"
        >
          Abrir en Google Maps
          <font-awesome-icon :icon="['fas', 'map']" />
        </a>
      </p>
    </div>
    <div class="contacto__group">
      <h2 class="contacto__subtitle">Información general</h2>
      <p>info@ccsmultisport.com</p>
    </div>

    <div class="contacto__group">
      <h2 class="contacto__subtitle">Buzón de sugerencias</h2>
      <p>sugerencias@ccsmultisport.com</p>
    </div>
    <div class="contacto__group">
      <h2 class="contacto__subtitle">Teléfonos</h2>
      <p>+58 424-154.83.30</p>
    </div>
    <div class="contacto__group">
      <h2 class="contacto__subtitle">WhatsApp</h2>
      <div>
        <a
          class="contacto__link"
          href="https://wa.me/message/XTA7RUDHZKT4C1"
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'whatsapp']" size="2x" />
        </a>
      </div>
    </div>

    <div class="contacto__group">
      <h2 class="contacto__subtitle">Redes sociales</h2>
      <div>
        <a
          class="contacto__link"
          href="https://www.facebook.com/CcsMultiSport"
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'facebook']" size="2x" />
        </a>
        <a
          class="contacto__link"
          href="https://www.instagram.com/ccsmultisport/"
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'instagram']" size="2x" />
        </a>
      </div>
    </div>
  </aside>
</template>
