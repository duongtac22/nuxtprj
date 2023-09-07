<template>
  <div>
    <Header></Header>

    <div class="master-wrapper">
      <slot />
    </div>

    <Footer></Footer>
  </div>
</template>

<script setup></script>

<style lang="scss">
.master-wrapper {
  position: relative;
  padding-top: 80px;
  background-color: #f2f1e1;

  @media (max-width: 992px) {
    padding-top: 68px;
  }
}
</style>
