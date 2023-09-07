<template>
  <div class="home-comment">
    <div class="container">
      <div class="home-comment-wrapper">
        <div class="comment--inner">
          <h3 class="section-title text-center orange-text">
            Khách hàng nói gì <br />
            về Lest Sushi
          </h3>

          <div class="comment-slider">
            <swiper
              class="slider-comment-text"
              :navigation="{ enabled: true, prevEl: '.home-comment-wrapper .swiper-button-prev', nextEl: '.home-comment-wrapper .swiper-button-next' }"
              :effect="'fade'"
              :fade-effect="{
                crossFade: true,
              }"
              :spaceBetween="0"
              :watchSlidesProgress="true"
              :autoplay="{
                delay: 3000,
              }"
              :auto-height="true"
              :breakpoints="{
                '992': {
                  autoHeight: false,
                },
              }"
              :thumbs="{ swiper: thumbsSwiper }"
              :modules="modules"
            >
              <swiper-slide v-for="(item, idx) in comment" :key="idx">
                <div class="comment-text">
                  <h4 class="text-title">{{ item.desc.title }}</h4>
                  <p class="text-des">{{ item.desc.short_description }}</p>
                  <a href="javascript:;" class="comment-readmore" data-bs-toggle="modal" data-bs-target="#commentModal">Xem thêm</a>
                </div>
              </swiper-slide>
            </swiper>

            <swiper
              class="slider-comment-image"
              :effect="'fade'"
              :fade-effect="{
                crossFade: true,
              }"
              :spaceBetween="0"
              :watchSlidesProgress="true"
              @swiper="setThumbsSwiper"
              :modules="modules"
            >
              <div class="image-deco">
                <div class="deco-round solid"></div>
                <div class="deco-round border"></div>
                <div class="deco-img">
                  <img class="img-fluid" src="@/assets/images/home/comment-img-deco.png" alt="" />
                </div>
              </div>
              <swiper-slide v-for="(item, idx) in comment" :key="idx">
                <div class="comment-img">
                  <div class="comment-img--inner">
                    <img class="img-fluid" :src="item.image" alt="" />
                  </div>
                </div>
                <p class="comment--name">{{ item.desc.customer_name }}</p>
              </swiper-slide>
            </swiper>
          </div>

          <div class="slide-controller">
            <div class="swiper-button-prev">
              <img class="img-fluid" src="@/assets/images/common/slide-prev.png" alt="" />
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next">
              <img class="img-fluid" src="@/assets/images/common/slide-next.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';

import { Navigation, Thumbs, EffectFade } from 'swiper';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {};
  },
  setup() {
    const thumbsSwiper = ref(null);

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };

    const { data } = useFetch('/api/homeComment');
    const comment = data.value;

    return {
      modules: [Navigation, Thumbs, EffectFade],
      comment,
      thumbsSwiper,
      setThumbsSwiper,
    };
  },
};
</script>

<style lang="scss" scoped>
.home-comment {
  position: relative;
  padding-bottom: 120px;

  .home-comment-wrapper {
    position: relative;
    background: $white;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.15);
    padding: 70px 0 40px;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 50%;
      background: linear-gradient(180deg, #bdbdbd 0%, rgba(217, 217, 217, 0) 100%);

      @media (max-width: 992px) {
        height: 44.11%;
      }
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('@/assets/images/home/comment-bg.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;

      @media (max-width: 992px) {
        background-position: bottom center;
        background-repeat: no-repeat;
        background-size: 120% 120%;
      }

      @media (max-width: 767px) {
        background: url('@/assets/images/home/comment-mb-bg.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }

    @media (max-width: 992px) {
      padding: 40px 0;
    }

    @media (max-width: 767px) {
      padding: 118px 0 20px;
    }
  }

  .comment--inner {
    position: relative;
    z-index: 1;
  }

  .section-title {
    margin-bottom: 40px;
  }

  .comment-slider {
    max-width: 74.53%;
    margin-left: auto;
    margin-right: 10.07%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;

    @media (max-width: 992px) {
      margin: 0 auto;
      max-width: 100%;
      padding: 0 40px;
    }

    @media (max-width: 767px) {
      padding: 0 24px;
      // flex-direction: column-reverse;
    }
  }

  .slider-comment-text {
    flex: 0 0 auto;
    width: 56.75%;
    margin: 0;
    height: 100%;

    @media (max-width: 767px) {
      width: 100%;
      margin-bottom: 60px;
    }
  }

  .comment-text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 30px;

    .text-title {
      font-weight: 700;
      font-size: 20px;
      line-height: calc(25 / 20);
      color: $dark_organe;
      margin-bottom: 10px;

      @media (max-width: 1199px) {
        font-size: 18px;
      }

      @media (max-width: 992px) {
        font-size: 16px;
      }
    }
    .text-des {
      font-weight: 400;
      font-size: 20px;
      line-height: calc(33 / 20);
      color: $dark;
      margin-bottom: 0;
      @include line-clamp(3);

      @media (max-width: 1199px) {
        font-size: 18px;
      }

      @media (max-width: 992px) {
        font-size: 16px;
      }
    }

    .comment-readmore {
      font-weight: 400;
      font-size: 16px;
      line-height: calc(19 / 16);
      color: $dark_organe;
      display: none;

      &.show {
        display: block;
      }

      @media (max-width: 992px) {
        font-size: 14px;
      }
    }

    @media (max-width: 1199px) {
      padding-bottom: 0;
    }

    @media (max-width: 767px) {
      display: block;
    }
  }

  .slider-comment-image {
    position: relative;
    flex: 0 0 auto;
    width: 27.65%;
    margin: 0;
    overflow: visible;

    .comment-img {
      padding: 4px;
      border-radius: 50%;
      background: $white;
      overflow: hidden;
      margin-bottom: 11px;

      .comment-img--inner {
        @include ratio-img(100%);
      }
    }

    .comment--name {
      text-align: center;
      font-weight: 700;
      font-size: 16px;
      line-height: calc(25 / 16);
      margin-bottom: 0;
    }

    // deco
    .image-deco {
      // @media (max-width: 1199px) {
      //   display: none;
      // }
    }

    .deco-round {
      position: absolute;
      width: 122%;
      height: 100%;
      border-radius: 50%;
      overflow: hidden;
      padding-bottom: 122%;

      &.solid {
        top: -21%;
        right: 3.7%;
        background: rgba(208, 74, 42, 0.2);
      }

      &.border {
        top: -29%;
        right: -14%;
        border: 2px solid rgba(208, 74, 42, 0.2) !important;
      }
    }

    .deco-img {
      position: absolute;
      top: 0;
      left: -50px;
      width: 56px;
      height: auto;

      img {
        display: block;
        max-width: 100%;
      }

      @media (max-width: 1199px) {
        width: 44px;
      }

      @media (max-width: 767px) {
        width: 34px;
      }
    }

    @media (max-width: 767px) {
      width: 146px;
      margin: 0 auto 30px;
    }
  }

  .slide-controller {
    flex: 0 0 auto;
    width: 100%;
    margin-top: 30px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    .swiper-button-prev,
    .swiper-button-next,
    .swiper-pagination {
      position: relative;
      top: 0;
      left: 0;
      right: unset;
      bottom: unset;
      width: auto;

      &::after {
        display: none;
      }
    }

    .swiper-button-prev,
    .swiper-button-next {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: $dark_organe;
      margin-top: 0;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);

      img {
        display: block;
      }

      @media (max-width: 767px) {
        width: 25px;
        height: 25px;
      }

      &.swiper-button-disabled {
        opacity: 1;
        background: #999999;
      }
    }
  }

  @media (max-width: 767px) {
    padding-bottom: 70px;
  }
}
</style>
