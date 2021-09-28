<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide" />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  props: ["startAutoPlay", "timeout"],
  setup(props) {
    const currentSlide = ref(1);
    const getSlideCount = ref(null);
    const autoPlayEnabled = ref(4000
    );
    const timeoutDuration = ref(props.timeout === undefined ? 3000 : props.timeout);
    // next slide
    const nextSlide = () => {
      if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value += 1;
    };
    // prev slide
    const prevSlide = () => {
      if (currentSlide.value === 1) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value -= 1;
    };

    // auto play
    const autoPlay = () => {
      setInterval(() => {
        nextSlide();
      }, timeoutDuration.value);
    };
    if (autoPlayEnabled.value) {
      autoPlay();
    }
    onMounted(() => {
      getSlideCount.value = document.querySelectorAll(".slide").length;
    });
    return {
      currentSlide,
      nextSlide,
      prevSlide,
    };
  },
};
</script>