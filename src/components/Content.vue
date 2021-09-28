<template>
  <div>
      <div class="flex-container">
          <div class="content">
              <h4 class="mb15">This is Some Content</h4>
              <img class="content-pics" src="../assets/img/column-left.jpg">
              <p>Far far away, behind the word montains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          </div>
          <div class="content">
              <h4 class="mb15">This is Some Content</h4>
              <img class="content-pics" src="../assets/img/column-center.jpg">
              <ul>
                  <li><img src="../assets/img/list.png"> Sed lacinia enim et nisl viverra.</li>
                  <li><img src="../assets/img/list.png"> Nullam elementum quam in luctus.</li>
                  <li><img src="../assets/img/list.png"> Integer ac et lacus hendrerit pretium.</li>
                  <li><img src="../assets/img/list.png"> Donec placerat dui et blandit.</li>
                  <li><img src="../assets/img/list.png"> Nullam elementum quam in luctus.</li>
              </ul>
          </div>
          <div class="content">
                <h4 class="mb15">What Others Are Saying</h4>
                <div class="comments" v-for="comment in comments" :key="comment.id">
                    <h4 class="our-comments">"{{comment.comment}}"</h4>
                    <p class="name">- {{comment.name}}
                    </p>

                </div>
          </div>
      </div>
  </div>
</template>

<script>

import CommentService from '../services/CommentService.js';
// import moment from 'moment';

export default {
    name: "comments",
    data() {
        return {
            comments: null
        }
    },
    created() {
        CommentService.getComments()
        .then(response => {
            this.comments = response.data
        })
        .catch(error => {
            console.log(error)
        });
    },
}
</script>

<style lang="scss" scoped>
    .flex-container {
        display: grid;
        grid-auto-rows: 1fr;
        grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
        gap: 2rem;
        .content {
            h4 {
                font-size: 24px;
                font-weight: 300;
                &.our-comments {
                    font-size: 18px;
                    font-weight: 300;
                }
            }
            .content-pics {
                    border: 4px solid white;
                    box-shadow: rgba(0, 0, 0, 0.4) 4px 4px 5px;
                    width: 100%;
                }
            p {
                line-height: 2;
                font-size: 18px;
                &.name {
                    font-weight: 700;
                }
            }
            li {
                list-style-type: none;
                font-size: 18px;
                font-weight: 300;
                line-height: 1.5;
            }
            .comments {
                background-color: #D8D8D8;
                padding: 5px;
                &:nth-of-type(even) {
                    background-color: #C4D3E0;
                }
            }
        }
    }

</style>