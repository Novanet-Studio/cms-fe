<template>
  <div class="accordion-list">
    <form
      class="form accordion-item"
      name="contacto"
      v-on:submit.prevent="handleSubmit"
      action="/gracias/"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <h3 class="form__title">Envíanos un mensaje</h3>
      <input type="hidden" name="form-name" value="contacto" />
      <div class="row">
        <div class="form__b-col">
          <input
            class="form__input"
            type="text"
            name="nombre"
            v-model="formData.usuario"
            placeholder="Nombre y Apellido *"
          />
        </div>

        <div class="form__b-col">
          <input
            class="form__input"
            type="email"
            name="email"
            v-model="formData.email"
            placeholder="Email *"
          />
        </div>

        <div class="form__a-col">
          <input
            class="form__input"
            type="text"
            name="nombre"
            v-model="formData.asunto"
            placeholder="Asunto *"
          />
        </div>

        <div class="form__a-col">
          <textarea
            class="form__textarea"
            rows="5"
            name="mensaje"
            v-model="formData.mensaje"
            placeholder="Mensaje"
          />
        </div>
      </div>
      <div class="form__a-col submit">
        <app-button
          class="button--blue button--small"
          prefix="fa"
          iconName="paper-plane"
          iconSize="1x"
        >
          Enviar
        </app-button>
        <input type="hidden" name="form-name" value="inicio" />
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
const formData = {};
</script>
