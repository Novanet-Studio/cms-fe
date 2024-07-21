<script setup lang="ts">
const items = [
  "https://picsum.photos/1920/1080?random=1",
  "https://picsum.photos/1920/1080?random=2",
  "https://picsum.photos/1920/1080?random=3",
  "https://picsum.photos/1920/1080?random=4",
  "https://picsum.photos/1920/1080?random=5",
  "https://picsum.photos/1920/1080?random=6",
];

const { articles, loading } = useArticlesData();

const excerpt = (string: string, indexEnd: number) =>
  string.replaceAll("**", "").substring(0, indexEnd).concat("...");
</script>

<template>
  <section>
    <UCarousel
      v-slot="{ item }"
      :items="items"
      :ui="{ item: 'basis-full' }"
      class="overflow-hidden rounded-md max-h-[33.75rem]"
      arrows
    >
      <img :src="item" class="w-full" draggable="false" />
    </UCarousel>

    <p>
      Te invitamos a visitar y conocer nuestra sede en la Alta Florida, una
      piscina semi-olímpica, temperada, con un inmejorable equipo de trabajo
      liderado por nuestro Coach certificado en entrenamiento para Triatlón y
      con el mejor equipo de entrenadores capaces de brindar un ambiente cálido
      y estimulante para todos.
    </p>

    <div class="">
      <h4>Horario de atención</h4>
      <p>Oficina Administrativa para pagos y formalizar inscripción</p>

      <!-- Here goes table -->
    </div>

    <div class="">
      <form action="">
        <h3>Envíanos un mensaje</h3>
        <div>
          <div>
            <label for="fullname">
              <input type="text" placeholder="Nombre y apellido *" />
            </label>
            <label for="fullname">
              <input type="text" placeholder="Nombre y apellido *" />
            </label>
          </div>
          <div>
            <label for="fullname">
              <input type="text" placeholder="Asunto *" />
            </label>
          </div>
          <textarea name="message" cols="30" rows="10"></textarea>
        </div>
      </form>

      <aside>
        <!-- Here goes CompanyInfo component -->
      </aside>
    </div>
  </section>
</template>
