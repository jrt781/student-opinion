<template>
  <div id="professorPage">

    <h1 id="name">{{ name }}</h1>

    <br />
    <hr />
    <br />

    <div class="aspect">
      <h1>Homework</h1>

      <v-container grid-list-xl class="gallery">
        <v-layout row wrap>
          <v-flex v-for="review in firstThree(reviews)" :key="review.id"  xs4 >
            <v-card class="card">
              <v-card-title primary-title>
                <h3 class="headline mb-0">{{review.course}}, {{review.semester}}</h3>
              </v-card-title>
              <v-card-text>
                {{ truncate(review.text, 165, '...')}}
              </v-card-text>
              <v-card-actions>
                <v-btn flat color="orange">More</v-btn>
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
              <v-flex v-for="review in afterFirstThree(reviews)" :key="review.id"  xs4 >
                <v-card class="card">
                  <v-card-title primary-title>
                    <h3 class="headline mb-0">{{review.course}}, {{review.semester}}</h3>
                  </v-card-title>
                  <v-card-text>
                    {{ truncate(review.text, 165, '...')}}
                  </v-card-text>
                  <v-card-actions>
                    <v-btn flat color="orange">More</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
      </transition>

      <v-btn round flat class="expand-button" v-on:click="expandAspect"
          v-if="!isExpanded && reviews.length > 3">
        <expand-icon />
      </v-btn>
      <v-btn round flat class="expand-button" v-on:click="collapseAspect"
          v-if="isExpanded">
        <collapse-icon />
      </v-btn>

    </div> <!-- end aspect -->

    <hr />
  </div> <!-- end professorPage -->




</template>

<script>
import ExpandIcon from "vue-material-design-icons/ChevronDown.vue"
import CollapseIcon from "vue-material-design-icons/ChevronUp.vue"

function truncate(text, length, suffix) {
    return text.substring(0, length) + suffix;
}

var loremIpsum = require('lorem-ipsum');

  export default {
    components: {
      ExpandIcon, CollapseIcon
    },

    data: () => ({
      isExpanded: false,
      reviews: [],
      name: 'John Smith',
    }),

    filters: {
        truncate
    },

    created: function () {
      var NUM_REVIEWS = 8;
      var departments = ['CS', 'HIST', 'ENG', 'PHYS', 'ECON', 'GEO'];
      var seasons = ['Fall', 'Winter', 'Spring', 'Summer'];

      function guid() {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
      }

      for (var i = 0; i < NUM_REVIEWS; i++) {
        var review = {};
        review.id = guid();
        review.course = departments[Math.floor(Math.random() * departments.length)] + ' ' + Math.round(100+(Math.random()*400));
        review.semester = seasons[Math.floor(Math.random() * seasons.length)] + ' ' + Math.round(2012+(Math.random()*6));
        review.text = loremIpsum({
            count: 2                      // Number of words, sentences, or paragraphs to generate.
          , units: 'paragraph'            // Generate words, sentences, or paragraphs.
          , sentenceLowerBound: 5         // Minimum words per sentence.
          , sentenceUpperBound: 10        // Maximum words per sentence.
          , paragraphLowerBound: 2        // Minimum sentences per paragraph.
          , paragraphUpperBound: 3        // Maximum sentences per paragraph.
          , format: 'plain'               // Plain text or html
          , words: ['The homework was long.',
              'I found the homework helpful in preparing for the exam.',
              'The homework could have been shorter.',
              'I usually worked in groups and could get the assignments done.',
              'The projects were rather interesting.'
            ]  // Custom word dictionary. Uses dictionary.words (in lib/dictionary.js) by default.
        });
        this.reviews.push(review);
      }
    },

    computed: {

    },

    methods: {
      truncate,
      expandAspect: function() {
        this.isExpanded = true;
      },
      collapseAspect: function() {
        this.isExpanded = false;
      },
      firstThree: function(array) {
        return array.slice(0, 3);
      },
      afterFirstThree: function(array) {
        return array.slice(3);
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

#professorPage {
  padding: 2rem;
}

#name {
  font-size: 4em;
}

.expand-button {
  margin: 1rem auto;
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

</style>
