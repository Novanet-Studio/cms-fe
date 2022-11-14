<template>
  <section class="w-full h-72 relative">
    <nuxt-img class="w-full h-full object-cover"
      src="https://images.pexels.com/photos/8688152/pexels-photo-8688152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    <div
      class="absolute bottom-0 left-0 top-0 right-0 px-4 py-2 from-[rgba(35,31,32,0)] bg-gradient-to-t flex flex-col items-center justify-center">
      <div class="w-36 h-36 bg-primary rounded-full flex items-center justify-center mb-[.875rem]">
        <nuxt-img class="w-20" :src="logo" />
      </div>
      <h2 class="text-5xl text-white">Natación</h2>
    </div>
  </section>
  <section class="container mx-auto">
    <div class="p-8 border rounded-xl mt-16">
      <p class="text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam beatae dolorum corporis dolor
        sed quo natus
        magnam quia illum adipisci velit unde consectetur facere error molestias eius aliquid fugit repellendus, quaerat
        eaque ullam nulla repellat? Quos dolorum nulla repellat consequuntur. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dicta hic necessitatibus quo accusamus fuga corrupti. Excepturi quidem incidunt quia assumenda
        sunt perspiciatis, autem vero porro corporis aperiam eligendi omnis hic dolorum numquam voluptate eius modi
        ducimus saepe molestiae amet rem.</p>
    </div>
    <div class="my-6 flex justify-center">
      <logo-dots />
    </div>
    <div class="mb-12">
      <discipline-list />
    </div>
  </section>
</template>
<script lang="ts" setup>
const route = useRoute();
const logo = `${route.params.id}.svg`;
</script>
