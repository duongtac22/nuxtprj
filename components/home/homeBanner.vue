<template>
  <div class="home-banner-slider">
    <swiper
      :slides-per-view="1"
      :speed="1500"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: true,
      }"
      :navigation="{ enabled: true, prevEl: '.home-banner-slider .swiper-button-prev', nextEl: '.home-banner-slider .swiper-button-next' }"
      :pagination="{
        enabled: true,
        clickable: true,
        el: '.home-banner-slider .swiper-pagination',
      }"
      :modules="modules"
    >
      <swiper-slide v-for="(items, idx) in data" :key="idx">
        <div class="home-banner-item item-video" v-if="items.desc.link != null">
          <iframe
            width="100%"
            height="100%"
            :src="items.desc.link"
            allow="autoplay"
            allowfullscreen="allowfullscreen"
            style="width: 1920px; height: 1080px"
          ></iframe>
        </div>
        <div class="home-banner-item item-image" v-else>
          <img class="img-fluid" :src="items.desc.image" alt="" />
        </div>
      </swiper-slide>
    </swiper>

    <div class="slide-navigation">
      <div class="swiper-button-prev">
        <img class="img-fluid" src="@/assets/images/common/slide-prev.png" alt="" />
      </div>
      <div class="swiper-button-next">
        <img class="img-fluid" src="@/assets/images/common/slide-next.png" alt="" />
      </div>
    </div>

    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const { data } = useFetch('/api/homeBanner');

    return {
      modules: [Navigation, Pagination],
      data,
    };
  },
};
</script>

<style lang="scss">
.home-banner-slider {
  position: relative;

  .swiper-slide {
    height: calc(100vh - 80px);

    @media (max-width: 1199px) {
      height: 100%;
    }
  }

  .home-banner-item {
    height: 100%;
    overflow: hidden;

    @media (max-width: 1199px) {
      @include ratio-img(48.61%);
    }

    @media (max-width: 767px) {
      @include ratio-img(300px);
    }

    img {
      display: block;
      object-fit: cover;
      object-position: center;
      max-width: 100%;

      @media (max-width: 1199px) {
        object-position: unset;
      }
    }

    iframe {
      width: 100% !important;
      height: 100% !important;
      pointer-events: none;

      @media (max-width: 1199px) {
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }

  .slide-navigation {
    .swiper-button-prev,
    .swiper-button-next {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: $dark_organe;

      @media (max-width: 767px) {
        width: 25px;
        height: 25px;
      }

      &::after {
        display: none;
      }

      &.swiper-button-disabled {
        opacity: 1;
        background-color: transparent;
      }
    }

    .swiper-button-prev {
      left: 70px;

      @media (max-width: 1400px) {
        left: 12px;
      }
    }

    .swiper-button-next {
      right: 70px;

      @media (max-width: 1400px) {
        right: 12px;
      }
    }
  }

  .swiper-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
      background-color: $white;
      margin: 0 5px;

      &.swiper-pagination-bullet-active {
        border: 4px solid $white;
        background: $dark_organe;
        width: 16px;
        height: 16px;

        @media (max-width: 767px) {
          width: 8px;
          height: 8px;
          border: 2px solid $white;
        }
      }

      @media (max-width: 767px) {
        width: 4px;
        height: 4px;
      }
    }
  }
}
</style>
