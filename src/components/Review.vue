<template>
  <div class="review">
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        <v-list-tile @click="yeet">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="yeet">
          <v-list-tile-action>
            <v-icon>search</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Search</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="returnToProf">
          <v-list-tile-action>
            <v-icon>arrow_back</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Return to Professor {{professor.name}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Student Opinion</v-toolbar-title>
    </v-toolbar>

    <v-content class="review-content">
      <v-layout align-center justify-start row>

        <v-flex xs6>
          <h1 class="review-header">What do you want to say about Professor {{professor.name}}?</h1>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-select
              v-model="review.type"
              :items="types"
              label="Question you would like to answer"
              required
              outline
            >
              <template slot="selection" slot-scope="data">
                {{ fullType(data.item) }}
              </template>
              <template slot="item" slot-scope="data">
                {{ fullType(data.item) }}
              </template>
            </v-select>
            <v-layout align-center justify-start row>
              <v-select
                v-model="review.course"
                :items="professor.courses"
                label="Course"
                required
                outline
                style="margin-right:1em;"
                xs4
              ></v-select>
              <v-select
                v-model="review.semester"
                :items="semesters"
                label="Semester"
                required
                outline
                style="margin-right:1em;"
                xs4
              ></v-select>
              <v-text-field
                v-model="review.year"
                label="Year"
                type="number"
                required
                outline
                :rules="[rules.required, rules.counter]"
                maxlength="4"
                xs4
              ></v-text-field>
            </v-layout>
            <v-textarea
              v-model="review.text"
              label="Review"
              required
              outline
            ></v-textarea>
            <v-slider
              v-model="review.rating"
              :max="10"
              :min="0"
              :step="1"
              label="Rating"
            ></v-slider>

            <v-btn
              :disabled="!valid"
              @click="submit"
              color="primary"
            >
              submit
            </v-btn>
            <v-btn @click="clear" color="primary" outline>clear</v-btn>
          </v-form>
        </v-flex>
        <v-flex xs1 />
        <v-flex xs4 >
          <h1 class="review-header">How your review will look:</h1>
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
        <v-flex xs1 />
      </v-layout>

    </v-content>


    <v-footer color="indigo" app>
      <span class="white--text" id="footer">&copy; 2018</span>
    </v-footer>
  </div>
</template>

<script>
import Rating from './Rating.vue'

export default {
  name: 'Review',
  components: {Rating},
  data: function () {
    return {
      drawer: null,
      valid: false,
      semesters: [
        'Fall',
        'Winter',
        'Spring',
        'Summer'
      ],
      review: {
        id: '',
        course: '',
        semester: 'Fall',
        year: 2018,
        expanded: false,
        text: 'This is what I think about the professor.',
        rating: 5,
        type: 'homework'
      },
      rules: {
        required: value => !!value || 'Required.',
        counter: value => (value <= 2018 && value >= 1990 && value.length == 4) || "",
      }
    };
  },

  created: function () {
    this.review.id = this.guid();
    this.review.course = this.courses[Math.floor(Math.random() * this.courses.length)];
  },

  computed: {
    code: function() {return this.$route.params.code;},
    professor: function() {return this.$store.getters.professor(this.code);},
    courses: function() {return this.professor.courses;},
    types: function() {return this.$store.getters.types;},
  },

  methods: {
    fullType: function(item) {
      switch(item) {
        case "homework": return "How much time and effort did the homework take?";
        case "exams":    return "Did the professor prepare you for the exams?";
        case "reading":  return "How much did you have to read for the class?";
        case "projects": return "How much time and effort did the projects take?"
        default:         return item;
      }
    },

    submit: function() {
      this.$store.commit('addReview', {
        code: this.code,
        review: this.review
      });
      this.returnToProf();
    },
    clear: function() {
      this.review.semester = 'Fall';
      this.review.year = 2018;
      this.review.expanded = false;
      this.review.text = '';
      this.review.rating = 5;
      this.review.type = 'homework';
    },
    returnToProf: function() {
      window.location.href = "/#/professor/" + this.code;
    },
    yeet: function() {
      window.location.href = "/#/";
    },
    expandReview: function() {
      this.review.expanded = !this.review.expanded;
    },
    guid: function() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
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

.review-content {
  margin: 2em;
}

.review-header {
  font-family: work-sans-thin, sans-serif;
  margin-bottom: 0.5em;
}
</style>
