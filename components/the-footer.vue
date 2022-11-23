<template>
  <footer class="footer">
    <div class="footer__left">
      <p class="footer__legal">Derechos Reservados 2022</p>
      <div class="footer__icons">
        <a class="footer__link" href="https://facebook.com" target="_blank">
          <font-awesome-icon :icon="['fab', 'facebook']" size="2x" />
        </a>
        <a class="footer__link" href="https://instagram.com" target="_blank">
          <font-awesome-icon :icon="['fab', 'instagram']" size="2x" />
        </a>
        <a
          class="footer__link"
          href="https://whatsapp.me/+581241289"
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'whatsapp']" size="2x" />
        </a>
      </div>
    </div>
    <div class="footer__right">
      <p>Sitio web realizado por:</p>
      <a href="https://novanet.studio" target="_blank">
        <img alt="Novanet logo" src="../assets/images/novanet-logo.svg" />
      </a>
    </div>
  </footer>
</template>
