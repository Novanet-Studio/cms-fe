<template>
  <section class="my-20 flex w-full items-center bg-[#E6E7E8] container mx-auto">
    <div class="flex-basis-[50%] flex flex-col items-end mr-9">
      <logo-dots />
      <h3 class="text-4xl font-black text-[#231F20] text-right mt-4">Nuestros profesores cuentan <br> en su mayoría con
        5 o
        más <br> años de experiencia
      </h3>
      <p class="text-right my-4 ml-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum mollitia eum
        explicabo
        totam cupiditate animi, consectetur fugit dignissimos laboriosam. Quam soluta fugit impedit laudantium
        consequuntur eligendi minus repellat non facilis, error porro quibusdam nisi dolore quaerat autem alias velit
        saepe harum recusandae! Necessitatibus debitis doloremque rem.
      </p>
    </div>
    <div class="flex-basis-[50%]">
      <nuxt-img src="https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg"
        class="w-full h-[45rem] bg-cover" />
    </div>
  </section>

  <section class="container mx-auto grid grid-cols-2 gap-8">
    <article class="flex" v-for="(post, index) in posts" :key="index">
      <picture class="border p-4 border-[rgba(167,169,172,0.75)] rounded-2xl min-w-60">
        <nuxt-img class="w-60 h-40 object-cover object-center"
          src="https://images.pexels.com/photos/3851030/pexels-photo-3851030.jpeg" alt="Sample image" />
      </picture>
      <div class="flex flex-col ml-4">
        <h3 class="font-extrabold text-2xl text-secondary mt-2">{{ post.title }}</h3>
        <p class="mt-2">{{ post.description }}</p>
        <app-button class="bg-primary mt-8 w-36" @click="$router.push(`/posts/${post.slug}`)">Leer más</app-button>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
const posts = [
  {
    id: 1,
    slug: 'como-practicar-yoga',
    title: 'Como practicar yoga',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eveniet, aspernatur est aliquid quam quos.'
  },
  {
    id: 2,
    slug: 'pasos-fundamentales-de-karate',
    title: 'Pasos fundamentales de karate',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eveniet, aspernatur est aliquid quam quos.'
  },
]
</script>