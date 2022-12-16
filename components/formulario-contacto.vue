<template>
  <div class="accordion-list">
    <form
      class="accordion-item"
      name="contacto"
      v-on:submit.prevent="handleSubmit"
      action="/gracias/"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <h3>Envíanos un mensaje</h3>
      <input type="hidden" name="form-name" value="contacto" />
      <div class="row">
        <div>
          <div class="form-group">
            <input
              class="form-control"
              type="text"
              name="nombre"
              v-model="formData.usuario"
              placeholder="Nombre y Apellido *"
            />
          </div>
        </div>
        <div>
          <div class="form-group">
            <input
              class="form-control"
              type="email"
              name="email"
              v-model="formData.email"
              placeholder="Email *"
            />
          </div>
        </div>
        <div>
          <div class="form-group">
            <input
              class="form-control"
              type="text"
              name="nombre"
              v-model="formData.asunto"
              placeholder="Asunto *"
            />
          </div>
        </div>
        <div>
          <div class="form-group">
            <textarea
              class="form-control"
              rows="5"
              name="mensaje"
              v-model="formData.mensaje"
              placeholder="Mensaje"
            />
          </div>
        </div>
      </div>
      <div class="form-group submit">
        <input class="ps-btn" type="submit" value="Enviar" />
        <input type="hidden" name="form-name" value="inicio" />
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
const formData = {};
</script>
