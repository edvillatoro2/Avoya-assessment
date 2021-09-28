<template>
  <div class="slide">
    <transition name="fade">
      <slot />
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

.fade-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.fade-enter-active {
  transition: all 0.6s ease-out;
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.fade-leave-active {
  transition: all 0.6s ease-in;
}
</style>