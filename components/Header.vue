<template>
    <div class="header">
        <div class="container">
            <div class="header--inner flex flex-wrap">
                <div class="header-left">
                    <div class="header-logo">
                        <NuxtLink to="/" title="">
                            <img class="img-fluid" src="@/assets/images/common/logo-header.png" alt="">
                        </NuxtLink>
                    </div>
                </div>
                <div class="header-right">
                    <div class="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <a href="javascritp:;" class="mb-product-status js-search-order">
                        <img class="img-fluid" src="@/assets/images/common/view_in_ar.png" alt="">
                    </a>
                    <div class="backdrop-overlay"></div>
                    <div class="header-content flex flex-wrap items-center justify-between">
                        <a href="javascript:;" class="mb-close-menu">
                            <img class="img-fluid" src="@/assets/images/common/close-ic.png" alt="">
                        </a>
                        <div class="header-content-left">
                            <div class="header-nav-list flex flex-wrap items-center">
                                <NuxtLink :to="item.link_web" class="header-nav-link" v-for="item in data" :key="item.id">
                                    {{ item.name }}
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="header-content-right">
                            <div class="header-product">
                                <a href="javascript:;" class="header-product-btn js-search-order">
                                    <img class="img-fluid" src="@/assets/images/common/view_in_ar.png" alt="">

                                    Tra cứu đơn hàng
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="dropdown-sub-content">
                        <form action="">
                            <input id="phone-search" name="phone" type="text" placeholder="Nhập số điện thoại..." />
                            <button id="phone-search_submit" class="border-0 pill-btn" type="submit">
                                Đặt bàn ngay

                                <img class="img-fluid" src="@/assets/images/common/arrow-right.png" alt="">
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { data } = await useFetch('/api/header');

</script>

<style lang="scss" scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 112;
    background: transparent;
    transition: all 0.3s;
    background-color: #e13c16;

    .header--inner {
        position: relative;
    }

    .header-left {
        flex: 0 0 auto;
        width: 96px;

        @media (max-width: 992px) {
            width: 82px;
        }
    }

    .header-right {
        flex: 1;
        padding-left: 50px;

        @media (max-width: 1199px) {
            padding-left: 20px;
        }
    }

    .header-logo {
        img {
            display: block;
            margin: 0 auto;
            max-width: 100%;
        }
    }

    .header-content {
        height: 100%;

        @media (max-width: 992px) {
            position: fixed;
            top: 0;
            right: 0;
            width: 80vw;
            max-width: 300px;
            height: 100vh;
            background-color: #e13c16;
            padding: 100px 20px 70px;
            display: block !important;
            transform: translateX(100%);
            transition: all 0.3s;
            z-index: 10;
        }

        &.show {
            transform: translateX(0);
        }
    }

    .mb-close-menu {
        display: none;

        position: absolute;
        top: 10px;
        right: 10px;
        padding: 10px;
        z-index: 2;

        img {
            display: block;
            max-width: 15px;
        }

        @media (max-width: 992px) {
            display: block;
        }
    }

    .backdrop-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: none;
        z-index: 9;

        &.show {
            display: block;
        }
    }

    .hamburger {
        display: none;

        span {
            width: 24px;
            height: 2px;
            background: #ffffff;
            margin: 4px 0;
            display: block;
        }

        @media (max-width: 992px) {
            display: block;
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
        }
    }

    .mb-product-status {
        display: none;

        img {
            display: block;
            max-width: 24px;
        }

        @media (max-width: 992px) {
            display: block;
            position: absolute;
            top: 50%;
            right: calc(24px + 20px);
            transform: translateY(-50%);
        }
    }

    .header-nav-list {
        gap: 40px;

        @media (max-width: 1199px) {
            gap: 15px;
        }

        @media (max-width: 992px) {
            gap: 30px;
        }
    }

    .header-nav-link {
        position: relative;
        display: block;
        // @include font('Roboto', 700, 14px, calc(16 / 14));
        opacity: 0.8;
        color: #ffffff;
        text-decoration: none;
        text-transform: uppercase;

        &::before {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 0;
            height: 2px;
            width: 100%;
            background: #ffffff;
            opacity: 0;

            @media (max-width: 992px) {
                bottom: 0;
            }
        }

        &.active {
            opacity: 1;

            &::before {
                opacity: 1;
            }
        }

        &:hover {
            opacity: 1;
        }

        @media (max-width: 992px) {
            flex: 0 0 auto;
            width: 100%;
            padding-bottom: 10px;
        }
    }

    .header-content-right {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 20px;
        height: 100%;

        @media (max-width: 1199px) {
            gap: 15px;
        }

        @media (max-width: 992px) {
            height: auto;
            margin-bottom: 40px;
        }
    }

    .header-content-left {
        @media (max-width: 992px) {
            margin-bottom: 40px;
        }
    }

    .header-product {
        position: relative;
        height: inherit;

        @media (max-width: 992px) {
            width: 100%;
            display: none;
        }
    }

    .header-product-btn {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        height: inherit;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        // @include font('Roboto', 700, 14px, calc(16 / 14));
        color: #ffffff;
        background: rgba(0, 0, 0, 0.2);
        padding: 20px;

        @media (max-width: 1199px) {
            padding: 15px;
        }
    }

    .header-search {
        flex: 0 0 auto;
        width: 300px;
        position: relative;

        @media (max-width: 1199px) {
            width: 230px;
        }

        @media (max-width: 992px) {
            width: 100%;
        }
    }

    .dropdown-sub-content {
        padding: 40px;
        background: #ffffff;
        position: absolute;
        top: 100%;
        right: 0;
        width: 100%;
        max-width: 400px;
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.35);

        opacity: 0;
        pointer-events: none;
        transition: all 0.3s;

        input {
            border: 1px solid #bdbdbd;
            border-radius: 4px;
            background: #ffffff;
            padding: 16px 20px;
            font-family: 'Roboto', sans-serif;
            ;
            font-weight: 400;
            font-size: 14px;
            line-height: calc(16 / 14);
            width: 100%;

            &::placeholder {
                color: #999999;
            }

            &:focus {
                outline: none;
                box-shadow: none;
            }
        }

        .pill-btn {
            margin-top: 20px;
            max-width: 196px;
            padding: 12px;
        }

        &.show {
            opacity: 1;
            pointer-events: all;
            transition: all 0.3s;
        }
    }
}
</style>