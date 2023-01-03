<template>
  <article class="blog-item">
    <div class="blog-item__img-container">
      <skeletor height="117" width="226" />
    </div>
    <div class="blog-item__info">
      <div class="blog-item__title">
        <skeletor width="80%" height="25" />
      </div>
      <skeletor class="mt-2" width="80%" height="15" v-for="i in 2" />

      <skeletor class="mt-4" width="30%" height="35" pill />
    </div>
  </article>
</template>
