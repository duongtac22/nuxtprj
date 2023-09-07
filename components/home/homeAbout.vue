<template>
  <div>
    <div class="home-about about-map">
      <div class="container">
        <div class="home-about--inner">
          <h3 class="section-title orange-text wow fadeInUp">{{ aboutUsStory.desc.name }}</h3>

          <div class="home-about-content wow fadeInUp">
            <p>{{ aboutUsStory.desc.name_two }}</p>
            <p>
              {{ aboutUsStory.desc.short_description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="home-gallery wow fadeIn">
      <div class="home-gallery--inner" id="js-scroll-horizontal">
        <swiper
          :speed="1500"
          :slides-per-view="1.1"
          :watchSlidesProgress="true"
          :navigation="{ enabled: true, prevEl: '.home-gallery--inner .swiper-button-prev', nextEl: '.home-gallery--inner .swiper-button-next' }"
          :scrollbar="{
            enabled: true,
            draggable: false,
            hide: false,
            dragSize: 30,
          }"
          :breakpoints="{
            '768': {
              slidesPerView: 3,
            },
          }"
          :modules="modules"
        >
          <swiper-slide v-for="(item, idx) in aboutUsGalleryItem" :key="idx">
            <div class="gallery-item">
              <a href="javascript:;" data-fancybox="images">
                <img class="img-fluid" :src="item.item_image" alt="" />
              </a>
            </div>
          </swiper-slide>
        </swiper>

        <div class="swiper-button-prev">
          <img class="img-fluid" src="@/assets/images/common/slide-prev.png" alt="" />
        </div>
        <div class="swiper-button-next">
          <img class="img-fluid" src="@/assets/images/common/slide-next.png" alt="" />
        </div>
        <div class="swiper-scrollbar"></div>
      </div>
    </div> -->

    <div class="home-about about-sushi">
      <div class="container">
        <div class="home-about--inner">
          <h3 class="section-title orange-text wow fadeInUp">{{ aboutUsForEveryone.desc.name }}</h3>

          <div class="home-about-content wow fadeInUp">
            <p>{{ aboutUsForEveryone.desc.name_two }}</p>
            <p>
              {{ aboutUsForEveryone.desc.short_description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="home-feature">
      <div class="container">
        <h3 class="section-title text-center orange-text">{{ aboutAdvantage.desc.name }}</h3>

        <div :class="idx % 2 == 0 ? 'feature-item item-reverse' : 'feature-item'" v-for="(item, idx) in aboutAdvantageItem" :key="idx">
          <div class="feature-image">
            <img class="img-fluid" :src="item.item_image" alt="" />
          </div>
          <div class="feature-content wow fadeInUp">
            <h4 class="index">0{{ idx + 1 }}.</h4>
            <div class="feature-content-text">
              {{ item.item_short_description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/homeAbout');

const aboutUsStory = data.value.aboutUsStory;

const aboutUsForEveryone = data.value.aboutUsForEveryone;

const aboutAdvantage = data.value.aboutUsAdvantage;

const aboutAdvantageItem = JSON.parse(aboutAdvantage.desc.item);

const aboutUsGalleryItem = JSON.parse(aboutUsStory.desc.item);
</script>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Scrollbar } from 'swiper';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {};
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Scrollbar],
    };
  },
};
</script>

<style lang="scss" scoped>
.home-about {
  position: relative;

  .home-about--inner {
    padding: 130px 0;
    text-align: center;

    @media (max-width: 992px) {
      padding: 118px 0;
    }
  }

  .home-about-content {
    font-weight: 400;
    font-size: 20px;
    line-height: calc(32 / 20);
    max-width: 640px;
    margin: 0 auto;

    p {
      margin-bottom: 10px;
    }

    @media (max-width: 992px) {
      font-size: 18px;
    }
    @media (max-width: 767px) {
      font-size: 16px;
    }
  }

  &.about-map {
    .home-about--inner {
      background-image: url('@/assets/images/home/about-map-bg.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  &.about-sushi {
    .home-about--inner {
      background-image: url('@/assets/images/home/about-deco-bg.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;

      @media (max-width: 992px) {
        background-size: 100% 80%;
      }

      @media (max-width: 767px) {
        background: transparent;
      }
    }

    @media (max-width: 767px) {
      background-image: url('@/assets/images/home/about-mb-deco-bg.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      margin-bottom: 20px;
    }
  }
}

.home-feature {
  position: relative;
  padding-bottom: 50px;

  .section-title {
    margin-bottom: 40px;

    @media (max-width: 767px) {
      margin-bottom: 20px;
    }
  }

  .feature-item {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 70px;

    .feature-image {
      flex: 0 0 auto;
      width: 57.69%;
      @include ratio-img(66.66%);

      @media (max-width: 992px) {
        width: 50%;
      }

      @media (max-width: 767px) {
        width: 100%;
        // order: 1;
        margin-bottom: 20px;
      }
    }

    .feature-content {
      flex: 1;
      margin-bottom: 40px;
      padding-left: 70px;

      .index {
        @include font('Montserrat', 700, 32px, calc(39 / 32));
        color: $color_D1D0B4;
        margin-bottom: 10px;

        @media (max-width: 1199px) {
          font-size: 28px;
        }

        @media (max-width: 992px) {
          font-size: 24px;
        }

        @media (max-width: 767px) {
          font-size: 20px;
        }
      }

      .feature-content-text {
        font-weight: 400;
        font-size: 20px;
        line-height: calc(33 / 20);
        color: $darker;

        * {
          margin: 0;
        }

        @media (max-width: 1199px) {
          font-size: 18px;
        }

        @media (max-width: 992px) {
          font-size: 16px;
        }
      }

      @media (max-width: 1199px) {
        padding-left: 50px;
      }

      @media (max-width: 992px) {
        margin-bottom: 20px;
      }

      @media (max-width: 767px) {
        padding-left: 0;
        // order: 0;
      }
    }

    &.item-reverse {
      flex-direction: row-reverse;

      .feature-content {
        padding-left: 0;
        padding-right: 70px;

        @media (max-width: 1199px) {
          padding-right: 50px;
        }

        @media (max-width: 767px) {
          padding-right: 0;
        }
      }
    }

    @media (max-width: 992px) {
      margin-bottom: 40px;

      &:last-child {
        margin-bottom: 20px;
      }
    }
  }

  @media (max-width: 1199px) {
    padding-bottom: 20px;
  }
}
</style>
