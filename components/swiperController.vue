<script setup lang="ts">
const swiper = useSwiper();

defineProps({
  class: {
    type: String,
  },
});
</script>

<template>
  <div :class="class">
    <button @click="swiper.slideNext()" class="swiper-button-next">
      <img class="img-fluid" src="@/assets/images/common/slide-next.png" alt="" />
    </button>
    <button @click="swiper.slidePrev()" class="swiper-button-prev">
      <img class="img-fluid" src="@/assets/images/common/slide-prev.png" alt="" />
    </button>
  </div>
</template>
