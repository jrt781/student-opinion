<template>
  <div class="aspect">
    <rating v-bind:score="average" v-bind:size="2" class="aspectAverage"/>
    <h1 class="aspectType">{{question}}</h1>

    <v-container grid-list-xl class="gallery">
      <v-layout row wrap>
        <v-flex v-for="review in firstThree()" :key="review.id"  xs4 >
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
      </v-layout>
    </v-container>

    <transition
        name="expand"
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave">
        <v-container grid-list-xl v-if="isExpanded" class="gallery">
          <v-layout row wrap>
            <v-flex v-for="review in afterFirstThree()" :key="review.id"  xs4 >
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
          </v-layout>
        </v-container>
    </transition>
    <br />

    <v-btn round flat class="expand-button" v-on:click="expandAspect"
        v-if="!isExpanded && reviewsInShowCourses.length > 3">
      <expand-icon />
    </v-btn>
    <v-btn round flat class="expand-button" v-on:click="collapseAspect"
      v-if="isExpanded && reviewsInShowCourses.length > 3">
      <collapse-icon />
    </v-btn>
    <br />

  </div>
</template>

<script>
import Rating from './Rating.vue'

import ExpandIcon from "vue-material-design-icons/ChevronDown.vue"
import CollapseIcon from "vue-material-design-icons/ChevronUp.vue"

export default {
  name: 'Aspect',

  components: {
    ExpandIcon, CollapseIcon, Rating
  },

  props: {
    type: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    },
    showCourses: {
      type: Array,
      required: true
    },
    sortingMethod: {
      type: String,
      require: true
    }
  },

  data: function () {
    return {
      isExpanded: false,
    };
  },

  created: function () {

  },

  computed: {
    average: function() {
      // calculate the average and report back to the parent component
      var sum =  this.reviews.reduce((total, review) => {
        return total + review.rating;
      }, 0);
      var average = sum / this.reviews.length;
      return Math.round( average * 10) / 10;
    },
    reviews: function() {
      var type = this.type;
      return this.$store.getters.professor(this.code).reviews.filter(function(review) {
        return review.type == type;
      });
    },
    question: function() {
      switch(this.type) {
        case "homework": return "How much time and effort did the homework take?";
        case "exams":    return "Did the professor prepare you for the exams?";
        case "reading":  return "How much did you have to read for the class?";
        case "projects": return "How much time and effort did the projects take?"
        default:         return this.type;
      }
    },
    reviewsInShowCourses: function() {
      var selectedReviews = [];
      for (var i = 0; i < this.reviews.length; i++) {
        if (this.isSelectedCourse(this.reviews[i].course)) {
          selectedReviews.push(this.reviews[i]);
        }
      }
      selectedReviews = selectedReviews.sort(this.sortingFunction);
      return selectedReviews;
    },
    sortingFunction: function() {
      function seasonNum(season) {
        switch(season) {
          case "Fall":   return 4;
          case "Summer": return 3;
          case "Spring": return 2;
          case "Winter": return 1;
          default:       return 0;
        }
      }

      switch (this.sortingMethod) {
        case "rating, highest": return function(r1, r2){return r2.rating - r1.rating};
        case "rating, lowest": return function(r1, r2){return r1.rating - r2.rating};
        case "semester, most recent": return function(r1, r2){
          var diff = r2.year - r1.year;
          if (diff != 0) return diff;
          return seasonNum(r2.semester) - seasonNum(r1.semester);
        };
        case "semester, oldest": return function(r1, r2){
          var diff = r1.year - r2.year;
          if (diff != 0) return diff;
          return seasonNum(r1.semester) - seasonNum(r2.semester);
        };
        default: return function(r1, r2){return r2.rating - r1.rating};
      }
    },
  },

  methods: {
    expandReview: function(reviewId) {
      for (var i = 0; i < this.reviews.length; i++) {
        if (this.reviews[i].id == reviewId) {
          this.reviews[i].expanded = !this.reviews[i].expanded;
        }
      }
    },
    expandAspect: function() {
      this.isExpanded = true;
    },
    collapseAspect: function() {
      this.isExpanded = false;
    },
    firstThree: function() {
      return this.reviewsInShowCourses.slice(0, 3);
    },
    afterFirstThree: function() {
      return this.reviewsInShowCourses.slice(3);
    },
    isSelectedCourse: function(course) {
      for (var i = 0; i < this.showCourses.length; i++) {
        if (course == this.showCourses[i]) {
          return true;
        }
      }
      return false;
    },
    enter(element) {
      const width = getComputedStyle(element).width;

      element.style.width = width;
      element.style.position = 'absolute';
      element.style.visibility = 'hidden';
      element.style.height = 'auto';

      const height = getComputedStyle(element).height;

      element.style.width = null;
      element.style.position = null;
      element.style.visibility = null;
      element.style.height = 0;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
    leave(element) {
      const height = getComputedStyle(element).height;

      element.style.height = height;

      setTimeout(() => {
        element.style.height = 0;
      });
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
