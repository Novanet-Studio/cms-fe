<template>
  <transition name="fade" appear>
    <div>
      <the-header />
      <main class="container mx-auto mt-6">
        <app-button @click="$router.push('/blog')" icon="back-arrow.svg"
          class="text-[10px] text-secondary bg-[#E6E7E8] px-6 py-3 mb-5">
          Volver al blog
        </app-button>
        <div class="grid grid-cols-[70%_30%] gap-24">
          <slot />
          <aside>
            <header>
              <logo-dots />
              <h1 class="text-3xl font-black mt-2">Tienda</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime qui reprehenderit saepe dignissimos.
                Quo, consequatur!</p>
            </header>
            <div class="flex flex-col gap-8 mt-10 mb-20">
              <icon-card v-for="(item, index) in storeItems" :key="index" :icon="item.image" :title="item.text"
                wrapper-class="flex-col" text-class="mt-4 ml-0" title-class="!text-xl" size="large" />
              <!-- <card-overlay v-for="(item, index) in storeItems" :key="index" :image="item.image" :text="item.text" /> -->
            </div>
          </aside>
        </div>
      </main>
      <the-footer />
    </div>
  </transition>
</template>

<script lang="ts" setup>
const storeItems = [
  {
    image: 'https://images.pexels.com/photos/1415810/pexels-photo-1415810.jpeg',
    text: 'Caballeros',
  },
  {
    image: 'https://images.pexels.com/photos/3775161/pexels-photo-3775161.jpeg',
    text: 'Damas',
  },
  {
    image: 'https://images.pexels.com/photos/2326887/pexels-photo-2326887.jpeg',
    text: 'Niños',
  }
]
</script>