<template>
  <div class="card__outer">
    <div class="card__inner">
      <div class="card__elements">
        <skeletor circle height="80" width="80" />
        <h4 class="card__title">
          <skeletor width="50%" height="10" />
        </h4>
        <p class="card__text">
          <Skeletor width="85%" height="10" />
        </p>
      </div>
      <logo-dots />
    </div>
  </div>
</template>

<style scoped>
:deep(.card__elements) {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

:deep(.card__title),
:deep(.card__text) {
  width: 90%;
  display: flex;
  justify-content: center;
  margin-top: 0.625rem;
}
</style>
