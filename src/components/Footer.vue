<template>
  <div class="background">
      <div class="flex">
          <p>&#169; copyright, All Rights Reserved.</p>
          <ul>
            <li><router-link class="link" :to="{name: 'HOME'}">Home</router-link></li>
            <li><router-link class="link" :to="{name: 'UNO'}">Uno</router-link></li>
            <li><router-link class="link" :to="{name: 'DOS'}">Dos</router-link></li>
            <li><router-link class="link" :to="{name: 'TRES'}">Tres</router-link></li> 
            </ul>
      </div>
  </div>
</template>

<style lang="scss" scoped>
    .background {
        background-color: #D8D8D8;
        padding: 10px 25px;
        .flex {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            ul {
                list-style-type: none;
                display: flex;
                li {
                    margin-right: 15px;
                    color: #868686;
                    &:last-of-type {
                        margin-right: 0;
                        &::after {
                            content: " ";
                            display: none;
                        }
                    }
                    a {
                        color: #868686;
                    }
                    &::after {
                        content: "";
                        border-left: 1px solid #868686;
                        height: 200px;
                        margin-left: 10px;
                    }
                }
            }
            p {
                color: #868686;
            }
        }
    }
</style>