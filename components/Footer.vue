<template>
    <div class="footer">
        <div class="footer--inner">
            <div class="container">
                <div class="footer-top flex flex-wrap items-center">
                    <div class="footer-logo">
                        <NuxtLink to="/">
                            <img class="img-fluid" src="@/assets/images/common/logo-footer.png" alt="">
                        </NuxtLink>
                    </div>
                    <div class="footer-social flex">
                        <p class="text-white">Theo dõi Lets Sushi group qua:</p>
                        <div class="social-list">
                            <NuxtLink :href="data.setting.social.facebook" class="social-list-item">
                                <img class="img-fluid" src="@/assets/images/common/fb-ic.png" alt="">
                            </NuxtLink>
                            <NuxtLink :href="data.setting.social.instagram" class="social-list-item">
                                <img class="img-fluid" src="@/assets/images/common/ins-ic.png" alt="">
                            </NuxtLink>
                            <NuxtLink :href="data.setting.social.youtube" class="social-list-item">
                                <img class="img-fluid" src="@/assets/images/common/yt-ic.png" alt="">
                            </NuxtLink>
                            <NuxtLink :href="data.setting.social.tiktok" class="social-list-item">
                                <img class="img-fluid" src="@/assets/images/common/tiktok-ic.png" alt="">
                            </NuxtLink>
                            <NuxtLink :href="data.setting.social.zalo" class="social-list-item">
                                <img class="img-fluid" src="@/assets/images/common/zalo-ic.png" alt="">
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="footer-bot flex flex-wrap">
                    <div class="footer-info">
                        <h4 class="footer-title text-white">{{ data.setting.website.site_name }}</h4>
                        <ul class="footer-info-list">
                            <li>
                                <img class="img-fluid" src="@/assets/images/common/ic_location.png" alt="">
                                <p>
                                    {{ data.setting.website.address }}
                                </p>
                            </li>
                            <li>
                                <img class="img-fluid" src="@/assets/images/common/ic_call.png" alt="">
                                <p>
                                    {{ data.setting.contact.hotline }}
                                </p>
                            </li>
                            <li>
                                <img class="img-fluid" src="@/assets/images/common/ic_article.png" alt="">
                                <p>
                                    Mã Số thuế: {{ data.setting.contact.hotline2 }}
                                </p>
                            </li>
                            <li>
                                <img class="img-fluid" src="@/assets/images/common/ic_language.png" alt="">
                                <NuxtLink target="_blank" :href="data.setting.contact.other_website">
                                    {{ data.setting.contact.other_website }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-category">
                        <h4 class="footer-title text-white">Danh mục</h4>
                        <div class="footer-cate-content flex flex-wrap">

                            <ul class="category-list-item" v-for="(cate, index) in groupMenuSlot" :key="cate.index">
                                <li v-for="item in cate" :key="item.index">
                                    <NuxtLink :href="item.menu_link" class="category-link">
                                        {{ item.name }}
                                    </NuxtLink>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright">
            <div class="container">
                <p>© 2022 Bản quyền thuộc về Lets Sushi Việt Nam</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const { data } = await useFetch('/api/footer');
const footer = await data.value.footers;

const groupMenuSlot = computed(() => {
    const perChunk = 5;

    if (typeof footer !== 'undefined') {
        const result = footer.reduce((resultArray, item, index) => {
            const chunkIndex = Math.floor(index / perChunk);
            if (!resultArray[chunkIndex]) {
                resultArray[chunkIndex] = []
            }
            resultArray[chunkIndex].push(item);
            return resultArray;
        }, [])

        return result
    }
});


</script>

<style lang="scss" scoped>
.footer {
    position: relative;

    .footer--inner {
        position: relative;
        background: #111111;
        padding-top: 10px;
        padding-bottom: 40px;
    }

    .footer-top {
        justify-content: space-between;
        margin-bottom: 40px;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);

        .footer-logo {
            flex: 0 0 auto;
            width: 64px;

            img {
                display: block;
                max-width: 100%;
            }
        }

        .footer-social {
            align-items: center;

            p {
                font-family: 'Roboto', sans-serif;
                font-weight: 400;
                font-size: 14px;
                line-height: calc(24 / 14);
                letter-spacing: 0.15px;
                margin: 0;

                @media (max-width: 767px) {
                    text-align: center;
                }
            }

            .social-list {
                margin-left: 20px;
                display: flex;
                align-items: center;
                gap: 10px;

                @media (max-width: 767px) {
                    margin-left: 0;
                    margin-top: 10px;
                    justify-content: center;
                }
            }

            .social-list-item {
                flex: 0 0 auto;
                width: 36px;

                img {
                    display: block;
                    max-width: 100%;
                }
            }

            @media (max-width: 767px) {
                flex: 0 0 auto;
                width: 100%;
                display: block;
            }
        }

        @media (max-width: 767px) {
            gap: 20px;
            padding-bottom: 20px;
            justify-content: center;
        }
    }

    .footer-bot {

        .footer-info {
            flex: 0 0 auto;
            width: 32.3%;

            @media (max-width: 992px) {
                width: 270px;
            }

            @media (max-width: 767px) {
                width: 100%;
                order: 1;
            }
        }

        .footer-category {
            flex: 1;
            padding-left: 40px;

            @media (max-width: 992px) {
                padding-left: 30px;
            }

            @media (max-width: 767px) {
                order: 0;
                padding-left: 0;
                width: 100%;
                margin-bottom: 30px;
            }
        }

        .footer-title {
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            font-size: 16px;
            line-height: calc(24 / 16);
            letter-spacing: 0.15px;
            margin-bottom: 20px;
        }

        .footer-info-list {
            margin: 0;
            padding: 0;

            li {
                list-style: none;
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 10px;

                img {
                    display: block;
                    max-width: 24px;
                }

                p,
                a {
                    font-family: 'Roboto', sans-serif;
                    ;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: calc(24 / 14);
                    color: #666666;
                    letter-spacing: 0.15px;
                    margin: 0;
                }

                a {
                    display: inline-block;
                    text-decoration: none;
                }
            }
        }

        .footer-cate-content {
            gap: 20px;
        }

        .category-list-item {
            flex: 0 0 auto;
            width: calc((100% / 3) - (20px * 2 / 3));
            margin: 0;
            padding: 0;

            li {
                list-style: none;
                margin-bottom: 4px;
                line-height: 1;
            }

            .category-link {
                display: inline-block;
                font-weight: 400;
                font-size: 14px;
                line-height: calc(24 / 14);
                letter-spacing: 0.15px;
                color: #666666;
                text-decoration: none;
                transition: all 0.3s;

                &:hover {
                    color: #ffffff;
                }
            }

            @media (max-width: 767px) {
                width: calc((100% / 2) - (20px / 2));
            }
        }
    }

    .copyright {
        position: relative;
        background: #000000;
        padding: 38px 0;

        p {
            font-family: 'Roboto', sans-serif;
            ;
            font-weight: 400;
            font-size: 14px;
            line-height: calc(16 / 14);
            text-align: center;
            color: #666666;
            letter-spacing: 0.15px;
            margin-bottom: 0;
        }
    }
}
</style>