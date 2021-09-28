<template>
    <nav class="top-nav container">
        <div class="logo">
            <img alt="Site logo" src="../assets/img/logo.png">
        </div>
        <div class="icon">
            <i @click="toggleMobileNav" v-show="mobile" class="fas fa-angle-double-right" :class="{'icon-active' : mobileNav}"></i>
        </div>
        <transition name="fade" mode="out-in">
            <ul v-show="mobileNav" class="dropdown-menu">
                <li><router-link class="link" :to="{name: 'HOME'}">Home</router-link></li>
                <li><router-link class="link" :to="{name: 'UNO'}">Uno</router-link></li>
                <li><router-link class="link" :to="{name: 'DOS'}">Dos</router-link></li>
                <li><router-link class="link" :to="{name: 'TRES'}">Tres</router-link></li> 
            </ul>
        </transition>
        <ul v-show="!mobile">
            <li><router-link class="link" :to="{name: 'HOME'}">Home</router-link></li>
            <li><router-link class="link" :to="{name: 'UNO'}">Uno</router-link></li>
            <li><router-link class="link" :to="{name: 'DOS'}">Dos</router-link></li>
            <li><router-link class="link" :to="{name: 'TRES'}">Tres</router-link></li> 
        </ul>
    </nav>
</template>

<script>
export default {
    name: "navbar",
    data() {
        return {
            mobile: null,
            mobileNav: null,
            windowWidth: null,
        }
    },
    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },
        screenWidth() {
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <= 768) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
        }
    },
    created() {
        window.addEventListener('resize', this.screenWidth);
        this.screenWidth();
    }
}
</script>

<style lang="scss" scoped>
.top-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(90deg, rgba(222,222,222,1) 45%, rgba(204,204,204,1) 72%);
    position: relative;
    .logo {
        padding: 15px 0;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        li {
            a {
                background: linear-gradient(180deg, rgba(135,213,248,1) 45%, rgba(44,190,250,1) 72%);
                border: 1px solid gray;
                padding: 10px;
                text-decoration: none;
                color: white;
                &:hover {
                opacity: 0.6;
                transition: all 0.4s ease-out;
                }
                &.router-link-active {
                    background: rgba(0, 0, 0, 0.3);
                }
            }
        }
    }
    .dropdown-menu {
    position: fixed;
    display: flex;
    flex-direction: column;
    right: 0;
    top: 0;
    width: 100%;
    max-width: 120px;
    height: 100%;
    z-index: 1;
    justify-content: center;
    background: linear-gradient(180deg, rgba(135,213,248,1) 45%, rgba(44,190,250,1) 72%);
    transition: 0.2s ease-in all;
    a {
        padding: 15px 0;
        justify-content: center;
        display: flex;
        text-decoration: none;
        color: white;
        background: none;
        border: none;
         &.router-link-active {
            background: rgba(0, 0, 0, 0.1);
            }
        }
    }
}

.icon {
    position: absolute;
    right: 25px;
    z-index: 99;
    i {
        cursor: pointer;
        font-size: 20px;
        transition: 0.8s ease-in all;
        color: white;
    }
}
.icon-active {
    transform: rotate(180deg);
    transition: 0.2s ease-in-out all;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
</style>