<template>
  <div class="review">
    <v-flex xs4 >
      <v-card class="card">
        <v-card-title primary-title class="review-header">
          <rating v-bind:score="review.rating"/>
          <div class="review-details">
            <h3 class="headline mb-0 course-label">{{review.course}}</h3>
            <h3 class="semester-label">{{review.semester}} {{review.year}}</h3>
          </div>
        </v-card-title>
        <v-card-text class="review-body" v-bind:class="{ expanded: review.expanded }">
          <span v-bind:class="{ lineclamp: !review.expanded }">{{review.text}}</span>
        </v-card-text>
        <v-card-actions>
          <v-btn flat color="orange" v-on:click="expandReview(review.id)"><span v-if="!review.expanded">More</span><span v-if="review.expanded">Less</span></v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>

  </div>
</template>

<script>
import Rating from './Rating.vue'

export default {
  name: 'Review',

  components: {
    Rating
  },

  props: {

  },

  data: function () {
    return {
      reviews: [],
    };
  },

  created: function () {

  },

  computed: {

  },

  methods: {
    expandReview: function(reviewId) {
      for (var i = 0; i < this.reviews.length; i++) {
        if (this.reviews[i].id == reviewId) {
          this.reviews[i].expanded = !this.reviews[i].expanded;
        }
      }
    },
  }
}
</script>

<style scope>

.review-details {
  float: left;
}

.review-header {
  padding-bottom: 0;
}

.review-body {
  padding-bottom: 0;
  overflow: hidden;
}

.lineclamp {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}

.course-label {
  display: block;
  margin-bottom: 0;
}

.semester-label {
  display: block;
  clear: both;
}

.expand-button {
  margin: 0 auto;
  clear: both;
  display: block;
}

.expand-enter-active,
.expand-leave-active {
  transition: height 1s ease-in-out;
  overflow: hidden;
}

.expand-enter,
.expand-leave-to {
  height: 0;
}

.gallery {
  margin-bottom: 0;
  padding-bottom: 0;
}

.aspectType {
  padding-top: 0.35em;
  font-family: work-sans-regular, sans-serif;
}

.aspectAverage {
    font-size: 2.5em;
    width: 2.15em;
    height: 2.15em;
    margin-right: 0.75em;
    color: white;
    border-radius: 50%;
    display:flex;
    justify-content:center;
    align-items:center;
    float: left;
    margin-right: 0.75rem;
}

.expanded {
  overflow: scroll;
  height: 8em;
}
</style>
