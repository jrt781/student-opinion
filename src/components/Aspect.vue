<template>

  <div class="aspect">
    <h1>{{question}}</h1>

    <v-container grid-list-xl class="gallery">
      <v-layout row wrap>
        <v-flex v-for="review in firstThree(reviews)" :key="review.id"  xs4 >
          <v-card class="card">
            <v-card-title primary-title class="review-header">
              <div class="rating elevation-3">{{review.rating}}</div>
              <div class="review-details">
                <h3 class="headline mb-0 course-label">{{review.course}}</h3>
                <h3 class="semester-label">{{review.semester}}</h3>
              </div>
            </v-card-title>
            <v-card-text class="review-body">
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
                <v-card-title primary-title class="review-header">
                  <div class="rating elevation-3">{{review.rating}}</div>
                  <div class="review-details">
                    <h3 class="headline mb-0 course-label">{{review.course}}</h3>
                    <h3 class="semester-label">{{review.semester}}</h3>
                  </div>
                </v-card-title>
                <v-card-text class="review-body">
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
    <br />

    <v-btn round flat class="expand-button" v-on:click="expandAspect"
        v-if="!isExpanded && reviews.length > 3">
      <expand-icon />
    </v-btn>
    <v-btn round flat class="expand-button" v-on:click="collapseAspect"
        v-if="isExpanded">
      <collapse-icon />
    </v-btn>
    <br />

  </div> <!-- end aspect -->

</template>

<script>
import ExpandIcon from "vue-material-design-icons/ChevronDown.vue"
import CollapseIcon from "vue-material-design-icons/ChevronUp.vue"

function truncate(text, length, suffix) {
    return text.substring(0, length) + suffix;
}

var loremIpsum = require('lorem-ipsum');

  export default {
    name: 'Aspect',

    components: {
      ExpandIcon, CollapseIcon
    },

    props: {
      type: {
        type: String,
        required: true
      },
      department: {
        type: String,
        required: true
      },
    },

    data: function () {
      return {
        isExpanded: false,
        reviews: [],
      };
    },

    filters: {
        truncate
    },

    created: function () {
      var NUM_REVIEWS = Math.round(2+(Math.random()*8));
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
        review.course = this.department + ' ' + Math.round(100+(Math.random()*400));
        review.semester = seasons[Math.floor(Math.random() * seasons.length)] + ' ' + Math.round(2012+(Math.random()*6));
        review.text = loremIpsum({
            count: 2                      // Number of words, sentences, or paragraphs to generate.
          , units: 'paragraph'            // Generate words, sentences, or paragraphs.
          , sentenceLowerBound: 5         // Minimum words per sentence.
          , sentenceUpperBound: 10        // Maximum words per sentence.
          , paragraphLowerBound: 2        // Minimum sentences per paragraph.
          , paragraphUpperBound: 3        // Maximum sentences per paragraph.
          , format: 'plain'               // Plain text or html
          , words: this.sentences
        });
        review.rating = Math.round((Math.random()*10));
        this.reviews.push(review);
      }
    },

    computed: {
      question: function() {
        switch(this.type) {
          case "homework": return "How much time and effort did the homework take?";
          case "exams":    return "Did the professor prepare you for the exams?";
          case "reading":  return "How much did you have to read for the class?";
          default:         return this.type;
        }
      },
      sentences: function() {
        switch(this.type) {
          case "homework": return ['The homework was long.',
              'I found the homework helpful in preparing for the exam.',
              'The homework could have been shorter.',
              'I usually worked in groups and could get the assignments done.',
              'The projects were rather interesting.'
            ];
          case "exams": return ['There were too many exams.',
              'I found the homework helpful in preparing for the exam.',
              'The exams took about as long as the professor said they would.',
              'All of the exams were in the testing center.',
              'The exam was much different than what the professor talked about in class.'
            ];
          case "reading": return ['There was a reading assignment every class.',
              'The professor just lectured about what we read about before class.',
              'It was easy to get distracted while reading.',
              'I usually just looked up summaries of the reading online.',
              'Some of the readings were by the professor.'
            ];
          default: return ['The homework was long.',
              'I found the homework helpful in preparing for the exam.',
              'The homework could have been shorter.',
              'I usually worked in groups and could get the assignments done.',
              'The projects were rather interesting.'
            ];
        }
      }
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

.rating {
  font-size: 2em;
  background-color: #303BA6;
  color: white;
  border-radius: 50%;
  display:flex;
  justify-content:center;
  align-items:center;
  width:2em;
  height:2em;
  float: left;
  margin-right: 0.75rem;
}

.review-details {
  float: left;
}

.review-header {
  padding-bottom: 0;
}

.review-body {
  padding-bottom: 0;
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

</style>
