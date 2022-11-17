<template>
  <div :class="wrapperClass" class="flex">
    <div :class="[imgClass, wrapperImageSize.wrapper]"
      class="w-40 h-40 flex justify-center items-center border border-[rgba(167,169,172,0.75)] rounded-[1.25rem]">
      <nuxt-img :src="icon" class="w-36 h-36" :class="wrapperImageSize.image" />
    </div>
    <div class="w-auto ml-4" :class="textClass" v-if="title || content">
      <h2 :class="titleClass" class="text-2xl text-secondary font-extrabold" v-if="title">{{ title }}</h2>
      <p class="max-w-72" v-if="content">{{ content }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  icon: string;
  title?: string;
  content?: string;
  textClass?: string;
  wrapperClass?: string;
  imgClass?: string;
  titleClass?: string;
  size?: 'small' | 'normal' | 'large';
}

const props = withDefaults(defineProps<Props>(), {
  size: 'normal'
});

const wrapperImageSize = computed(() => {
  if (props.size === 'small') {
    return { wrapper: '!w-36 !h-36', image: '!w-30 !h-30' };
  }

  if (props.size === 'normal') {
    return { wrapper: '!w-40 !h-40', image: '!w-36 !h-36' };
  }

  return { wrapper: '!w-74 !h-52', image: '!w-64 !h-44' };
});
</script>