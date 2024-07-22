<template>
  <header class="flex flex-col items-center">
    <h3 class="font-black text-3xl text-center lg:text-[40px]"><slot /></h3>
    <CommonDots class="[&>div]:w-3 [&>div]:h-3 w-max gap-1" />
  </header>
</template>
