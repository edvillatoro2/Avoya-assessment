<template>
  <div>
    <Navbar class="mb50"></Navbar>
    <router-view v-slot="{Component}">
      <transition name="fade" mode="out-in">
        <component :is="Component">
        </component>
      </transition>
    </router-view>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

// globals 

body {
  background: linear-gradient(180deg, rgba(222,222,222,1) 35%, rgba(255,255,255,1) 59%);
}

.container {
  padding: 0 25px;
}

.mb50 {
  margin-bottom: 50px;
}

.mb50 {
  margin-bottom: 50px;
}

.mt50 {
  margin-top: 50px;
}

.mb25 {
  margin-bottom: 25px;
}

.mb15 {
  margin-bottom: 15px;
}

// transitions

.fade-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.fade-enter-active {
  transition: all 0.6s ease-out;
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
.fade-leave-active {
  transition: all 0.6s ease-in;
}
</style>
