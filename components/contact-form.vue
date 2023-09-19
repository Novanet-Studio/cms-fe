<template>
  <div class="form__container">
    <form
      class="form"
      name="contacto"
      method="post"
      action="../pages/gracias"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <h3 class="form__title">Envíanos un mensaje</h3>
      <input type="hidden" name="form-name" value="contacto" />

      <div class="form__b-col">
        <input
          class="form__input"
          type="text"
          name="nombre"
          v-model="name"
          placeholder="Nombre y Apellido *"
        />
      </div>

      <div class="form__b-col">
        <input
          class="form__input"
          type="email"
          name="email"
          v-model="email"
          placeholder="Email *"
        />
      </div>

      <div class="form__a-col">
        <input
          class="form__input"
          type="text"
          name="asunto"
          v-model="subject"
          placeholder="Asunto *"
        />
      </div>

      <div class="form__a-col">
        <textarea
          class="form__textarea"
          rows="5"
          name="mensaje"
          v-model="message"
          placeholder="Mensaje"
        />
      </div>

      <div class="form__a-col submit">
        <app-button
          class="button--blue button--small"
          prefix="fa"
          iconName="paper-plane"
          iconSize="1x"
          type="submit"
          url="/"

        >
          Enviar
        </app-button>
        <input type="hidden" name="form-name" value="inicio" />
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup';

type Form = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const schema = yup.object({
  name: yup.string().required('Este campo es requerido'),
  email: yup.string().email().required('Este campo es requerido'),
  subject: yup.string().required('Este campo es requerido'),
  message: yup.string().required('Este campo es requerido'),
});

const {
  useFieldModel,
  errors: _,
  handleSubmit,
} = useForm<Form>({
  validationSchema: schema,
});

const [name, email, subject, message] = useFieldModel([
  'name',
  'email',
  'subject',
  'message',
]);

const mapper = (data: Form) => ({
  nombre: data.name,
  email: data.email,
  asunto: data.subject,
  mensaje: data.message,
});

const encode = (data: any) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');

/* const onSubmit = handleSubmit(async (data) => {
  try {
    const mapped = mapper(data);
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contacto',
        ...mapped,
      }),
    });
  } catch (error: any) {
    console.log(
      'Hubo un error al intentar enviar el formulario: ',
      error.message
    );
  }
}); */
</script>
